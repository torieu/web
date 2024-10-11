<template>
  <div class="introduction">
    <div class="post_it homepage-introduction">
      <div class="pin-container">
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
  justify-content: center;
  flex-wrap: nowrap;
  gap: 1em;
  max-width: 100%;
}

.pin-container {
  flex-shrink: 0;
  width: 40vw;
}

.pin {
  width: 4em;
  max-width: 100%;
}

.text-container {
  flex-grow: 1;
  min-width: 0; /* Allows text container to shrink below its content size */
}

.main-text {
  font-size: clamp(2rem, 4vw, 3rem);
  text-align: left;
  /* white-space: nowrap; */
  
}

.sub-text {
  font-size: 1rem;
  word-wrap: break-word;
  text-align: left;
  hyphens: auto;
}

@media (max-width: 675px) {
  .homepage-introduction {
    flex-direction: column;
    text-align: center;
  }

  .text-container {
    width: 100%;
  }

  .main-text,
  .sub-text {
    text-align: center;
  }
}


@media screen and (max-width: 400px) {
    .post_it_div h2 {
        font-size: 10vw; 
    }
    .post_it_div h3 {
        font-size: 6vw; 
    }
}
</style>