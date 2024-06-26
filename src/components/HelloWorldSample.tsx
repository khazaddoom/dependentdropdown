import { ReactElement, createElement, useEffect,  } from "react";
import {ListValue, ListAttributeValue} from 'mendix'
import CheckboxList from "./CheckboxList";

export interface HelloWorldSampleProps {
    sampleText?: string;
    sourceobject: ListValue;
    sourceKey: ListAttributeValue<string>;
}

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'];


export function HelloWorldSample({ sourceobject, sourceKey }: HelloWorldSampleProps): ReactElement {
    useEffect(() => {
        if(sourceobject && sourceobject.items && sourceobject.items[0])
            console.info(sourceKey.get(sourceobject.items[0]).value)
        else
            console.info("Error!")
    },[sourceobject.items, sourceKey])

    return <CheckboxList items={items} />;
}
