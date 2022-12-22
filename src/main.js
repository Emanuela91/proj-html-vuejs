import { createApp } from 'vue'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'

library.add(faPlayCircle)

// createApp(App).mount('#app')
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
