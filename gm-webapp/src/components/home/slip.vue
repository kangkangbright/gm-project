<template>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide home_box1"></div>
                <div class="swiper-slide home_box2"></div>
                <div class="swiper-slide home_box3"></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
</template>

<script>
    import Swiper from "swiper";
    export default {
        name: "slip",
        props:['dataslip'],
        mounted(){
            this._initSwiper()
        },
        methods:{
            _initSwiper(){
                new Swiper(".swiper-container",{
                    //direction:"vertical",// 垂直切换选项    不写direction，默认是水平
                    loop: true, // 循环模式选项
                    //effect:"flip",
                    autoplay:{
                        stopOnLastSlide:true,//自动轮播
                        delay: 1500//时间间隔
                    },
                    // 如果需要分页器
                    pagination:{
                        el:".swiper-pagination",
                        clickable :true//点击小圆点（分页器）切换
                    }

                })
            }
        }
    }
</script>

<style scoped>
@import "../../../node_modules/swiper/css/swiper.css";
</style>