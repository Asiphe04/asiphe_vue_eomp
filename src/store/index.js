import { createStore } from "vuex";

export default createStore({
  state: {
    project: null,
    projects: null,
  },
  mutations: {
    setProject: (state, project) => {
      state.project = project;
    },
    setProjects: (state, projects) => {
      state.projects = projects;
    },
  },
  actions: {
    getProject: async (context, id) => {
      fetch("https://asiphe04.github.io/data/projects.json/" + id)
        .then((response) => response.json())
        .then((project) => context.commit("setProject", project));
    },
    getProjects: async (context) => {
      fetch("https://asiphe04.github.io/data/projects.json")
        .then((response) => response.json())
        .then((projects) => context.commit("setProjects", projects));
    },
  },
});
