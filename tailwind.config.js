/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./api/views/**/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        'custome': ["Lato", "sans-serif"]
      },
    },
  },
  variants:{
    extend:{
         backgrougroundColor:['active']
    }
  },
  plugins: [],
}

