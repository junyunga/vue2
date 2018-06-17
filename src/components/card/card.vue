<template>
<div id="card">
    <div
        v-for="(item, index) in 10"
        :key="index"
    >
        <div class="container">
            <div class="header"></div>
            <div class="body"><i class="fas fa-plus-circle"></i></div>
            <div class="footer"></div>
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
export default class Card extends Vue {

}
</script>



<style lang="scss">
#card {
    display: flex;
    flex-wrap: wrap;
    .container {
        flex: 1 1 auto;
        width: 300px;
        height: 500px;
        border: 1px solid #FFFFFF;
        margin: 8px;
        opacity: 0.5;
        &:hover {
            transform: perspective(500px) translateZ(10px);
        }
        .header {
            height: 100px;
        }
        .body {
            height: 350px;
            font-size: 30px;
            color: #FFFFFF;
            line-height: 300px;
            &:hover {
                cursor: pointer;
            }
        }
        .footer {
            
        }
    }
}
</style>
