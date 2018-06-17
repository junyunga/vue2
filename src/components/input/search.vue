<template>
<div id="search">
    <div class="input-search">
        <input type="text">
    </div>
</div>
</template>




<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator'
@Component
export default class Search extends Vue {

}
</script>




<style lang="scss">
#search {
    .input-search {
        &>i {
            color: #FFFFFF;
        }
        &>input {
            width: 300px;
            height: 30px;
            background-color: #f44336;
            border: 0px;
            border-bottom: 1px solid #FFFFFF;
            &:focus {
                outline: none;
                caret-color: #FFFFFF;
                transform: perspective(300px) translateZ(30px);
            }
            &:hover {
                transform: perspective(300px) translateZ(30px);
            }
        }
    }
}
</style>
