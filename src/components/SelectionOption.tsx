import { ReactElement, createElement, useState, useEffect } from "react";
import { ListValue, ReferenceValue, Option, ListAttributeValue, GUID } from "mendix";
import Select from "react-select";

export interface SelectionOptionProps {
    parentRef: ReferenceValue;
    targetDatasource: ListValue;
    rootObjectProperty: ListAttributeValue<string>;
}

type DataProps = {
    id: GUID;
    option: Option<string>;
    label: Option<string>;
};

export function SelectionOption({
    parentRef,
    targetDatasource,
    rootObjectProperty
}: SelectionOptionProps): ReactElement {
    const [options, setOptions] = useState<DataProps[]>([]);
    useEffect(() => {
        if (targetDatasource.items) {
            setOptions(
                targetDatasource.items.map(item => {
                    return {
                        id: item.id,
                        option: rootObjectProperty.get(item).value,
                        label: rootObjectProperty.get(item).value
                    };
                })
            );
        }
    }, [targetDatasource.items, rootObjectProperty]);

    console.info(parentRef);

    return (
        <Select
            options={options}
            onChange={e => {
                if (e?.id && targetDatasource.items && parentRef.status === "available") {
                    const objectToSet = targetDatasource.items?.find(item => item.id === e.id);
                    parentRef.setValue(objectToSet);
                }
            }}
        />
    );
}
