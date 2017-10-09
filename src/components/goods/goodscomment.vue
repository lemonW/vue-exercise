<template>
    <div class="tmpl">
        <subcomment :commentId="this.$route.query.goodsId"></subcomment>
    </div>
</template>

<script>
import subcomment from '../subcomponents/subcomment.vue'

export default {
    components: {
        subcomment
    }
}
</script>

<style>

</style>
