<template>
<div id="Header">
    <div class="toolbar">
        <div class="menu-toggle">
            <i class="fas fa-align-justify"></i>
        </div>
        <div class="search">
            <J-search></J-search>
        </div>
    </div>
</div>
</template>


<script lang="ts">
import {
    Component,
    Vue
} from "vue-property-decorator";
import Search from '@/components/input/search.vue'
@Component({
    components: {
        "J-search": Search
    }
})
export default class Header extends Vue {

}
</script>


<style lang="scss">
#Header {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 54px;
    background: #f44336;
    align-items: center;
    line-height: 54px;
    .toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        .menu-toggle {
            text-align: left;
            margin-left: 8px;
            font-size: 20px;
            flex: 1 1 auto;
            &>i:hover {
                color: #FFFFFF;
                cursor: pointer;
            }
        }
        .search {
            flex: 1 1 auto;
        }
    }
}
</style>
