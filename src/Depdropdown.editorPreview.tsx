import { ReactElement, createElement } from "react";

export function preview(): ReactElement {
    return <h1>Hello</h1>;
}

export function getPreviewCss(): string {
    return require("./ui/Depdropdown.css");
}
