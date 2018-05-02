<template>
   <textarea name="content" id="editor">
        <p>This is some sample content.</p>
    </textarea>
</template>

<script>
//const  editormd  = require('@/pulgins/editormd.js');
import classicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  name: "ckEditor",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  props: ["value"],
  mounted: () => {
    classicEditor
      .create(document.getElementById("editor"), {
         ckfinder: {
            uploadUrl: '/api/upload/file'
        }
      })
      .then(editor => {
        console.log(editor);
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>