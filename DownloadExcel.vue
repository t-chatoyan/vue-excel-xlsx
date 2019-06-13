<template>
    <button
            @click="exportExcel"
    >
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "download-excel",

        props: {
            columns: {
                type: Boolean,
                default: true
            },
            data: {
                type: Boolean,
                default: true
            },
        },

        methods: {
            exportExcel() {
                console.log('Package development is not complete')
            }
        }
    }
</script>

<style scoped>

</style>