# vue-excel-xlsx

Convert your data as an XLSX file

## Getting started

``` javascript
    npm install vue-excel-xlsx --save
```

###import vue-excel-xlsx in your app:

``` javascript
    import VueExcelXlsx from "vue-excel-xlsx";
    import Vue from "vue";

    Vue.use(VueExcelXlsx);
```

###Add in your template
``` html
    <vue-excel-xlsx
        :data="data"
        :columns="columns"
        :filename="'filename'"
        :sheetname="'sheetname'"
        >
        Download
    </vue-excel-xlsx>
```

###Add in your script
``` javascript
        data() {
            return {
                columns : [
                    {
                        label: "Name",
                        field: "name",
                    },
                    {
                        label: "Country",
                        field: "country",
                    },
                ],
                data : [
                    {
                        name: "Tony Peña",
                        country: "United States",
                    },
                    {
                        name: "Thessaloniki",
                        country: "Greece",
                    }
                ],
            }
        }
```
