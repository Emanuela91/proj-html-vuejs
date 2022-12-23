import { createApp } from 'vue'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faMap } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleRight)
library.add(faMap)
library.add(faLocationDot)
library.add(faSquarePhone)
library.add(faEnvelope)
library.add(faCopyright)

// createApp(App).mount('#app')
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
