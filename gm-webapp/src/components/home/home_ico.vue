<template>
    <home_home-ico :dataico="dataico"></home_home-ico>
</template>

<script>
    import list from './home-ico-small/list'
    export default {
        name: "home-cio",
        components: {
            'home_home-ico': list
        },
        props: ['dataico']
    }
</script>

<style scoped>

</style>