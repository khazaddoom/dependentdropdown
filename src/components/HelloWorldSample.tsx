import { ReactElement, createElement, useEffect, useState } from "react";
import { ListValue, ListAttributeValue, Option } from "mendix";
import Select from "react-select";
export interface HelloWorldSampleProps {
    rootEntityObject: ListValue;
    rootObjectProperty: ListAttributeValue<string>;
}

type DataProps = {
    option: Option<string>;
    label: Option<string>;
};

export function HelloWorldSample({ rootEntityObject, rootObjectProperty }: HelloWorldSampleProps): ReactElement {
    const [options, setOptions] = useState<DataProps[]>([]);
    useEffect(() => {
        if (rootEntityObject.items) {
            setOptions(
                rootEntityObject.items.map(item => {
                    return {
                        option: rootObjectProperty.get(item).value,
                        label: rootObjectProperty.get(item).value
                    };
                })
            );
        }
    }, [rootEntityObject.items, rootObjectProperty]);

    return (
        <Select
            options={options}
            onChange={(e: any) => {
                console.info(e);
            }}
        />
    );
}
