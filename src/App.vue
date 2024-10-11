<template>
  <div id="app">
    <nav v-if="showHeader" style="display: flex; align-items: center; height: 100%;">
      <ul style="width: 100%; margin: 0; padding: 0; display: flex; justify-content: space-between; align-items: center;">
        <li class="handwritten" style="font-size: 1.5em; list-style-type: none;">
          <a @click="goBack" style="display: flex; align-items: center; cursor: pointer;">
            nazpět.
          </a>
        </li>
        <li style="display: flex; gap: 10px; align-items: center;">
          <router-link to="/" class="nav-pin">
            <img :src="pin" alt="hlavní stránka" style="width: 15px;" />
          </router-link>
          <router-link to="/about" class="nav-post-it">
            <img :src="yellowPostit" alt="kdo jsem" class="nav-post-it-image" />
          </router-link>
          <router-link to="/KISK" class="nav-post-it">
            <img :src="pinkPostit" alt="KISK" class="nav-post-it-image"/>
          </router-link>
          <router-link to="/matematika" class="nav-post-it">
            <img :src="greenPostit" alt="matika" class="nav-post-it-image"/>
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Render the router view -->
    <router-view />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import pin from './assets/red-pin.svg';
import yellowPostit from './assets/postit-yellow.svg';
import pinkPostit from './assets/postit-pink.svg';
import greenPostit from './assets/postit-green.svg';

export default {
  name: 'App',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const showHeader = computed(() => route.path !== '/');

    const goBack = () => {
      if (window.history.length > 2) {
        router.go(-1);
      } else {
        router.push('/');
      }
    };

    return {
      showHeader,
      goBack,
    };
  },
  data() {
    return {
      pin,
      yellowPostit,
      pinkPostit,
      greenPostit,
    };
  },
};
</script>

<style scoped>
.nav-post-it, .nav-pin {
  transition: transform 0.2s ease-in-out;
}

.nav-post-it:hover, .nav-pin:hover {
  transform: scale(1.1);
}

.nav-pin {
  margin-right: 5px;
  
}

.nav-post-it-image {
  width: 20px;
}
</style>

