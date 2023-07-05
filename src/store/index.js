import { createStore } from "vuex";

export default createStore({
  state: {
    project: null,
    projects: null,
    testimonial: null,
    testimonials: null,
  },
  mutations: {
    setProjects: (state, projects) => {
      state.projects = projects;
    },
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },
  },
  actions: {
    getProjects: async (context) => {
      fetch("https://asiphe04.github.io/data/projects.json")
        .then((response) => response.json())
        .then((projects) => context.commit("setProjects", projects));
    },
    getTestimonials: async (context) => {
      fetch("https://asiphe04.github.io/data/testimonials.json")
        .then((response) => response.json())
        .then((testimonials) =>
          context.commit("getTestimonials", testimonials)
        );
    },
  },
});
