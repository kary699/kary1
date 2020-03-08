<template>
    <div class=" w-full h-500 flex j-between min-w-1200 m-t-20">
        <div>
            <ContentOne/>
        </div>
        <div>
            <ContentTwo/>
        </div>
        <div>
            <ContentThree/>
        </div>
        <div>
            <ContentFour/>
        </div>
    </div>
</template>
<script>
import ContentOne from './components/ContentOne'
import ContentTwo from './components/ContentTwo'
import ContentThree from './components/ContentThree'
import ContentFour from './components/ContentFour'
export default {
    components: {
        ContentOne,
        ContentTwo,
        ContentThree,
        ContentFour
    }
    
}
</script>