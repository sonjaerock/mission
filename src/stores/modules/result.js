import * as api from "../../api/api";

const defaultState = {
  solutionList: []
};

const actions = {
  submit: (context, payload) => {
    console.log(payload.answerList);
    api.submit(payload.answerList)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          context.commit("solutionUpdate", res.data);
        }
        else {
          alert("네트워크를 확인해주세요");
        }
      })
  }
};

const mutations = {
  solutionUpdate: (state, data) => {
    state.solutionList = data.results;
  },
};

const getters = {
  solutionList: state => state.solutionList
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
