<template>
    <button @click="exportExcel">
        <slot></slot>
    </button>
</template>

<script>
    import XLSX from 'xlsx/xlsx';
    window.$ = window.jQuery = require('jquery');

    export default {
        name: "vue-excel-xlsx",

        props: {
            columns: {
                type: Array,
                default: []
            },
            data: {
                type: Array,
                default: []
            },
            filename: {
                type: String,
                default: 'excel'
            }
        },

        methods: {
            exportExcel() {
                let createXLSLFormatObj = [];
                let newXlsHeader = [];
                if (this.columns.length === 0){
                    console.log("Add columns!");
                    return;
                }
                if (this.data.length === 0){
                    console.log("Add data!");
                    return;
                }
                $.each(this.columns, function(index, value) {
                    newXlsHeader.push(value.label);
                });

                createXLSLFormatObj.push(newXlsHeader);
                $.each(this.data, function(index, value) {
                    let innerRowData = [];
                    $.each(this.columns, function(index, val) {
                        innerRowData.push(value[val.field]);
                    });
                    createXLSLFormatObj.push(innerRowData);
                });
                console.log(createXLSLFormatObj);
                /* File Name */
                let filename = this.filename + ".xlsx";
                //
                // /* Sheet Name */
                let ws_name = "FreakySheet";
                //
                let wb = XLSX.utils.book_new(),
                    ws = XLSX.utils.aoa_to_sheet(createXLSLFormatObj);

                // /* Add worksheet to workbook */
                XLSX.utils.book_append_sheet(wb, ws, ws_name);
                XLSX.writeFile(wb, filename);
            }
        }
    }
</script>