<template>
    <div id="main">
        <J-header></J-header>
        <J-left></J-left>
        <J-MainContainer>
           <router-view slot="routerView"></router-view>
        </J-MainContainer>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Emit} from 'vue-property-decorator'
    import Header from './components/layout/header.vue'
    import Left from './components/layout/left.vue'
    import MainContainer from './components/layout/container.vue'
    import DB from './db/firebase'
    import api from '@/api'
    
    api.get('/book.json').then((response) => {
        console.log(response)
    })

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