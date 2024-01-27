<template>
<div v-bind:class = "(styler)?'hero is-style-'+styler:'hero'">
<h1 v-html="titleFilter"></h1>
</div>
</template>


<style lang="scss">
.hero{
@media screen and (min-width:992px) {
height: 30rem; 
}
@media screen and (max-width:991px) {
height: 20rem;                
}
  
  background: #33bec3;
  display: flex;
  align-items: center;
  justify-content: center;
  h1{
    color: $white;
    text-transform: capitalize;
    font-size: calc(2rem + 0.1vw);
  }

&.is-style-smaller{
  @media screen and (min-width:992px) {
height: 20rem; 
}
@media screen and (max-width:991px) {
height: 10rem;                
}
}

}
</style>



<script>
      // import logopic from '~/assets/images/directory.jpg'
export default {
  props: ['title','styler'],
  data () {
    return {
      menued: false,
        // logopic,
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)'
    }
  },
      computed: {
      titleFilter() {
        return this.title.replace(/-/g, ' ');
      }
    }
}
</script>