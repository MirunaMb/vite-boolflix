import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

// Import FontAwesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar as faStarFilled } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faStarFilled, faStarEmpty)


import { createApp } from 'vue';
import App from './App.vue';

// registro il componente
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
