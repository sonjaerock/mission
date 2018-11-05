<template>
  <div class="problem">
      {{ problemList }}
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Problem',
  data () {
    return {
      
    }
  },
  computed: {
      ...mapGetters({
        problemList: 'problemList',
      }),
    },

  methods: {
    setProblems: function(){
      console.log("ddd");
      this.$store.dispatch("setProblemList");
    }
  },
  created() {
    this.setProblems();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
