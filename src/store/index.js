import Vue from 'vue'
import Vuex from 'vuex'
import cHeader from './cHeader'
import docs from './docs'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cHeader,
        docs
    }
})