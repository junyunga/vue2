<template>
    <div id="left">
        <nav>

        </nav>
    </div>
</template>
<script lang="ts">
     import {
        Vue,
        Component
    } from 'vue-property-decorator'
    @Component
    export default class Left extends Vue {

    }
</script>
<style lang="scss">
    #left {
        position: absolute;
        left: 0;
        width: 200px;
        height:700px;
        border: 1px solid red;
    }
</style>


