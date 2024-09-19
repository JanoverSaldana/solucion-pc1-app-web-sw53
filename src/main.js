import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Lara from '@primevue/themes/lara';
import Card from "primevue/card";
import Button from "primevue/button";
import SelectButton from "primevue/selectbutton";
import Drawer from "primevue/drawer";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import Toolbar from "primevue/toolbar";
import i18n from "./i18n.js";


const app = createApp(App)

//configuration PrimeVue
app.use(PrimeVue, {
    ripple: true, theme: {
        preset: Lara, options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});



//Añadir los componentes de PrimeVue
app.component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-drawer', Drawer)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-toolbar', Toolbar);


app.use(i18n)

app.mount('#app')



