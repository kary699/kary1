<template>
    <div class="w-full h-full" @click="ifShowSearch">
        <Header ref="header" />
        <div class="min-w-1200 h-main flex j-between">
			<LSideBar />
			<RSideBar />
		</div>
    </div>  
</template>

<script>
import Header from '../components/Header/Header'
import LSideBar from './components/LSideBar'
import RSideBar from './components/RSideBar/RSideBar'
export default {
    components: {
        Header,
		LSideBar,
		RSideBar
    },
	methods: {
		ifShowSearch(e) {
			if (this.$route.name !== 'file') return
			return this.$refs.header.handleSearch(e)
		}
	}
}
</script>