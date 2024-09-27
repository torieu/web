<template>
  <div class="about">
    <div class="container">
            <img class="post-it-note" :src="pink_postit" alt="a pink post-it note" />
            <div class="post_it_div"><h2>KISK</h2>
            </div>
        </div>
  </div>
  <div class="page centered">
    <RouterLink to="/proc-KISK">
    <h2>proč KISK</h2>
    </RouterLink>
    <RouterLink to="/prvni-semestr">
    <h2>první semestr</h2>
    <h3>podzim 2024</h3>
    </RouterLink>
  </div>
</template>

<script>
import pink_postit from '../assets/postit-pink.svg';

export default {
    name: 'KiskView',
    components: {
        
    },
    data() {
    return {
          pink_postit,
    };
  }
}



</script>