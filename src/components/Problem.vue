<template>
  <div class="problems">
    <div class="problem" v-for="(problem, index) in problemList">
      <span class="title">{{ index+1 }}. {{ problem.problem_text }}</span>
      <div
        v-if="problem.type === 1"
        class="answer">
        <span
          v-for="choice in parseChoice(problem.choices)"
          class="">
          <input
            type="radio"
            name=""
            :value="choice">
            {{ choice }}
        </span>
      </div>
      <div
        v-else
        class="answer">
        <textarea name="name" rows="8" cols="80"></textarea>
      </div>
    </div>
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
    },
    parseChoice: function(val){
      return JSON.parse(val);
    }
  },
  created() {
    this.setProblems();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    text-align: left;
  }
  .problem {
    margin-bottom: 30px;
  }
  .answer {
    text-align: right;
  }
</style>
