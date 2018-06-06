<template>
    <div>
        <J-header></J-header>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import Header from './components/layout/header.vue'
    
    
    @Component({
        components: {
            "J-header": Header
        }
    })
    export default class Main extends Vue {
    
    }
</script>

<style lang="scss">
    
</style>