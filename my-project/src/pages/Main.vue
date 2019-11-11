<template>
    <div>
        <router-view></router-view>
        <Tooter/>
    </div>
</template>
<script>
import Tooter from '../components/Tooter'
export default {
    components:{
        Tooter
    }
}
</script>