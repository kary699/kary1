<template>
	<div class="min-w-1200 w-full h-full flex j-between" @click="ifShowSearch">
		<LSideBar />
		<RSideBar />
	</div>
</template>

<script>
import LSideBar from './components/LSideBar'
import RSideBar from './components/RSideBar/RSideBar'
export default {
    components: {
		LSideBar,
		RSideBar
    },
	methods: {
		ifShowSearch(e) {
			if (this.$route.name !== 'file') return
			return this.$store.dispatch('handleSearch', e)
		}
	}
}
</script>