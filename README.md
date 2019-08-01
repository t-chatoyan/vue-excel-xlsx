# vue-excel-xlsx

Convert your data as an XLSX file

# Getting started

``` javascript
    npm install vue-excel-xlsx --save
```

import vue-excel-xlsx in your app:

``` javascript
    import Vue from "vue";
    import "vue-excel-xlsx";
```

Add in your app
``` html
    <vue-excel-xlsx
        :data="data"
        :columns="columns"
        :filename="filename"
        >
        Download
    </vue-excel-xlsx>
```

``` javascript
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
```