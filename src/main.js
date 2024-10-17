import { createApp } from 'vue'
import App from './App.vue'


//부트스트랩
// import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App);


app.mount('#app');
