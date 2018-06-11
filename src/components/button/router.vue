<template>
<div>
    <div v-for="i in 5" :key="i" class="router-list">router</div>
</div>
</template>
<script lang='ts'>
import {Vue, Component} from 'vue-property-decorator'
@Component
export default class RouterList extends Vue {

}
</script>
<style lang='scss'>
    .router-list {
        width: 100%;
        background-color: black
    }
</style>
