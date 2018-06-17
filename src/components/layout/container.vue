<template>
    <div id="mainContainer">
        <div v-show="this.$route.name === 'Main'">
            <J-cards></J-cards>
        </div>
         <slot name="routerView"></slot>
    </div>
</template>
<script lang="ts">
    import {Vue ,Component} from 'vue-property-decorator';
    import Card from '../card/card.vue';
    
    @Component({
        components : {
            "J-cards" : Card
        }
    })
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
        top: 54px;
        width: calc(100% - 205px);
        height: 100%;
        margin: 20px 100px 0px 200px;
        
    }

</style>

