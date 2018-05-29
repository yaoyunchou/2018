<template>
    <img :src="fullUrl" :mode="imageMode" >
</template>

<script>
export default {
  props: ['url','mode'],
  computed:{
      fullUrl(){
          return   this.url&&('http://p024s277s.bkt.clouddn.com/'+this.url)||'';
      },
      imageMode(){
          return this.mode||'widthFix'
      }
  }
}
</script>
<style>
img{ width:100%;}
</style>
