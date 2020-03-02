<template>
    <div class="max-w-1200 w-full h-full flex j-between a-center m-auto p-h-50">
        <div class="w-400 h-full flex j-center a-center">
            <SignIn @handleStatus="changeStatus" v-show="ifShow == 1"/>
            <SignUp @handleStatus="changeStatus" v-show="ifShow == 2"/>
            <ForgetPsd @handleStatus="changeStatus" v-show="ifShow == 3"/>
            <checkPsd @handleStatus="changeStatus" v-if="ifShow == 4"/>
        </div>
        <div class="max-w-800 w-full h-full bg-sign"></div>
    </div>
</template>

<script>
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ForgetPsd from './components/ForgetPsd'
import checkPsd from './components/checkPsd'
export default {
    components: {
        SignIn,
        SignUp,
        ForgetPsd,
        checkPsd
    },
    data() {
        return {
            ifShow: 1
        }
    },
    methods: {
        changeStatus(val) {
            this.ifShow = val
        }
    }
}
</script>