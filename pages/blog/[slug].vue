<template>
  <div v-if="data && data.length === 1">
  <div v-for="item in data">
      <Head>
    <Title>Double Marvellous Web Design | {{item.title}}</Title>
    <Meta
      name="description"
      content="Build your next Vue.js application with confidence using Nuxt...."
    />
  </Head>
  <Navbar :scrollo="scrolled"/>
<Hero styler="smaller" :title="item.title"/>
    <figure class="fullfigure" v-if="item.imageUrl" :style="{ backgroundImage: `url(${item.imageUrl})` }">
      <img v-bind:src="item.imageUrl" class="fullimage" alt="Double Marvellous | {{$route.params.slug}}">
    </figure>
<div class="containo">

<article>
<div v-for="bodo in item.body">
  <p v-for="child in bodo.children">
    {{ child.text }}
  </p>
</div>
</article>
</div>
</div>
</div> 
</template>

<style lang="scss">
article{
  margin: 3rem 0;
}

.fullfigure{
  filter: hue-rotate(145deg);
}
</style>
<script setup>
const route = useRoute();
const query = groq`*[_type == "post" && slug.current == '${route.params.slug}']{
  _id,
  title,
  "imageUrl": mainImage.asset->url,
body

}`;
const sanity = useSanity()
const { data } = await useAsyncData('articles', () => sanity.fetch(query))
</script>
<script>
    let screeno = null;
  export default {
    data() {
      return {
        scrolled: false,
      }
    },
    methods: {
      handleScroll () {
        const self = this;
        if(window.scrollY >= screeno) {
          self.scrolled = true
        } else {
          self.scrolled = false
        }
      }
    },
    beforeMount () {
      window.addEventListener('scroll', this.handleScroll);
        if (window.innerWidth < 768) {
    screeno = 70;
  } else{
    screeno = 220;
  }
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  }
</script>