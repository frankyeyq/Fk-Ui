<template>
    <div class="components-docs">
        <ul class="components-docs__nav">
            <li><router-link to="/components/button">Button 按钮</router-link></li>
            <li><router-link to="/components/radio">Radio 按钮</router-link></li>
            <!-- <li><router-link to="/tab">Tab 标签页</router-link></li> -->
        </ul>
        <div class="components-docs__container">
                <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">
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
        flex: 1;
    }
}
</style>