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
      fetch("https://asiphe04.github.io/data/projects.json")
        .then((response) => response.json())
        .then((projects) => context.commit("setProjects", projects));
    },
    getTestimonials: async (context) => {
      fetch("https://asiphe04.github.io/data/testimonials.json")
        .then((response) => response.json())
        .then((testimonials) =>
          context.commit("setTestimonials", testimonials)
        );
    },
    getSkills: async (context) => {
      fetch("https://asiphe04.github.io/data/skills.json")
        .then((response) => response.json())
        .then((skills) => context.commit("setSkills", skills));
    },
    getTimelines: async (context) => {
      fetch("https://asiphe04.github.io/data/education.json")
        .then((response) => response.json())
        .then((timelines) => context.commit("setTimelines", timelines));
    },
  },
});
