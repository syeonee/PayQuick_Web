import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.deepPurple.lighten1, // #E53935
        secondary: colors.deepPurple.lighten4, // #FFCDD2
        accent: colors.deepPurple.accent1, // #3F51B5
	accent2: colors.deepPurple.accent4
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  }
})
