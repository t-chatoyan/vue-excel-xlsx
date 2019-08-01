import VueExcelXlsx from "./VueExcelXlsx.vue";

export default {
    install(Vue, options) {
        Vue.component("vue-excel-xlsx", VueExcelXlsx);
    }
};