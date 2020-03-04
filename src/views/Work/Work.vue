<template>
    <div w-full h-full>
        <Leave/>
        <Write/>
        <List/>       
    </div>  
</template>
<script>
import Write from './components/Write'
import Leave from './components/Leave'
import List from './components/List'
export default {
    components: {
        Write,
        Leave,
        List
    }
    
}
</script>