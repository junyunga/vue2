<template>
    <div id="mainContainer">
        main
    </div>
</template>
<script lang="ts">
    import {Vue ,Component} from 'vue-property-decorator';
    @Component
    export default class MainContainer extends Vue {

    }
    
</script>
<style lang="scss">
    #mainContainer {
        position: relative;
        width: calc(100% - 200px);
        height: 100%;
        margin-left: 200px; 
        border: 1px solid green;
    }

</style>

