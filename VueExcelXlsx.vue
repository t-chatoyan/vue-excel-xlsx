<template>
    <button @click="exportExcel">
        <slot></slot>
    </button>
</template>

<script>
    import XLSX from 'xlsx/xlsx';

    export default {
        name: "vue-excel-xlsx",
        props: {
            sheets: {
                type: Array,
                default: () => [],
            },
            columns: {
                type: Array,
                default: () => []
            },
            data: {
                type: Array,
                default: () => []
            },
            fileName: {
                type: String,
                default: 'excel'
            },
            sheetName: {
                type: String,
                default: 'SheetName'
            },
            fileType: {
                type: String,
                default: 'xlsx',
                validator: (val) => ['xlsx', 'xls'].includes(val)
            }
        },

        methods: {
            exportExcel() {
                let vm = this;

                let wb = XLSX.utils.book_new();

                let sheets = vm.sheets;
                if (sheets.length === 0) {
                    sheets = [{
                        columns: vm.columns,
                        data: vm.data,
                        sheetName: vm.sheetName,
                    }];
                }

                sheets.forEach((sheet) => {
                    let createXLSLFormatObj = [];
                    let newXlsHeader = [];
                    if (sheet.columns.length === 0) {
                        console.log("Add columns!");
                        return;
                    }
                    if (sheet.data.length === 0) {
                        console.log("Add data!");
                        return;
                    }

                    const colConfig = [];

                    sheet.columns.map((column, index) => {
                        newXlsHeader.push(column.label);

                        if (column.width) {
                            let colWidth = column.width;

                            if (colWidth === 'auto') {
                                colWidth = column.label.length;
                            }

                            colConfig[index] = { wch: colWidth };
                        }
                    });

                    createXLSLFormatObj.push(newXlsHeader);
                    sheet.data.map(value => {
                        let innerRowData = [];
                        sheet.columns.map((val, colIndex) => {
                            let fieldValue = value[val.field];
                            if (val.field.split('.').length > 1) {
                                fieldValue = this.getNestedValue(value, val.field);
                            }
                            if (val.dataFormat && typeof val.dataFormat === 'function') {
                                innerRowData.push(val.dataFormat(fieldValue));
                            } else {
                                innerRowData.push(fieldValue);
                            }

                            if (val.width === 'auto') {
                                const fieldValueLength = fieldValue.length;

                                if (fieldValueLength > colConfig[colIndex].wch) colConfig[colIndex].wch = fieldValueLength;
                            }
                        });
                        createXLSLFormatObj.push(innerRowData);
                    });

                    let ws_name = sheet.sheetName;

                    let ws = XLSX.utils.aoa_to_sheet(createXLSLFormatObj);

                    ws['!cols'] = colConfig;

                    XLSX.utils.book_append_sheet(wb, ws, ws_name);
                });

                let fileName = vm.fileName + "." + vm.fileType;

                XLSX.writeFile(wb, fileName);
            },
            getNestedValue(object, string) {
                string = string.replace(/\[(\w+)\]/g, '.$1');
                string = string.replace(/^\./, '');
                let a = string.split('.');
                for (let i = 0, n = a.length; i < n; ++i) {
                    let k = a[i];
                    if (k in object) {
                        object = object[k];
                    } else {
                        return;
                    }
                }
                return object;
            }
        }
    }
</script>
