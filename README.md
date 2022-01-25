# vue-excel-xlsx

Convert your data as an XLSX file

## Getting started

``` javascript
    npm install vue-excel-xlsx --save
```

##### OR

``` javascript
    yarn add vue-excel-xlsx
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
        :file-name="'filename'"
        :file-type="'xlsx'"
        :sheet-name="'sheetname'"
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
                    {
                        label: "Country",
                        field: "address.country",
                    },
                    {
                        label: "City",
                        field: "address.city",
                    }
                ],
                data : [
                    {
                        product: "Beverage",
                        price: 10,
                        quantity: 2,
                        address: {
                            country: 'Armenia',
                            city: 'Yerevan',
                        }
                    },
                    {
                        product: "Snack",
                        price: 12,
                        quantity: 6,
                        address: {
                            country: 'Armenia',
                            city: 'Yerevan',
                        }
                    },
                    {
                        product: "Beverage",
                        price: 10,
                        quantity: 5,
                        address: {
                            country: 'Armenia',
                            city: 'Yerevan',
                        }
                    },
                    {
                        product: "Snack",
                        price: 12,
                        quantity: 3,
                        address: {
                            country: 'Armenia',
                            city: 'Yerevan',
                        }
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
#### Props

| Name      | Type  | Description | Default Value|
| :------------ |:--------------- | :-----|:-----|
| columns       | Array           | Columns configuration |[] |
| data          | Array           | Rows data   |[]   |
| fileName      | String          | The name of excel file    |excel |
| sheetName     | String          | The SheetName of excel file    |SheetName    |
| fileType      | String          | The Type of excel file. (xlsx, xls)     |xlsx    |
