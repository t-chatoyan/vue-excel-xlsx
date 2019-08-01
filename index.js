import DownloadExcel from "./DownloadExcel.vue";

export default {
    install(Vue, options) {
        Vue.component("vue-excel-xlsx", DownloadExcel);
    }
};