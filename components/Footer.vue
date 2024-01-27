<template>

<section v-bind:class="eight_bit_styler ? 'dbl_footer has_styler-'+eight_bit_styler : 'dbl_footer'">
	<div class="tree" :style="{ backgroundImage: `url(${tree})` }">
	<img v-bind:src="tree">
	</div>
	<div class="backhammer" :style="{ backgroundImage: `url(${whichPic})` }"></div>
  <div class="containo">
		<div class="columns is-marginless is-centered">
		<div class="column is-three-quarters">
<div class="griddo">
</div>


		</div>
      </div>
  </div>
</section>

</template>



<style scoped>
.dbl_footer{
	padding: 3rem 0;
	position: relative;
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
	.tree{
		background-size: contain;
		background-position: bottom;
		background-repeat: no-repeat;
		position: absolute;
		left: 2vw;
		bottom: calc(100% - 2px);
		max-width: 10vw;
		img{
			opacity: 0;
		}
	}
}
</style>


<script>
	import ground_pic_a from '~/assets/images/8_bit/ground.png'
	import ground_pic_b from '~/assets/images/8_bit/ground.png'
	import tree from '~/assets/images/8_bit/tree.png'
  export default {
  	 props:['eight_bit_styler'],
    data() {
      return {
        ground_pic_a,
 ground_pic_b,
 tree
      }
    },
  computed: {
        whichPic(){
        	var self = this;
        	if(self.eight_bit_styler && self.eight_bit_styler=='ground'){
        		return ground_pic_a;
        	} else if(self.eight_bit_styler && self.eight_bit_styler=='space') {
        		return ground_pic_b;
        	}
        }
    },

}
</script>

