import { ReactElement, createElement, useEffect, useState } from "react";
import { ListValue, ListAttributeValue, Option } from "mendix";
import Select from "react-select";
export interface HelloWorldSampleProps {
    sampleText?: string;
    sourceobject: ListValue;
    sourceKey: ListAttributeValue<string>;
}

type DataProps = {
    option: Option<string>;
    label: Option<string>;
};

export function HelloWorldSample({ sourceobject, sourceKey }: HelloWorldSampleProps): ReactElement {
    const [options, setOptions] = useState<DataProps[]>([]);
    useEffect(() => {
        if (sourceobject.items) {
            setOptions(
                sourceobject.items.map(item => {
                    return {
                        option: sourceKey.get(item).value,
                        label: sourceKey.get(item).value
                    };
                })
            );
        }
    }, [sourceobject.items, sourceKey]);

    return (
        <Select
            options={options}
            onChange={(e: any) => {
                console.info(e);
            }}
        />
    );
}
