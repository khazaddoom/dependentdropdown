/**
 * This file was generated from Depdropdown.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue, ReferenceValue } from "mendix";

export interface DepdropdownContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    targetDatasource: ListValue;
    parentRef: ReferenceValue;
    rootObjectProperty: ListAttributeValue<string>;
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
    targetDatasource: {} | { caption: string } | { type: string } | null;
    parentRef: string;
    rootObjectProperty: string;
}
