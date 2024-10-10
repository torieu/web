<template>
  <div class="content-section">
    <div class="post_it">
      <img class="post-it-note" :src="pink_postit" alt="a pink post-it note" />
      <div class="post_it_div">
        <h2>KISK</h2>
      </div>
    </div>

    <div class="centered">
      <RouterLink to="/prvni-semestr" class="kisk-link post-it-link">
        <div class="post_it">
          <img class="post-it-note" :src="small_pink_postit" alt="a pink post-it note" />
          <div class="post_it_div">
            <h3>první semestr</h3>
          </div>
        </div>
      </RouterLink>

      <br>

    </div>
  </div>
</template>

<script>
import pink_postit from '../assets/postit-pink.svg';
import small_pink_postit from '../assets/postit-small-pink.svg';

export default {
  name: 'KiskView',
  components: {

  },
  data() {
    return {
      pink_postit, small_pink_postit
    };
  }
}
</script>