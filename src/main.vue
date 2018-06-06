<template>
    <div>
        <aaa></aaa>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import Header from './components/layout/header.vue'
    
    
    @Component({
        components: {
            "aaa": Header
        }
    })
    export default class Main extends Vue {
    
    }
</script>

<style lang="">
    
</style>