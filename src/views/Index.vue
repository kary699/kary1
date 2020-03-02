<template>
    <div>
      <Header/>  登录
      <router-view to="/signin">登录</router-view>
    </div>
</template>
<script>
import Header from './components/Header'
export default {
    components: {
      Header
    }
        
    }
</script>
