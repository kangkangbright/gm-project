<template>
    <div class="home_home-lin-small_linlist">
        <home_home-lin-small_linlist :linpic="linpic" :key="linid" v-for="(linpic,linid) in datalin"></home_home-lin-small_linlist>
    </div>
</template>

<script>
    import item from './linItem'
    export default {
        name: "linList",
        components:{
            'home_home-lin-small_linlist': item
        },
        props:['datalin']
    }
</script>

<style scoped>

</style>