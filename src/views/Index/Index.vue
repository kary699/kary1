<template>
	<div class="w-full h-main" @click="ifShowSearch">
		<Header ref="header" />
		<div class="min-w-1200 h-full flex j-between">
			index
		</div>
	</div>
</template>

<script>
import Header from './components/Header/Header'
export default {
	components: {
		Header
	}
}
</script>
