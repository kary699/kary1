export default {
    state: {
        ifOpenSearch: false
    },
    getter: {
        // getStateData: function(state) {
        //     return state.data
        // }
    },
    mutations: {
        changeSearchStatus(state, e) {
            // if (!searchNode.contains(e.target)) return this.$refs.search.ifShow = false
            // this.$refs.search.$refs.searchInput.focus()
            // this.$refs.search.ifShow = true
            // this.$refs.search.searchValue = ''
            // this.$refs.search.ifOpenSearch = false
            // return
            // console.log(state.ifOpenSearch)
            // state.ifOpenSearch = !state.ifOpenSearch
            // console.log(state.ifOpenSearch)
        }
    },
    actions: {
        handleSearch(context, e) {
            // context.commit('changeSearchStatus', e)
        }
    }
}