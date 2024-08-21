<template>
  <div class="introduction">
      <div class="container homepage-introduction" >
      <div class="w-30" style="display:inline-block;text-align:right">
          <img style="width:4em" :src="pin" alt="red pin" />
      </div>
      <div class="" style="display:inline-block; width:50%;padding-left:1em; font-size:4vw;text-align:left">ahoj, jsem viktorie a tohle je moje studentské portfolio.</div>
      </div>

      <br>

      <RouterLink to="/about">
        <div class="container">
            <img class="post-it-note" :src="yellow_postit" alt="a yellow post-it note" />
            <div class="post_it_div"><h2>kdo jsem?</h2>
            </div>
        </div>
    </RouterLink>

    <RouterLink to="/KISK">
        <div class="container">
            <img class="post-it-note" :src="pink_postit" alt="a pink post-it note" />
            <div class="post_it_div"><h2>KISK</h2>
            </div>
        </div>
    </RouterLink>
    
    <RouterLink to="/matematika">
        <div class="container">
            <img class="post-it-note" :src="green_postit" alt="a green post-it note" />
            <div class="post_it_div"><h2>matika</h2>
            </div>
        </div>
    </RouterLink>
  </div>
  
</template>

<script>
import yellow_postit from '../assets/postit-yellow.svg';
import green_postit from '../assets/postit-green.svg';
import pink_postit from '../assets/postit-pink.svg';
import pin from '../assets/red-pin.svg';

export default {
    name: 'HomeView',
    components: {
        
    },
    data() {
    return {
      yellow_postit, green_postit, pink_postit,  pin
    };
  }
}


</script>

<style>

</style>