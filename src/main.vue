<template>
    <div id="main">
        <J-header></J-header>
        <J-left></J-left>
        <J-MainContainer></J-MainContainer>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import Header from './components/layout/header.vue'
    import Left from './components/layout/left.vue'
    import MainContainer from './components/layout/container.vue'
    import DB from './db/firebase'
    @Component({
        components: {
            "J-header": Header,
            "J-left" : Left,
            "J-MainContainer" : MainContainer
        }
    })

    export default class Main extends Vue {
        
    }
</script>

<style lang="scss">
    #main {
        width: 100%;
        height: 100%;
        position: relative;
    }   
</style>