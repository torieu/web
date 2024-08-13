<template>
  <div class="about">
    <div class="container">
            <img style= "width:20%" :src="pink_postit" alt="Example SVG" />
            <div class="centered">
              <h2>KISK</h2>
            </div>
    </div>  
  </div>
  <div class="page centered">
    <h2>proč KISK</h2>
    <h2>první semestr</h2>
    <h2></h2>
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