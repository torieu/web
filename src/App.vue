<template>
  <div id="app">
    <!-- Conditionally render the header -->
<nav v-if="showHeader" style="display: flex; align-items: center; height: 100%;">
  <ul style="width: 100%; margin: 0; padding: 0;">
    <li class="handwritten" style="font-size: 1.5em; list-style-type: none;">
      <a @click="goBack" style="display: flex; align-items: center; cursor: pointer;">
        <img style="width: 1.5vw; margin-right: 5px;" :src="pin" alt="red pin" />
        nazpět.
      </a>
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
    };
  },
};
</script>

