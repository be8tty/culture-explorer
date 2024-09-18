/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: '#F5F5DC', 
        'custom-gray': '#E6E5E5',
        'custom-yellow':' #DADA92',
        'customGreen': '#3A9D23',
        'custombeige': '#DADA92',
        
          'custom-bg': '#DFD8AF80', // Add your custom color with transparency
       

      },
      fontFamily: {
        abyssinica: ['Abyssinica SIL', 'serif'],
          volkhov: ['Volkhov', 'serif'],
          poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

