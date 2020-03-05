<template>
	<div class="w-full h-full" >
		<Header ref="header" />	
		<div class="min-w-1200 h-main flex j-between">
			index
		</div>
		<Chat />
		<FirstOpen/>
	</div>
</template>

<script>
import Header from '../components/Header/Header'
import Chat from './components/Chat/Chat'
import FirstOpen from './components/FirstOpen/FirstOpen'
export default {
	components: {
		Header,
		Chat,
		FirstOpen
	}	
}
</script>
