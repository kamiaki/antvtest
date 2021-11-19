<template>
    <div>{{myProps.title}}</div>
    <div id="mountNode2"></div>
</template>

<script>
    import userTest2 from './useTest2'

    export default {
        name: "G6Test2",
        props: ['myProps'],
        setup(props) {
            userTest2()
            return {myProps: props.myProps}
        }
    }
</script>

<style lang="less">
</style>