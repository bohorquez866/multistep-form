import { createStore } from "vuex";

export default createStore({
    state: {
        defaultView: 0,
        users: [],
        user: {
            name: "",
            username: "",
            date: "",
            email: "",
            phone: "",
            street: "",
            cep: "",
            city: "",
            state: "",
            country: "",
            userType: "",
            especiality: [],
          },
        userTypes: ["usuario", "instrutor"],
        selectedType: "",
    },
    getters: {
        defaultView(state) {
            return state.defaultView;
        },

        isInstructor(state) {
            return state.isInstructor;
        },
        selectedType(state) {
            return state.selectedType;
        },
        user(state){
            return state.user;
        }
    },

    mutations: {
        changeDefaultView(state) {
            state.defaultView++;
        },

        returnPreviousView(state) {
            state.defaultView--;
        },
        startOver(state) {
            state.defaultView = 0;
        },
        getUserType(state, payload) {
            state.selectedType = payload;
        },
        addUserInfo(state, payload) {
            state.user = payload;
        },
        setUserInfo(state, payload){
            state.user = payload
        }
    },

    actions: {
        setUserType({ commit }, payload) {
            commit("getUserType", payload);
        },
    },
});