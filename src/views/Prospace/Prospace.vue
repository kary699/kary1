<template>
    <div class="w-full h-full">
        <Header/>
        <Headspace/>
        <ProContent/>
    </div>
</template>
<script>
import Header from '../components/Header/Header'
import Headspace from './components/Headspace'
import ProContent from './components/ProContent'
export default {
     components: {
         Header,
         Headspace,
         ProContent
     }

}
</script>