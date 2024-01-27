<template>
<div class="homehero">
<!-- <div class="underzone"></div> -->
<div class="holds_title">

<Vue3Lottie 
class="lottie_container"
:animation-data="lottieurlstring" 
loop="false"
:speed="1.5"

/>

  <!-- <h1><span>Double</span> <span>Marvellous</span></h1> -->
</div>
</div>
</template>


<style lang="scss">

// $black: #1c1c1c;
// $darkgreen: #03544f;
// $lightgreen: #96fcd9;
// $whitegreen: #f5f5f5;
// $lightwhite: #f7f5f5;
// $blue: #6178f7;
// $white: #fff;
// $mainfont: 'area-normal', sans-serif;
// $mainfont_b: 'area-extended', sans-serif;
// $headingfont: 'june-expt-variable',sans-serif; 

.homehero{
position: relative;
height: 100vh;

       @media screen and (min-width:992px) {
           max-height: 60rem;     
             }
             @media screen and (max-width:991px) {
                max-height: 40rem;
             }
background: #7ADCED;

.lottie_container{
  width: 70rem;
  max-width: 50vw;
}
.underzone{
    position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.3;
  
}


  .holds_title{
position: absolute;
    height: 100%;
    top: 0;
    display: flex;
    width: 100%;
    align-content: center;
    justify-content: center;
    align-items: center;
h1{
  color: $white;
  font-family: $headingfont;
  text-transform: uppercase;
span:nth-child(1){
  display: flex;
        @media screen and (min-width: 992px) {
            font-size: calc(8.15rem + 0.1vw);
        }
        @media screen and (max-width:991px) {
             font-size: calc(3.15rem + 0.1vw);
        }
}
span:nth-child(2){
  display: flex;
        @media screen and (min-width: 992px) {
            font-size: calc(5rem + 0.1vw);
        }
        @media screen and (max-width:991px) {
             font-size: calc(2rem + 0.1vw);
        }
}
}
  }
}
</style>



<script>
 
export default {
  props: ['lottieurlstring'],
  data () {
    return {
      menued: false,
        // logopic,
    }
  },
  methods: {
//     onClick () {
// console.log(lottieContainer);
//     }
  }
}
</script>