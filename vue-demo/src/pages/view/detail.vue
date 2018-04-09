<template>

    <div class="preview">
      <div class="handle">
        <span v-on:click="goHome()">返回</span>
      </div>
      <div class="perview-box">
      
        <img v-src="fullImg" alt="">
      </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "HDetail",
  data() {
    return {
     
        title: "",
        desc: "",
        smImg: "",
        fullImg: "",
        type:'pc'
     
    };
  },
  conpuntd: {},
  metaInfo: {
    title: "消息列表"
  },
  methods: {
    ...mapActions("design", ["getItem"]),

    goHome() {
      this.$router.push({name:'home'});
    }
  },
  mounted: function() {
    let self = this;
    let loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
    self.getItem({
          id: this.$route.params.id,
        })
        .then(function(data) {
          loading.close();
          if (data.isSuccess) {
            self.id = data.data._id;
            self.title = data.data.title;
            self.author = data.data.author;
            self.desc = data.data.desc;
            self.smImg = data.data.smImg;
            self.fullImg = data.data.fullImg;
          } else {
            self.$message(data.data);
          }
        });
    }
  }
</script>
<style lang="scss" scoped>
  .handle{
    height: 50px; position: fixed; top:0; background: rgba(0,0,0,0.4); width:100%;
    span{ display:inline-block; padding:0 20px; height: 40px; line-height:40px; border-radius:5px; background:#fff; margin-left:15px; margin-top:5px;}
  }
  .perview-box{
    img{ max-width: 1200px; width:100%;display: block; margin:0 auto;}
  }

</style>
