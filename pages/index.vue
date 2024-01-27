
<template>
  <Head>
    <Title>Double Marvellous</Title>
    <Meta
      name="description"
      content="This is the content"
    />
  </Head>


  <Navbar :scrollo="scrolled"/>
<Homehero :lottieurlstring="lottieurl"/>
<Textandimage title="Some title" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
:image_a="image_a" 
:image_b="image_b" 
:image_c="image_c" 
:image_d="image_d" 

/>

<Textandimage 
:reverser="true"
eight_bit_styler="bottom_blue" title="Some title" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
:image_a="imageb_a" 
:image_b="imageb_b" 
:image_c="imageb_c" 
:image_d="imageb_d" />

<Footer eight_bit_styler="ground"/>
</template>
<script >
import image_a from '~/assets/images/dash.jpg'
import image_b from '~/assets/images/dash_2.png'
import image_c from '~/assets/images/dash_3.png'
import image_d from '~/assets/images/dash_3.png'
import lottieurl from '~/assets/lottie/data.json'

import imageb_a from '~/assets/images/coolscreenshot.png'
import imageb_b from '~/assets/images/covidgame.jpg'
import imageb_c from '~/assets/images/print_1.jpg'
import imageb_d from '~/assets/images/indie_cork_brochure.png'


  let screeno = null;
  export default {
    data() {
      return {
        scrolled: false,
           image_a,
            image_b,
             image_c,
             image_d,
             lottieurl,
             imageb_a,
             imageb_b,
             imageb_c,
             imageb_d
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