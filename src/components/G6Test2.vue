<template>
   <div style="height: 100%">
       <div class="title">{{myProps.title}}</div>
       <div id="container"></div>
   </div>
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
    .title{
        height: 10%;
    }
    #mountNode2{
        width: 100%;
        height: 90%;
    }
</style>