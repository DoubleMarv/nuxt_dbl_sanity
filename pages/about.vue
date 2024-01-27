
<template>
    <Head>
    <Title>Double Marvellous | About</Title>
    <Meta
      name="description"
      content="Build your next Vue.js application with confidence using Nuxt...."
    />
  </Head>
  <Navbar :scrollo="scrolled"/>
<Hero title="About"/>

  <div>
    <h1>About</h1>
<NuxtLink to="blog/new-website">Website</NuxtLink>
<NuxtLink to="blog/how-do-you-get-royalty-free-music">Music</NuxtLink>
  </div>



</template>



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