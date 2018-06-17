<template>
<div id="dashboard">
    <div class="content1">
        <div
            v-for="(item, index) in 4"
            :key="index"
        >
            <div>11</div>
    </div>
</div>

</div>
</template>



<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator'
@Component
export default class Dashboard extends Vue {

}
</script>



<style lang="scss">
#dashboard {
    width: 100%;
    height: 100%;
    .content1 {
        display: -webkit-flex;
        display: flex;
        flex-flow: row, wrap;
        height: 20vh;
        border: 1px solid #FFFFFF;
        opacity: 0.2;        
    }
}
</style>
