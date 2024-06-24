import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { DepdropdownPreviewProps } from "../typings/DepdropdownProps";

export function preview({ sampleText }: DepdropdownPreviewProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss(): string {
    return require("./ui/Depdropdown.css");
}
