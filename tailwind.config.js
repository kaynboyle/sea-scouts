module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: ["./src/App.{html,js}","./src/components/About/index.{html,js}","./src/components/AdvancedReporting/index.{html,js}","./src/components/CherryCola/index.{html,js}","./src/components/About/index.{html,js}","./src/components/CherryPie/index.{html,js}","./src/components/Consulting/index.{html,js}","./src/components/ContactUs/index.{html,js}","./src/components/Footer/index.{html,js}","./src/components/Header/index.{html,js}","./src/components/Home/index.{html,js}","./src/components/ProjectMngmnt/index.{html,js}","./src/components/TerminalServices/index.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
