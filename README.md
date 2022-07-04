# vue-excel-xlsx

Convert your data as an XLSX file

## Getting started

``` javascript
    npm install vue-excel-xlsx --save
```

**OR**

``` javascript
    yarn add vue-excel-xlsx
```

## Import vue-excel-xlsx in your app:

``` javascript
    import VueExcelXlsx from "vue-excel-xlsx";
    import Vue from "vue";

    Vue.use(VueExcelXlsx);
```

### Add in your template

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

### Add in your script

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

## Using multiple sheets

Multiple sheets can be created by passing the `sheets` prop as an array of objects, where each object represents a sheet
and contains properties for columns, data, and the sheet name.

``` html
<vue-excel-xlsx
    :sheets="sheets"
    :file-name="'filename'"
    :file-type="'xlsx'"
    >
    Download
</vue-excel-xlsx>
```

### Add in your script

``` javascript
data() {
    return {
        sheets: [
            {
                sheetName: 'Products',
                columns : [
                    {
                        label: "Product",
                        field: "product",
                    },
                    {
                        label: "Quantity",
                        field: "quantity",
                    },
                ],
                data : [
                    {
                        product: "Beverage",
                        quantity: 2,
                    },
                    {
                        product: "Snack",
                        quantity: 6,
                    },
                ],
            },
            {
                sheetName: 'Prices',
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
                ],
                data : [
                    {
                        product: "Beverage",
                        price: 10,
                    },
                    {
                        product: "Snack",
                        price: 12,
                    },
                ],
            },
        ],
    }
},
methods: {
    priceFormat(value){
        return '$ ' + value;
    }
}
```

## Column widths

The width of a column can be set with the `width` parameter on a column definition. An arbirtary width can be set, or if
set to `auto` the width will be set to (roughly) the width of the longest cell.

### e.g.

```js
...
columns : [
    {
        label: "Product",
        field: "product",
        width: 'auto',
    },
    {
        label: "Quantity",
        field: "quantity",
        width: 20,
    },
],
...
```

## Props

| Name      | Type  | Description                         | Default Value|
|:----------|:--------------- |:------------------------------------|:-----|
| columns   | Array           | Columns configuration               |[] |
| data      | Array           | Rows data                           |[]   |
| fileName  | String          | The name of excel file              |excel |
| sheetName | String          | The SheetName of excel file         |SheetName    |
| fileType  | String          | The Type of excel file. (xlsx, xls) |xlsx    |
| sheets    | Array           | Sheet data                          |[] |
