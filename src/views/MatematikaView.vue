<template>
  <div class="about">
    <div class="container">
            <img style= "width:20%" :src="green_postit" alt="Example SVG" />
            <div class="centered"><h2>matika</h2>
            </div>
    </div>  
  </div>
</template>

<script>
import green_postit from '../assets/postit-green.svg';

export default {
    name: 'MatematikaView',
    components: {
        
    },
    data() {
    return {
          green_postit,
    };
  }
}



</script>