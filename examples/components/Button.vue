<template>
    <div class="example-button">
        <h1>基础用法</h1>
        <fk-button @click="clickBtn">默认按钮</fk-button>
        <pre>{{codeString[0]}}</pre>
        <fk-button type="primary">主要按钮</fk-button>
        <pre>{{codeString[1]}}</pre>
        <h1>禁用</h1>
        <fk-button @click="clickBtn" disabled>默认按钮</fk-button>
        <pre>{{codeString[2]}}</pre>
        <fk-button type="primary" disabled>主要按钮</fk-button>
        <pre>{{codeString[3]}}</pre>
        <h2>文字按钮</h2>
        <fk-button type="text">文字按钮</fk-button>
        <pre>{{codeString[4]}}</pre>
        <fk-button type="text" disabled>文字按钮</fk-button>
        <pre>{{codeString[5]}}</pre>
    </div>
</template>

<script>
    import utils from '../../src/utils/utils'
    export default {
        data() {
            return {
                codeString: []
            }
        },
        methods: {
            clickBtn(evt) {
                window.alert('button clicked.')
            }
        },
        mounted() {
            let output = utils.htmlUtil.htmlToString(
            `    
            <fk-button @click="clickBtn">默认按钮</fk-button>

            methods: {
                clickBtn(evt) {
                    window.alert('button clicked.')
                }
            }
            
            `);
            this.codeString.push(output);
            let output2 = utils.htmlUtil.htmlToString(`   
            <fk-button type="primary">主要按钮</fk-button>

            methods: {
                clickBtn(evt) {
                    window.alert('button clicked.')
                }
            }`);
            this.codeString.push(output2);
            let output3 = utils.htmlUtil.htmlToString(`   
            <fk-button @click="clickBtn" disabled>默认按钮</fk-button>
            `);
            this.codeString.push(output3);
            let output4 = utils.htmlUtil.htmlToString(`   
            <fk-button type="primary" disabled>主要按钮</fk-button>
            `);
            this.codeString.push(output4);
            let output5 = utils.htmlUtil.htmlToString(`   
            <fk-button type="text">文字按钮</fk-button>
            `);
            this.codeString.push(output5);
            let output6 = utils.htmlUtil.htmlToString(`   
            fk-button type="text" disabled>文字按钮</fk-button>
            `);
            this.codeString.push(output6);
        }
    }
</script>

<style scoped>
.example-button{

}
</style>