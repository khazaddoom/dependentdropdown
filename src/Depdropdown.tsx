import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { DepdropdownContainerProps } from "../typings/DepdropdownProps";

import "./ui/Depdropdown.css";

export function Depdropdown({ sampleText }: DepdropdownContainerProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText ? sampleText : "World"} />;
}
