<template>
<div>
    <div class="list-container">
        <i :class="`fab fa-${icons}`"></i>
        <div
            class="router-list"
            @click.prevent="go()"
        >{{routerName}}
        <i class="fas fa-angle-double-down"></i>
    </div>
</div>
</div>
</template>




<script lang="ts">
import {
    Vue,
    Component,
    Emit,
    Prop,
    Provide
} from 'vue-property-decorator'
import { promises } from 'fs';

@Component
export default class RouterList extends Vue {

    // Props
    @Prop()
    routerTo!: string
    @Prop()
    text!: string
    @Prop()
    icon!: string

    //provide
    @Provide() routerName = this.text
    @Provide() icons = this.icon
    // methodes
    @Emit()
    go() {
        this.$router.push(this.routerTo);
    }
}
</script>




<style lang="scss">
.list-container {
    display: flex;
    width: 100%;
    height: 30px;
    color: #FFFFFF;
    cursor: pointer;
    margin: 8px 0px;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: #424242;
        transform: perspective(300px) translateZ(10px);
    }
    &>i {
        flex: 1 1 auto;
    }
    &>.router-list {
        flex: 1 1 auto;
    }
}
</style>
