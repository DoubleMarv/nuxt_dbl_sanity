<template>
<section 
v-bind:class="eight_bit_styler ? 'text_and_image has_styler-'+eight_bit_styler : 'text_and_image'"
>
  <div class="backhammer" :style="{ backgroundImage: `url(${whichPic})` }"></div>
  <div class="containo">
  <div 
v-bind:class="reverser ? 'flexcontainer reversed' : 'flexcontainer'"
  >
    
  <div v-if="text" class="textside">
<h3 v-if="title" v-html="title"></h3>
<hr>

    {{text}}
</div>
    

  <div v-if="image_a" class="imageside" data-aos="fade-up"     data-aos-easing="ease-out-cubic"
     data-aos-duration="700" data-aos-anchor-placement="center">
 <img v-bind:src="image_a">

 <span v-if="image_b" class="backo_1" data-aos="fade-right"     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom">
    <img v-bind:src="image_b">
 </span>

  <span v-if="image_c" class="backo_2" data-aos="fade-left"     data-aos-easing="ease-out-cubic"
     data-aos-duration="800" data-aos-anchor-placement="bottom-bottom">
    <img v-bind:src="image_c">
 </span>

  <span v-if="image_d" class="backo_3" data-aos="fade-up"     data-aos-easing="ease-out-cubic"
     data-aos-duration="700" data-aos-anchor-placement="bottom-bottom">
    <img v-bind:src="image_d">
 </span>
</div>

  </div>
</div>
</section>

</template>


<style lang="scss">
.text_and_image{
  padding: 8rem 0;
position: relative;
background: #7ADCED;

  h1,h2,h3,h4,h5{
    background: #F0C8BD;
    padding: 1rem 1.5rem;
    border-radius: 3px;
    color: #fff;
    display: inline-block
  }

  .backhammer{
  background-size: contain;
  background-position: center;
  background-repeat: repeat-x;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  }

  .flexcontainer{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
          @media only screen and (min-width: 1024px) {
             flex-direction: row;
          }
          @media only screen and (min-width: 768px) and (max-width: 1023px) {
           flex-direction: column;
          }
          @media only screen and (max-width: 767px) {
           flex-direction: column;
          }

&.reversed{
            @media only screen and (min-width: 1024px) {
             flex-direction: row-reverse;
          }
          @media only screen and (min-width: 768px) and (max-width: 1023px) {
           flex-direction: column-reverse;
          }
          @media only screen and (max-width: 767px) {
           flex-direction: column-reverse;
          }
}


    .textside{
            @media only screen and (min-width: 1024px) {
              width: 50%
            }
            @media only screen and (min-width: 768px) and (max-width: 1023px) {
             width: 100%;
            }
            @media only screen and (max-width: 767px) {
             width: 100%;
            }
    }
    .imageside{
      position: relative;
      @media only screen and (min-width: 1024px) {
        width: 40%;
      }
      @media only screen and (min-width: 768px) and (max-width: 1023px) {
        width: 100%;
      }
      @media only screen and (max-width: 767px) {
        width: 100%;
      }
      
      img{
        width: 100%;
        z-index: 1;
        position: relative;
         margin-left: 1rem;
      }
span{
  position: absolute;
}

span.backo_1{
       @media screen and (min-width:992px) {
right: -20%;                
             }
             @media screen and (max-width:991px) {
            right: 2%;    
             }
top: -10%;
opacity: 1;
max-width: 30%;
z-index: 3;
img{
  max-width: 80%;
}
}
span.backo_2{
       @media screen and (min-width:992px) {
left: -20%;                
             }
             @media screen and (max-width:991px) {
            left: 2%;    
             }
top: -10%;
opacity: 1;
max-width: 30%;
z-index: 3;
img{
  max-width: 80%;
}
}
span.backo_3{

       @media screen and (min-width:992px) {
right: -20%;                
             }
             @media screen and (max-width:991px) {
            right: 2%;    
             }

top: 60%;
opacity: 1;
max-width: 30%;
z-index: 3;
img{
  max-width: 80%;
}
}
span.backo_4{
left: 40%;
top: 20%;
opacity: 1;
max-width: 30%;
z-index: 3;
img{
  max-width: 80%;
}
}
span.backo_5{
left: 30%;
top: 30%;
opacity: 1;
max-width: 30%;
z-index: 3;
img{
  max-width: 80%;
}
}

    }
  }


&.has_styler-bottom_blue{
  color: #777;
  h1,h2,h3,h4,h5{
    background: #F0C8BD;
    padding: 1rem 1.5rem;
    border-radius: 3px;
    color: #fff;
    display: inline-block
  }
}

}
</style>



<script>
  import backpic_blue_bottom from '~/assets/images/8_bit/blue_bottom.png'

export default {
  props: ['eight_bit_styler', 'reverser','title','text', 'image_a', 'image_b', 'image_c', 'image_d'],
  data () {
    return {
        backpic_blue_bottom,
    }
  },
  methods: {
    // onClick () {
    //   this.message = 'Here you go :)'
    // }
  },
  computed: {
        whichPic(){
          var self = this;
          if(self.eight_bit_styler && self.eight_bit_styler=='bottom_blue'){
            return backpic_blue_bottom;
          } 
          // else if(self.eight_bit_styler.length && self.eight_bit_styler=='space') {
          //   return ground_pic_b;
          // }
        }
    },
}
</script>