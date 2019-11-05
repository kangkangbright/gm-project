<template>
    <home_home-lin :datalin="datalin"></home_home-lin>
</template>

<script>
    import linList from "./home-lin-small/linList";
    export default {
        name: "home_lin",
        components:{
            'home_home-lin': linList
        },
        props:['datalin']
    }
</script>

<style scoped>

</style>