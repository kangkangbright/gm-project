<template>
    <div class="home_home-ico-small_list">
        <home_home-ico-small_list :picword="picword" :key="icoid" v-for="(picword,icoid) in dataico"></home_home-ico-small_list>
    </div>
</template>

<script>
    import item from './item'
    export default {
        name: "list",
        components: {
            'home_home-ico-small_list': item
        },
        props:['dataico']
    }
</script>

<style scoped>

</style>