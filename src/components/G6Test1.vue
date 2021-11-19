<template>
        <div>{{myProps.title}}</div>
        <div id="mountNode"></div>
</template>

<script>
    import userTest1 from './useTest1'

    export default {
        name: "G6Test1",
        props: ['myProps'],
        setup(props) {
            userTest1()
            return {myProps: props.myProps}
        }
    }
</script>

<style lang="less">
    #mountNode{
        width: 200px;
        height: 200px;
    }
</style>