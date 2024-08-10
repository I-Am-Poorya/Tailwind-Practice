/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/*.html"],
  theme: {
    extend: {
      colors:{
        "primary" : {
          DEFAULT : "#8E44AD",
          100: "#E67E22" ,
          200: "#2ECC71",
          "lighter" : "#F1C40F"
        },
      },
    },
  },
  plugins: [],
}

