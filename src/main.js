import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faHome, faCogs, faArrowRight, faBook, faInfoCircle, faEdit, faTrashAlt,faFileExcel, faPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css'; // Impor Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Impor Bootstrap JS

library.add(faBars, faHome ,faCogs, faArrowRight, faBook, faInfoCircle, faEdit, faTrashAlt,faFileExcel, faPlus );

const app = createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router);

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
