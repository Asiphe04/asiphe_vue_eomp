<template>
    <div :to="{name: 'testimonials', params: {id: testimonial.id}}">
        
    </div>
</template>
<script>
    export default{
      props: ["testimonial"]
    }
</script>
<style scoped>

</style>