export namespace FormApi {

    export type TextFieldType = {
        type: 'textedit';
        label: string;
        placeholder: string;
        height: string;
        width: string;
    };

    export type SelectionType = {
        type: 'selection';
        label: string;
        items: string[];
        height: string;
        width: string;
    };

    export type ButtonType = {
        type: 'button';
        text: string;
        height: string;
        width: string;
    };

    export type FieldType = 'textedit' | 'selection' | 'button';

    export type UiType = TextFieldType | SelectionType | ButtonType;

    export interface WidgetsList {
        ui: UiType[];
        height: string;
        width: string;
    }
}