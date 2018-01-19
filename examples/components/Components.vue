<template>
    <div class="components-docs">
        <ul class="components-docs__nav">
            <li v-for="(item, index) in $router.options.routes[1].children" :key="index">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
            <!-- <li><router-link to="/components/button">Button 按钮</router-link></li> -->
            <!-- <li><router-link to="/components/radio">Radio 单选框</router-link></li> -->
            <!-- <li><router-link to="/components/radio">Checkbox 多选框</router-link></li> -->
            <!-- <li><router-link to="/tab">Tab 标签页</router-link></li> -->
        </ul>
        <div class="components-docs__container">
                <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
        }
    }
</script>

<style lang="postcss">
@import "github-markdown-css";
@import 'highlight.js/styles/atelier-cave-light.css';
.components-docs{
    display: flex;
    .components-docs__nav{
        border-right: 1px solid #ececec;
        flex: 0 0 200px;
        li{
            a{
                height: 40px;
                line-height: 40px;
                display: block;
            }
            a.router-link-active{
                color: #409EFF;
            }
        }
    }
    .components-docs__container{
        text-align: left;
        margin-left: 30px;
        margin-right: 30px;
        flex: 1;
    }
}
</style>