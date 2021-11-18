<template>
    <div class="aaaa">
        <div>{{myProps.title}}</div>
        <div id="container"></div>
    </div>
</template>

<script>
    import userTest1 from './useTest1'

    export default {
        name: "G6Test1",
        props: ['myProps'],
        setup(props) {
            const myProps = props.myProps
            const {a} = userTest1()
            console.info(a)
            console.info(a.value)
            return {myProps}
        }
    }
</script>

<style lang="less">
    .aaaa{
        .g6-component-contextmenu {
            position: absolute;
            z-index: 2;
            list-style-type: none;
            background-color: #363b40;
            border-radius: 6px;
            font-size: 14px;
            color: hsla(0,0%,100%,.85);
            width: fit-content;
            transition: opacity .2s;
            text-align: center;
            padding: 0px 20px 0px 20px;
            box-shadow: 0 5px 18px 0 rgba(0, 0, 0, 0.6);
            border: 0px;
        }
        .g6-component-contextmenu ul {
            padding-left: 0px;
            margin: 0;
        }
        .g6-component-contextmenu li {
            cursor: pointer;
            list-style-type: none;
            list-style: none;
            margin-left: 0;
            line-height: 38px;
        }
        .g6-component-contextmenu li:hover {
            color: #aaaaaa;
        }
    }

</style>