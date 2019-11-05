<template>
        <div class="home_home-ico-small_item" :style="picword.pic">{{picword.word}}</div>
</template>
<script>
    export default {
        name: "item",
        props:['picword']
    }
</script>

<style scoped>

</style>