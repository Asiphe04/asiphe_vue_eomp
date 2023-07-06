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
        const response = await fetch(
          "https://asiphe04.github.io/data/projects.json"
        );
        const projects = await response.json();
        context.commit("setProjects", projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    },
    getTestimonials: async (context) => {
      try {
        const response = await fetch(
          "https://asiphe04.github.io/data/testimonials.json"
        );
        const testimonials = await response.json();
        context.commit("setTestimonials", testimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    },
    getSkills: async (context) => {
      try {
        const response = await fetch(
          "https://asiphe04.github.io/data/skills.json"
        );
        const skills = await response.json();
        context.commit("setSkills", skills);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    },
    getTimelines: async (context) => {
      try {
        const response = await fetch(
          "https://asiphe04.github.io/data/education.json"
        );
        const timelines = await response.json();
        context.commit("setTimelines", timelines);
      } catch (error) {
        console.error("Error fetching timelines:", error);
      }
    },
  },
});
