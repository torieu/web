<template>
    <div class="content-section">
      <div class="post_it">
            <img class="post-it-note" :src="small_pink_postit" alt="a pink post-it note" />
            <div class="post_it_div">
              <h3>první semestr</h3>
            </div>
          </div>
      </div>
      <h4>podzim 2024</h4>
    <div class="page centered">
      <p></p>
    </div>
  </template>
  
  <script>
  import small_pink_postit from '../assets/postit-small-pink.svg';
  
  export default {
    name: 'KiskPrvniSemestrView',
    components: {
  
    },
    data() {
      return {
        small_pink_postit,
      };
    }
  }
  
  
  
  </script>