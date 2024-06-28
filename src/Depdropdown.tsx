import { ReactElement, createElement } from "react";

import "./ui/Depdropdown.css";
import { SelectionOption } from "./components/SelectionOption";
import { DepdropdownContainerProps } from "typings/DepdropdownProps";

// export function Depdropdown({ rootEntityObject, rootObjectProperty }: DepdropdownContainerProps): ReactElement {
//     return <HelloWorldSample rootEntityObject={rootEntityObject} rootObjectProperty={rootObjectProperty} />;
// }

// export function Depdropdown(): ReactElement {
export function Depdropdown({
    parentRef,
    targetDatasource,
    rootObjectProperty
}: DepdropdownContainerProps): ReactElement {
    return (
        <SelectionOption
            parentRef={parentRef}
            targetDatasource={targetDatasource}
            rootObjectProperty={rootObjectProperty}
        />
    );
    // return <SelectionOption />;
}
