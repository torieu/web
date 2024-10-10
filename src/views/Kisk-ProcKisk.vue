<template>
  <div class="content-section">
    <div class="post_it">
          <img class="post-it-note" :src="small_pink_postit" alt="a pink post-it note" />
          <div class="post_it_div">
            <h3>proč KISK</h3>
          </div>
        </div>
    </div>
  <div class="page centered">
    <p></p>
  </div>
</template>

<script>
import small_pink_postit from '../assets/postit-small-pink.svg';

export default {
  name: 'KiskProcKiskView',
  components: {

  },
  data() {
    return {
      small_pink_postit,
    };
  }
}



</script>