<template>
    <div class="home_home-footer-small_list">
        <home_home-footer-small_list :footpicword="footpicword" :key="footid" v-for="(footpicword,footid) in datafoot"></home_home-footer-small_list>
    </div>
</template>

<script>
    import item from './item'
    export default {
        name: "list",
        components: {
            'home_home-footer-small_list': item
        },
        props:['datafoot']
    }
</script>

<style scoped>

</style>