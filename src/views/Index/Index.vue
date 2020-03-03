<template>
	<div class="w-full">
		<Header ref="header" />
		<div class="min-w-1200 h-full flex j-between">
			index
		</div>
		<Chat />
	</div>
</template>

<script>
import Header from './components/Header/Header'
import Chat from './components/Chat/Chat'
export default {
	components: {
		Header,
		Chat
	}
}
</script>
