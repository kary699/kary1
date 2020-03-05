<template>
	<div class="w-full h-full" >
		<Header ref="header" />	
		<Main />
		<Chat />
		<FirstOpen/>
	</div>
</template>

<script>
import Header from '../components/Header/Header'
import Main from './components/Main/Main'
import Chat from './components/Chat/Chat'
import FirstOpen from './components/FirstOpen/FirstOpen'
export default {
	components: {
		Header,
		Main,
		Chat,
		FirstOpen
	}	
}
</script>
