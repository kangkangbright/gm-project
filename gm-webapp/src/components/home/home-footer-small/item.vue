<template>
    <div class="home_home-footer-small_item" :style="footpicword.footpic">{{footpicword.footword}}</div>
</template>

<script>
    export default {
        name: "item",
        props:['footpicword']
    }
</script>

<style scoped>

</style>