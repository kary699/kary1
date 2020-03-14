<template>
    <div class="min-w-1200 w-full h-full bg-grey">
        <Header />
        <ItemStage />
    </div>
</template>

<script>
import Header from './components/Header'
import ItemStage from './components/ItemStage'
export default {
    components: {
        Header,
        ItemStage
    }
}
</script>