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
      try {
        const response = await fetch("https://asiphe04.github.io/data/db.json");
        const data = await response.json();
        context.commit("setProjects", data.projects);
      } catch (error) {
        alert("Failed to fetch projects");
      }
    },
    getTestimonials: async (context) => {
      try {
        const response = await fetch("https://asiphe04.github.io/data/db.json");
        const data = await response.json();
        context.commit("setTestimonials", data.testimonials);
      } catch (error) {
        alert("Failed to fetch testimonials");
      }
    },
    getSkills: async (context) => {
      try {
        const response = await fetch("https://asiphe04.github.io/data/db.json");
        const data = await response.json();
        context.commit("setSkills", data.skills);
      } catch (error) {
        alert("Failed to fetch skills");
      }
    },
    getTimelines: async (context) => {
      try {
        const response = await fetch("https://asiphe04.github.io/data/db.json");
        const data = await response.json();
        context.commit("setTimelines", data.education);
      } catch (error) {
        alert("Failed to fetch education info");
      }
    },
  },
});
