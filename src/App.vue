<template>
    <div style="background: rosybrown; height: 10%">
        <span @click="num = 1">test1</span>
        <span @click="num = 2">test2</span>
        <span @click="num = 3">test3</span>
    </div>
    <G6Test1 v-if="num === 1" :myProps="{title: 'test1'}"></G6Test1>
    <G6Test2 v-if="num === 2" :myProps="{title: 'test2'}" style="height: 90%"></G6Test2>
    <G6Test3 v-if="num === 3" :myProps="{title: 'test2'}" style="height: 90%"></G6Test3>
</template>

<script>
    import G6Test1 from "./components/G6Test1.vue";
    import G6Test2 from "./components/G6Test2.vue";
    import G6Test3 from "./components/G6Test3.vue";
    import {reactive, ref} from "vue";

    export default {
        name: 'App',
        components: {
            G6Test1, G6Test2, G6Test3
        },
        setup() {
            const num = ref(2)
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

    span:hover {
        cursor: pointer;
    }
</style>
