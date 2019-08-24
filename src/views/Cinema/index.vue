<!-- 组件说明 -->
<template>
    <div class='' id="main">
        <Header></Header>
        <TabBar></TabBar>
    </div>
</template>

<script>
    //import x from ''
    import Header from '@/components/Header'
    import TabBar from '@/components/TabBar'
    export default {
        name : 'Cinema',
        components: {
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