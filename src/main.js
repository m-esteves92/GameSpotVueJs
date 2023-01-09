import { createApp } from 'vue'
import Toaster from "@meforma/vue-toaster";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import App from './App.vue';
import Store from './Store';
import Router from './routes';

const app = createApp(App);

app.use(Antd);
app.use(Toaster);
app.use(Router);
app.use(Store);
app.mount('#app');
