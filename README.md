# vue-excel-xlsx

Convert your data as an XLSX file

## Getting started

``` javascript
    npm install vue-excel-xlsx --save
```

#### Import vue-excel-xlsx in your app:

``` javascript
    import VueExcelXlsx from "vue-excel-xlsx";
    import Vue from "vue";

    Vue.use(VueExcelXlsx);
```

#### Add in your template
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

#### Add in your script
``` javascript
        data() {
            return {
                columns : [
                    {
                        label: "Product",
                        field: "product",
                    },
                    {
                        label: "Price",
                        field: "price",
                        dataFormat: this.priceFormat
                    },
                    {
                        label: "Quantity",
                        field: "quantity",
                    },
                ],
                data : [
                    {
                        product: "Beverage",
                        price: 10,
                        quantity: 2
                    },
                    {
                        product: "Snack",
                        price: 12,
                        quantity: 6
                    },
                    {
                        product: "Beverage",
                        price: 10,
                        quantity: 5
                    },
                    {
                        product: "Snack",
                        price: 12,
                        quantity: 3
                    }
                ],
            }
        },
        methods: {
            priceFormat(value){
                return '$ ' + value;
            }
        }
```
