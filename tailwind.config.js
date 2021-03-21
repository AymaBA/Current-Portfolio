module.exports = {
  purge: ["./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      fontFamily: {
        dosis: ["Dosis"],
      },
      animation: {
        float: "float 3s infinite",
        refloat: "float 3s infinite 1s",
        spawn: "spawn 1s",
      },
      keyframes: {
        float: {
          "0%": {
            transform: "translateY(0)",
            animationTimingFunction: "ease-in-out",
          },
          "50%": {
            transform: "translateY(20px)",
            animationTimingFunction: "ease-in-out",
          },
          "100%": {
            transform: "translateY(0)",
            animationTimingFunction: "ease-in-out",
          },
        },
        spawn: {
          "0%": {
            transform: "translateX(-40px)",
            opacity: 0,
            animationTimingFunction: "ease-in-out",
          },

          "100%": {
            transform: "translateX(0)",
            opacity: 1,
            animationTimingFunction: "ease-in-out",
          },
        },
      },
      transitionDuration: {
        2000: "2000ms",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
