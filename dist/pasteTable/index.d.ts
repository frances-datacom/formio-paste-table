/** @format */
import 'tabulator-tables/dist/css/tabulator.min.css';
type PasteTableValue = {
    headers: string[];
    rows: string[][];
} | null;
type PasteTableRefs = {
    labelEl?: HTMLLabelElement;
    userInfoEl?: HTMLDivElement;
    infoMsg?: HTMLDivElement;
    errorMsg?: HTMLDivElement;
    tabulatorTarget?: HTMLDivElement;
    addRowBtn?: HTMLButtonElement;
    deleteRowBtn?: HTMLButtonElement;
    maxRowMsg?: HTMLDivElement;
    deleteHint?: HTMLDivElement;
};
type PasteTableDataType = 'alphabet' | 'numeric' | 'alphanumeric' | 'email';
type PasteTableHeaderSetting = {
    value?: string;
    maxChars?: number;
    dataType?: PasteTableDataType;
};
type PasteTableSchema = {
    label?: string;
    tableHeaders?: Array<PasteTableHeaderSetting | string>;
    maxRows?: number;
    customMessage?: string;
    userInformation?: string;
    validate?: {
        required?: boolean;
        [key: string]: any;
    };
    disabled?: boolean;
    defaultValue?: any;
    [key: string]: any;
};
interface BaseComponentInstance {
    component: PasteTableSchema;
    options?: Record<string, any>;
    triggerChange(): void;
    dataValue: unknown;
    defaultValue: unknown;
    loadRefs(element: HTMLElement, refs: Record<string, string>): void;
    render(template: string): string;
    attach(element: HTMLElement): Promise<void> | void;
    detach(): void;
}
declare const PasteTableComponent_base: new (...args: unknown[]) => BaseComponentInstance;
export default class PasteTableComponent extends PasteTableComponent_base implements BaseComponentInstance {
    refs: PasteTableRefs;
    private _table;
    private _tableValue;
    private _isMutatingTable;
    private _isDetached;
    private _initAttemptId;
    private _selectedRow;
    static schema(...extend: any[]): any;
    get defaultValue(): any;
    private isBuilderPreview;
    private isReadOnlyMode;
    private getMaxRows;
    private getValidationMessage;
    private getUserInformation;
    private getConfiguredColumnRules;
    private isValidDataType;
    render(): string;
    attach(element: HTMLElement): void | Promise<void>;
    detach(): void;
    private handleTableKeyDown;
    private handleDeleteButtonKeyDown;
    private scheduleSafeInit;
    private scheduleSafeHydrate;
    private isTargetReadyForInit;
    isEmpty(value: PasteTableValue): boolean;
    checkValidity(data: any, dirty: boolean, rowData?: any, options?: any, silentCheck?: boolean): any;
    private getComponentValidationMessage;
    private getEnteredRowsFromValue;
    private isCompleteRowArray;
    private isPartiallyFilledRowArray;
    private createBlankRow;
    private parseClipboard;
    private mapRowObjectToArray;
    private mapRowArrayToObject;
    private setStoredValue;
    private syncValueFromTable;
    private normalizeTableRows;
    /**
     * Security patterns should trigger hard-clear behavior.
     * Business-rule mismatches should not.
     */
    private validateCellValue;
    private containsUnsafePattern;
    private getDataTypeLabel;
    private matchesDataType;
    private getRuleByHeader;
    /**
     * Hard clear only for security-level issues.
     */
    private clearComponentToEmpty;
    private createInputEditor;
    private buildRowsFromValue;
    private getInitialTableData;
    private applyStoredValueToTable;
    private initTableFromConfiguredHeaders;
    private handleNativePaste;
    private validatePastedRows;
    private appendRowsFromClipboard;
    private handleRowSelection;
    private handleAddRow;
    private updateAddRowButtonVisibility;
    private clearSelectedRow;
    private handleDeleteRow;
    private updateDeleteRowButtonVisibility;
    private showError;
    private hideError;
    getValue(): PasteTableValue;
    setValue(value: PasteTableValue): boolean;
}
export {};
