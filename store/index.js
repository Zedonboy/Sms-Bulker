import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        smsMessage : "",
        phoneNumbers : []
    },

    mutations : {
        addMessage : (state, text) => state.smsMessage = toString(text),
        addNumber : (state, numbers) => {
            state.phoneNumbers.push(...numbers)
        }
    }
})