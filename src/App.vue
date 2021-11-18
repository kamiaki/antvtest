<template>
    <span @click="num = 1">test1</span>
    <span @click="num = 2">test2</span>
    <G6Test1 v-if="num === 1" :myProps="{title: 'test1'}"></G6Test1>
    <G6Test2 v-if="num === 2" :myProps="{title: 'test2'}"></G6Test2>
</template>

<script>
    import G6Test1 from "./components/G6Test1.vue";
    import G6Test2 from "./components/G6Test2.vue";
    import {reactive, ref} from "vue";

    export default {
        name: 'App',
        components: {
            G6Test1, G6Test2
        },
        setup() {
            const num = ref(1)
            return {num}
        }
    }
</script>

<style scoped lang="less">
    span {
        background: #ffe5e5;
        border: 1px solid red;
        margin-right: 10px;
    }
    span:hover{
        cursor: pointer;
    }
</style>