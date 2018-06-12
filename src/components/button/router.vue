<template>
<div>
    <div
        class="router-list"
        @click.prevent="go()"
    >{{routerName}}</div>
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

@Component
export default class RouterList extends Vue {

    // Props
    @Prop()
    routerTo!: string
    @Prop()
    text!: string

    //provide
    @Provide() routerName = this.text

    // methodes
    @Emit()
    go() {
        this.$router.push(this.routerTo);
    }
}
</script>

<style lang="scss">
.router-list {
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: #FFFFFF;
    cursor: pointer;
    margin: 8px 0px;
    &:hover {
        background-color: #4E7AC7;
    }
}
</style>
