import { mapState,mapGetter, mapActions ,mapMutations }  from 'vuex'; 
export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapState(['access_token'])
  },
  created: function () {
    
  },
  methods: {
    // hello: function () {
    //   console.log('hello from mixin!')
    // }
  }
}
