import { ReactElement, createElement, useEffect,  } from "react";
import {ListValue, ListAttributeValue} from 'mendix'
export interface HelloWorldSampleProps {
    sampleText?: string;
    sourceobject: ListValue;
    sourceKey: ListAttributeValue<string>;
}

export function HelloWorldSample({ sourceobject, sourceKey }: HelloWorldSampleProps): ReactElement {
    useEffect(() => {
        const item = sourceobject?.items;
        console.info(item)
    },[])

    return <h1>Hello</h1>;
}
