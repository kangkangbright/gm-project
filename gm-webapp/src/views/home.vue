<template>
    <div class="home_big">
        <gm-home-header></gm-home-header>
        <gm-home-footer></gm-home-footer>
        {{this.homeInfo}}}
    </div>
</template>

<script>
    import header from '../components/home/header'
    import footer from '../components/home/footer'
    import cartApi from '../apis/cartApi'
    export default {
        name: "home",
        components: {
            'gm-home-header': header,
            'gm-home-footer': footer
        },
        data () {
            return {
                homeInfo: [] // 页面的数据模型
            }
        },
        methods: {
            /**
             * 页面的数据加载
             **/
            async _initPageData () {
                let data = await cartApi.getCartInfoByUserId()
                this. homeInfo = data
            }
        },
        beforeMount () {
            this._initPageData()
        }
    }
</script>

<style scoped>
    @import "../assets/css/home.css";
</style>