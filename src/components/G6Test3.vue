<template>
   <div style="height: 100%">
       <div class="title">{{myProps.title}}</div>
       <div id="container3"></div>
   </div>
</template>

<script>
    import userTest3 from './useTest3'

    export default {
        name: "G6Test3",
        props: ['myProps'],
        setup(props) {
            userTest3()
            return {myProps: props.myProps}
        }
    }
</script>

<style lang="less">
    .title{
        height: 10%;
    }
    #container3{
        width: 100%;
        height: 90%;
    }
</style>
