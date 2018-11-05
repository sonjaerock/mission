import * as api from "../../api/api";

const defaultState = {
  problemList: []
};

const actions = {
  setProblemList: (context, payload) => {
    api.fetchProblem()
      .then((res) => {
        if (res.status === 200) {
          context.commit("problemUpdate", res.data);
        }
        else {
          alert("네트워크를 확인해주세요");
        }
      })
  }
};

const mutations = {
  problemUpdate: (state, data) => {
    state.problemList = data.problems;
  },
};

const getters = {
  problemList: state => state.problemList
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
