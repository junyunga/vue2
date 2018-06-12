<template>
    <div id="mainContainer">
        <div v-show="this.$route.name === 'Main'">
            1
        </div>
         <slot name="routerView"></slot>
    </div>
</template>
<script lang="ts">
    import {Vue ,Component} from 'vue-property-decorator';
    
    @Component
    export default class MainContainer extends Vue {
        constructor() {
            super();
        }
        mounted() {
            this.$nextTick(() => {
                
            }) 
        }
    }

</script>
<style lang="scss">
    #mainContainer {
        position: relative;
        width: calc(100% - 205px);
        height: 100%;
        margin: 20px 100px 0px 200px;
        border: 1px solid red;
    }

</style>

