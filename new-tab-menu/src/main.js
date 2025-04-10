import { createApp } from 'vue';
import App from './App.vue';

// Importar PrimeVue y el tema Aura
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});    
app.component('Button', Button);
app.component('Toast', Toast);
app.use(ToastService);

app.mount('#app');
