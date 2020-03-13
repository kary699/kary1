<template>
    <div class="min-w-1200 bg-grey p-b-50">
        <div class="bg-grey m-auto relative">
            <div class="fixed top-50 zIndex-9 w-full h-40 shadow-grey bg-grey"></div>
            <div class="h-200 m-t-10 absolute top-0 left-0 editor-title zIndex-8">
                <div class="absolute bottom-0 left-0 p-h-50">
                    <input type="text" 
                           placeholder="未命名"
                           v-model="$store.state.fileName"
                           class="h-50 w-600 d-block m-b-5 bold fs-30 b-none p-h-20">
                    <div class="w-full h-3 bg-grey"></div>
                </div>
            </div>
            <div ref="toolbar"></div>
            <div ref="editor"></div>
        </div>
    </div>
</template>
<script>
import Quill from "quill"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

//quill编辑器的字体
var fonts = ['Microsoft-YaHei','SimSun', 'SimHei','KaiTi','FangSong','Arial','Times-New-Roman','sans-serif']
var Font = Quill.import('formats/font')
Font.whitelist = fonts//将字体加入到白名单 
Quill.register(Font, true)
export default {
    data() {
        return {
            editorOption:{
                theme:'snow'
            }
        }
    },
    methods: {
        
    },
    mounted() {
        var toolbarOptions = [
            [{ 'header': [1, 2, 3, false] }],
            // [{ 'size': ['12px', '14px', false ,'18px', '22px', '26px', '30px', '36px', '42px'] }],
            [{ 'font': fonts }],
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            [{ 'color': [] }, 
            { 'background': [] }],          // dropdown with defaults from theme
            [{ 'list': 'ordered'}, 
            { 'list': 'bullet' }],
            [{ 'align': [] }],
            ['link', 'image'],
            // ['blockquote', 'code-block'],
            // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            // [{ 'direction': 'rtl' }],                         // text direction
            // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            // ['clean']                                         // remove formatting button
        ];
        var options = {
            // debug: 'info',
            modules: {
                toolbar: toolbarOptions
            },
            theme: 'snow'
        }
        var editor = new Quill(this.$refs.editor, options)
    }
}
</script>

<style lang="scss">
.ql-toolbar,
.editor-title {
    position: absolute;
    top: 50px;
    left: 50%;
    margin-left: -350px !important;
}
.ql-toolbar {
    position: fixed;
    z-index: 9;
    background: #f2f2f2;
}
.ql-toolbar,
.ql-container,
.editor-title {
    border: none !important;
    width: 700px !important;
}
.ql-container {
    min-height: 1000px;
    margin: 0 auto;
    padding-bottom: 50px;
    background: #fff;
    box-shadow: 0 0 8px #ccc;
    padding-top: 270px;
    padding-bottom: 50px;
    margin-bottom: 50px;
}
.ql-editor {
    padding: 0 70px;
    height: 1000px;
}
.editor-title {
    top: 40px;
}
</style>