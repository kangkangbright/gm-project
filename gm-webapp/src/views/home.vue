<template>
    <div class="home_big">
        <gm-home-header></gm-home-header>
        <gm-home-footer :datafoot="this.homeInfo.footerinfo"></gm-home-footer>
        <gm-home-slip :dataslip="this.homeInfo.slipinfo"></gm-home-slip>
        <gm_home_home-ico :dataico="this.homeInfo.ico"></gm_home_home-ico>
        <gm-home-newthing></gm-home-newthing>
        <gm_home_home-lin :datalin="this.homeInfo.lininfo"></gm_home_home-lin>
    </div>
</template>

<script>
    import header from '../components/home/header'
    import footer from '../components/home/footer'
    import slip from '../components/home/slip'
    import home_ico from '../components/home/home_ico'
    import newthing from '../components/home/newthing'
    import home_lin from '../components/home/home_lin'
    import homeApi from '../apis/homeApi'
    export default {
        name: "home",
        components: {
            'gm-home-header': header,
            'gm-home-footer': footer,
            'gm-home-slip': slip,
            'gm_home_home-ico': home_ico,
            'gm-home-newthing': newthing,
            'gm_home_home-lin': home_lin

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
                let data = await homeApi.getCartInfoByUserId()
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