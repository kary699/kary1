<template>
	<div class="w-full h-full" >
		<Header ref="header" />	
		<Main />
		<Chat />
		<FirstOpen/>
		<div class="absolute bottom-10 w-full flex j-center a-center">
			<a class="fs-12 text-grey" href="http://www.beian.miit.gov.cn">ICP证：豫ICP备18034461号</a>
		</div>
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
