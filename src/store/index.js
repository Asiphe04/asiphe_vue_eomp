import { createStore } from "vuex";

export default createStore({
  state: {
    project: null,
    projects: null,
    testimonial: null,
    testimonials: null,
    skill: null,
    skills: null,
    timeline: null,
    timelines: null,
  },
  mutations: {
    setProjects: (state, projects) => {
      state.projects = projects;
    },
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },
    setSkills: (state, skills) => {
      state.skills = skills;
    },
    setTimelines: (state, timelines) => {
      state.timelines = timelines;
    },
  },
  actions: {
    getProjects: async (context) => {
      fetch("https://asiphe04.github.io/data/db.json")
        .then((response) => response.json())
        .then((data) => context.commit("setProjects", data.projects));
    },
    getTestimonials: async (context) => {
      fetch("https://asiphe04.github.io/data/db.json")
        .then((response) => response.json())
        .then((data) => context.commit("setTestimonials", data.testimonials));
    },
    getSkills: async (context) => {
      fetch("https://asiphe04.github.io/data/db.json")
        .then((response) => response.json())
        .then((data) => context.commit("setSkills", data.skills));
    },
    getTimelines: async (context) => {
      fetch("https://asiphe04.github.io/data/db.json")
        .then((response) => response.json())
        .then((data) => context.commit("setTimelines", data.education));
    },
  },
});
