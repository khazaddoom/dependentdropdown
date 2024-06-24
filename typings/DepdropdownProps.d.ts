/**
 * This file was generated from Depdropdown.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";

export interface DepdropdownContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    sourceobject: ListValue;
    sourceKey: ListAttributeValue<string>;
}

export interface DepdropdownPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    sourceobject: {} | { caption: string } | { type: string } | null;
    sourceKey: string;
}
