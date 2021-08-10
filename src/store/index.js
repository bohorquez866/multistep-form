import { createStore } from "vuex";

export default createStore({
    state: {
        defaultView: 0,
        users: [],
        success: false,
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
        filteredUsers: null,
        userTypes: ["usuario", "instrutor"],
        selectedType: "",
    },
    getters: {
        filteredUsers(state) {
            return state.filteredUsers;
        },
        sucessMessage(state) {
            return state.success;
        },
        defaultView(state) {
            return state.defaultView;
        },

        isInstructor(state) {
            return state.isInstructor;
        },
        selectedType(state) {
            return state.selectedType;
        },
        user(state) {
            return state.user;
        },
        especiality(state) {
            return state.especiality;
        },
        users(state) {
            return state.users;
        },
    },

    mutations: {
        getFilteredUsers(state, payload) {
            state.filteredUsers = payload;
        },
        pushUserToUsers(state, payload) {
            state.users.push(payload);
        },
        changeDefaultView(state) {
            state.defaultView++;
        },
        showAlert(state) {
            state.success = !state.success;
            setTimeout(() => {
                state.success = !state.success;
            }, 1500);
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
        setUserInfo(state, payload) {
            state.user = payload;
        },
    },

    actions: {
        setUserType({ commit }, payload) {
            commit("getUserType", payload);
        },
    },
});