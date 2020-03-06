<template>
  	<div class="w-full h-full">
		<Header />
		<Editor />
	  </div>
</template>

<script>
import Header from './components/Header'
import Editor from './components/Editor'
export default {
	components: {
		Header,
		Editor
	}
}
</script>