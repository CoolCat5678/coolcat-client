/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: '#7e57c2',
          secondary: '#37474f',
          background: '#fafafa',
          surface: '#eceff1',
          error: '#c62828',
          onPrimary: '#ffffff',
          onSecondary: '#ffffff',
          onBackground: '#212121',
          onSurface: '#212121',
          onError: '#ffffff',
        },
      },
      dark: {
        colors: {
          primary: '#9575cd',
          secondary: '#cfd8dc',
          background: '#0d0d0d',
          surface: '#161616',
          error: '#ef5350',
          onPrimary: '#ffffff',
          onSecondary: '#ffffff',
          onBackground: '#ffffff',
          onSurface: '#ffffff',
          onError: '#000000',
        },
      },
    },
  },
})
