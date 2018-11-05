<template>
  <div class="problems">
    <div class="problem" v-for="(problem, index, tmp) in problemList">
      <span class="title">{{ index+1 }}. {{ problem.problem_text }}</span>
      <div
        v-if="problem.type === 1"
        class="answer">
        <span
          v-for="choice in parseChoice(problem.choices)"
          class="">
          <input
            type="radio"
            :name="'select' + index"
            @click="clickAnswer(index+1, choice)"
            :value="choice">
            {{ choice }}
        </span>
      </div>
      <div
        v-else
        class="answer">
        <input
          name="name"
          rows="8"
          cols="80"
          v-model="tmp"
          @change="clickAnswer(index+1, tmp)"
          >
      </div>
    </div>

    <div class="submit">
      <button
        class="submit-btn"
        @click="submit"
        type="button"
        name="button">제출</button>
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Problem',
  data () {
    return {
      answer: [],
      selects: 0
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
    },
    submit: function() {
      this.$store.dispatch('submit', {
         "answerList" : this.answer
       });
    },
    clickAnswer: function(problemNumber, answer) {
      let obj = {
        'id': problemNumber,
        'answer': answer.toString()
      }
      for(let i=0; i<this.answer.length; i++){
        if(this.answer[i].id === problemNumber){
          this.answer[i].answer = answer;
          return;
        }
      }
      this.answer.push(obj)
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
  .problems {
    width: 870px;
    float: left;
    border: 1px black solid;
    border-bottom: none;
    margin-left: -1px;
  }
  .problem {
    padding: 20px 30px;
  }
  .answer {
    text-align: right;
  }
  .submit {
    background: white;
    position: relative;
    left: -1px;
    width: 1024px;
    border: 1px black solid;
    padding-left: -3px;
    text-align: right;
  }
  .submit-btn {
    padding: 20px 20px;
    margin-right: 40px;
  }
</style>
