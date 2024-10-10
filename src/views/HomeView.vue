<template>
  <div class="introduction">
    <div class="post_it homepage-introduction">
      <div class="pin-container" style="margin-right: 2em;">
        <img class="pin" :src="pin" alt="red pin" />
      </div>
      <div class="text-container">
        <div class="main-text">jsem viktorie.</div>
        <div class="sub-text">studentka, lektorka, AI nadšenkyně, wannabe designérka.</div>
      </div>
    </div>

    <br>

    <div class="post-it-container">
      <RouterLink to="/about" class="post-it-link">
        <div class="post_it">
            <img class="post-it-note" :src="yellow_postit" alt="a yellow post-it note" />
            <div class="post_it_div"><h2>viktorie kdo?</h2>
            </div>
        </div>
      </RouterLink>

      <RouterLink to="/KISK" class="post-it-link">
        <div class="post_it">
            <img class="post-it-note" :src="pink_postit" alt="a pink post-it note" />
            <div class="post_it_div"><h2>KISK</h2>
            </div>
        </div>
      </RouterLink>
      
      <RouterLink to="/matematika" class="post-it-link">
        <div class="post_it">
            <img class="post-it-note" :src="green_postit" alt="a green post-it note" />
            <div class="post_it_div"><h2>matika</h2>
            </div>
        </div>
      </RouterLink>
    </div>
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

<style scoped>
.homepage-introduction {
  display: flex;
  align-items: center;
}

.pin-container {
  flex: 0 0 30%;
  text-align: right;
  padding-right: 1em;
}

.pin {
  width: 4em;
}

.text-container {
  flex: 0 0 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main-text {
  font-size: 4vw;
  text-align: left;
}

.sub-text {
  font-size: 2vw;
  text-align: left;
}

.post_it {
  flex: 0 1 auto;
}
</style>