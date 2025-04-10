import { createApp } from 'vue';
import App from './App.vue';

// Importar PrimeVue y el tema Aura
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

// Crear la aplicación
const app = createApp(App);

// Usar PrimeVue con el tema Aura
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
import Button from 'primevue/button';

// Registrar el componente Button
app.component('Button', Button);

// Montar la aplicación
app.mount('#app');
