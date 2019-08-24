<!-- 组件说明 -->
<template>
    <div class='' id="main">
        <Header></Header>
        <TabBar></TabBar>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import TabBar from '@/components/TabBar'
    export default {
        name : 'Movie',
        components: {//局部组件注入
            Header,
            TabBar
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
//@import url()

</style>