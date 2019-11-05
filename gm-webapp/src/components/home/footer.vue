<template>
    <home_footer :datafoot="datafoot"></home_footer>
</template>

<script>
import list from './home-footer-small/list'
export default {
  name: 'vfooter',
    components: {
        'home_footer': list
    },
    props:['datafoot'],
    methods: {

    }
}
</script>

<style scoped>

</style>
