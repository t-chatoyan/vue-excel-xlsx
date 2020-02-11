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
                default: () => {
                    return [ { name: 'SheetName', columns: [], data: [] } ]
                }
            },
            filename: {
                type: String,
                default: 'excel'
            }
        },

        methods: {
            exportExcel() {
                let wb = XLSX.utils.book_new()                

                this.sheets.forEach(sheet => {
                if (sheet.columns.length === 0 || sheet.data.length === 0){
                    console.log(`Columns or data of sheet '${sheet.name}' missing! Sheet skipped.`);
                } else {
                    let createXLSLFormatObj = [];
                    let newXlsHeader = [];
                    sheet.columns.forEach(value => {
                        newXlsHeader.push(value.label);
                    });

                    createXLSLFormatObj.push(newXlsHeader);
                    sheet.data.forEach(value => {
                        let innerRowData = [];
                        sheet.columns.forEach(val => {
                            if (val.dataFormat && typeof val.dataFormat === 'function') {
                                innerRowData.push(val.dataFormat(value[val.field]));
                            } else {
                                innerRowData.push(value[val.field]);
                            }
                        });
                        createXLSLFormatObj.push(innerRowData);
                    });                    

                    let ws_name = sheet.name;
                    
                    let ws = XLSX.utils.aoa_to_sheet(createXLSLFormatObj);
                    XLSX.utils.book_append_sheet(wb, ws, ws_name);
                }
                })

                XLSX.writeFile(wb, this.filename);
            }
        }
    }
</script>