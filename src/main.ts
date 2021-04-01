import { createApp } from 'vue';
import App from './App.vue';

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import router from './router';
import { initializeStore, store } from './store';
import { initializeHttpClient } from './http-client';
import { AxiosOidcInterceptor } from './http-client/interceptors/axios-oidc.interceptor';
import { AxiosResponseHandler } from './http-client/handlers/axios-response.handler';

const app = createApp(App);

app.use(PrimeVue);

app.component('InputText', InputText);
app.component('Button', Button);

initializeStore();
initializeHttpClient(new AxiosOidcInterceptor(new AxiosResponseHandler()));

app.use(router).use(store).mount('#app');

