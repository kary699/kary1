<template>
	<div class="w-full h-main" >
		<FirstOpen/>
		<Header ref="header" />	
		<div class="min-w-1200 h-full flex j-between">
			index
		</div>
	</div>
</template>

<script>
import Header from './components/Header/Header'
import FirstOpen from './components/FirstOpen/FirstOpen'
export default {
	components: {
		Header,
		FirstOpen
	}	
}
</script>
