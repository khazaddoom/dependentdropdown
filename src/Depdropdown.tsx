import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { DepdropdownContainerProps } from "../typings/DepdropdownProps";

import "./ui/Depdropdown.css";

export function Depdropdown({ sourceobject, sourceKey }: DepdropdownContainerProps): ReactElement {
    return <HelloWorldSample sourceobject={sourceobject} sourceKey={sourceKey}/>;
}
