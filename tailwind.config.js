module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        adventure: "url('/hobbies/adventures.jpg')",
        music: "url('/hobbies/music.webp')",
        gaming: "url('/hobbies/gaming.jpg')",
        programming: "url('/hobbies/programming.webp')",
      },
      minWidth: {
        sm: "20rem",
        md: "28rem",
      },
      minHeight: {
        "project-card": "12rem",
      },
      maxWidth: {
        xxs: "16rem",
      },
      screens: {
        iphone: "414px",
        "3xl": "1680px",
      },
      boxShadow: {
        "btm-right": "8px 12px 24px -12px #666565",
        "top-right": "-12px -8px 24px -12px #666565",
        around: "0px 0px 17px 2px rgba(255, 255, 255, 0.43)",
      },
    },
  },
};
