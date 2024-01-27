<template>
  <div class="navbar">
<div v-bind:class = "(scrollo)?'undernavvo is-scrolled':'undernavvo is-not-scrolled'">
</div>

    <div class="containo">

<div v-bind:class = "(scrollo)?'holds_menu_area is-scrolled':'holds_menu_area is-not-scrolled'">
    <div class="leftside">
    <div class="logo">
    <img v-bind:src="logopic" class="mainlogo">
    </div>
    <div class="menu_area">
        <ul>
      <li><NuxtLink to="https://barryenglish.ie/build/dblmvlls/">Home</NuxtLink></li>
      <li><NuxtLink to="https://barryenglish.ie/build/dblmvlls/about/">About</NuxtLink></li>
      <li><NuxtLink to="https://barryenglish.ie/build/dblmvlls/contact/">Contact</NuxtLink></li>
    </ul>
    </div>
    </div>

    <div class="rightside">
      <a id="" class="menu_bars" role="button" @click="menued = !menued" v-bind:class = "(menued)?'navbar-burger is-active':'navbar-burger'" aria-label="menu" aria-expanded="false">
        <svg width="24" height="24" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d=" M 200 725C 200 725 800 725 800 725C 809 725 817 730 822 737C 826 745 826 755 822 763C 817 770 809 775 800 775C 800 775 200 775 200 775C 191 775 183 770 178 763C 174 755 174 745 178 737C 183 730 191 725 200 725C 200 725 200 725 200 725M 200 475C 200 475 800 475 800 475C 809 475 817 480 822 487C 826 495 826 505 822 513C 817 520 809 525 800 525C 800 525 200 525 200 525C 191 525 183 520 178 513C 174 505 174 495 178 487C 183 480 191 475 200 475C 200 475 200 475 200 475M 200 225C 200 225 800 225 800 225C 809 225 817 230 822 237C 827 245 827 255 822 263C 817 270 809 275 800 275C 800 275 200 275 200 275C 191 275 183 270 178 263C 173 255 173 245 178 237C 183 230 191 225 200 225C 200 225 200 225 200 225"/></svg>
      </a>
    </div>
</div>

  </div>

<div class="mobile_menu" v-if="menued">
<ul>
      <li><NuxtLink to="https://barryenglish.ie/build/dblmvlls/">Home</NuxtLink></li>
      <li><NuxtLink to="https://barryenglish.ie/build/dblmvlls/about/">About</NuxtLink></li>
      <li><NuxtLink to="https://barryenglish.ie/build/dblmvlls/contact/">Contact</NuxtLink></li>
      <li><NuxtLink to="https://barryenglish.ie/build/dblmvlls/blog/new-website/">New Website</NuxtLink></li>
<li><NuxtLink to="https://barryenglish.ie/build/dblmvlls/blog/how-do-you-get-royalty-free-music/">Music</NuxtLink></li>
</ul>
</div>


</div>
</template>


<style lang="scss">
  .navbar{
    display: flex;
    position: relative;
    z-index: 9999;
    position: fixed;
    top: 0;
    left:0;
    width: 100%;

.undernavvo{
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
      transition: .2s ease;
      &.is-not-scrolled{
      background: transparent;
      transition: .2s ease;
      height: 0;
    }
    &.is-scrolled{
      background: #fff;
      transition: .2s ease;
      height: 100%;
    }
}


.holds_menu_area{
  width: 100%;
  display: flex;
justify-content: space-between;
position: relative;
  .leftside{
    width: 40%;
    display: flex;
    justify-content: flex-start;
    align-items: center;


.mainlogo{
  max-width: 6rem;
  margin: 1rem 0;
}

    .menu_area{
        display: flex;
justify-content: space-between;
ul{
          display: flex;
  li{
    list-style-type: none;
    a{
      text-decoration: none;
      padding-left: 2vw;
      padding-right: 2vw;
      color: $whitegreen;
    }
  }
}

    }
  }

  .rightside{
        display: flex;
    align-items: center;
        a{
                &:hover{
        cursor: pointer;
      }
      svg{
              fill: $lightgreen !important;
              height: 2rem;
              width: 2rem;
      }
    }
  }


&.is-scrolled{
.menu_area{
  ul{
  li{
      a{
    color: $darkgreen;
  }
  }
}
}
  .rightside{
            a{
      svg{
              fill: $darkgreen !important;
      }
    }
  }


}


}

}


.mobile_menu{
  position: fixed;
  z-index: 0;
  background: $white;
  width: 50%;
  top: 0;
  left: 0%;
display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  ul{
    li{
      list-style-type: none;
      line-height: 2.5em;
      a{
        text-decoration: none;
        font-size: calc(1.5rem + 0.1vw);
        color: $black;
      }
    }
  }
}
</style>



<script>
    import logopic from '~/assets/images/logo.png'
export default {
  props: ['scrollo'],
  data () {
    return {
      menued: false,
        logopic,
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)'
    }
  }
}
</script>