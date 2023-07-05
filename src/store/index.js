import { createStore } from "vuex";

export default createStore({
  state: {
    project: null,
    projects: null,
  },
  mutations: {
    setProjects: (state, projects) => {
      state.projects = projects;
    },
  },
  actions: {
    getProjects: async (context) => {
      fetch("https://asiphe04.github.io/data/projects.json")
        .then((response) => response.json())
        .then((projects) => context.commit("setProjects", projects));
    },
  },
});
