import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//! Import components globally
import mainCard from "./components/MainCard.vue";
import defaultCard from "./components/Defaultcard";
import phase1 from "./components/Phase-1.vue";
import phase2 from "./components/Phase-2.vue";
import phase3 from "./components/Phase-3.vue";
import phase4 from "./components/Phase-4.vue";
import searchbar from "./components/partials/searchbar.vue";
import userList from "./components/partials/UsersList";
import user from "./components/partials/User";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");

//! initializes components
app.component("main-card", mainCard);
app.component("default-card", defaultCard);
app.component("phase-1", phase1);
app.component("phase-2", phase2);
app.component("phase-3", phase3);
app.component("phase-4", phase4);

app.component("searchbar", searchbar);
app.component("users-list", userList);
app.component("user", user);