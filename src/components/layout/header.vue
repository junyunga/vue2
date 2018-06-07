<template>
    <div id="Header">
        
    </div>
</template>
<script lang="ts">
    import {
        Component,
        Vue
    } from 'vue-property-decorator'
    
    @Component
    export default class Header extends Vue {
    
    }
</script>
<style lang="scss">
    #Header {
        width: 100%;
        height: 80px;
        border: 1px solid blue;
    }
</style>