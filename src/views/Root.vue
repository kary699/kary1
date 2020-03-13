  
<template>
	<div class="h-full">
		<Header />
		<router-view class="h-main"/>
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