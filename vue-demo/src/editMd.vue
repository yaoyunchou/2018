<template>
  <EditorMd v-model="md"></EditorMd>
</template>


<script>
import { mapState, mapActions, mapMutations } from "vuex";
import EditorMd from '@/components/EditorMd';

export default {
  data() {
    return {
      md:
        "# Editor.md![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)**目录 (Table of Contents)**[TOCM]"
    };
  },
  components: { EditorMd }
}
</script>

<style lang="scss" scoped>
.login-header {
  height: 60px;
  background: #545c64;
  .back_index {
    float: right;
    height: 60px;
    line-height: 60px;
    margin-right: 20px;
    color: #fff;
    font-size: 16px;
  }
}
.demo-ruleForm {
  width: 30%;
  min-width: 400px;
  max-width: 520px;
  margin: 100px auto;
  .code {
    width: 80%;
    float: right;
  }
}
</style>
