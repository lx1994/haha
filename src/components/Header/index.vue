<!-- 组件说明 -->
<template>
    <header id="header">
        <h1>哈哈电影</h1>
    </header>
</template>

<script>
    //import x from ''
    export default {
        name:'Header',//组件命名  vue 工具中调试好看
        components: {

        },
        data () {
            return {

            };
        },
        computed: {

        },
        methods: {

        },
    }
</script>

<style lang='scss' scoped>
#header{width:100%; height:50px; color: #fff; background: #e54847; border-bottom: 1px solid #e54847; position: relative;}
#header h1{ font-size: 18px; text-align: center; line-height: 50px; font-weight: normal; }
#header i{ position: absolute; left: 5px; top: 50%; margin-top: -13px; font-size: 26px;}

</style>