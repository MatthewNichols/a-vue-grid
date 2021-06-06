export enum ColumnDataType {
    String,
    Number
}

export interface ColumnDefinition {
    title: string;
    valuePropName: string;
    type?: ColumnDataType;
    display?: boolean;
}
  

export enum PageChangeTypes {
    First,
    Previous,
    Next,
    Last
}