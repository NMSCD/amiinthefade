import '@picocss/pico';
import '@/styles/styles.css';
import App from './App.vue';
import { createApp } from 'vue';

// oxlint-disable-next-line typescript/no-unsafe-argument
const app = createApp(App);

// css selector where the app should be mounted
app.mount('#app');
