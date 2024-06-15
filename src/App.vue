<template>
  <div id="app">
    <!-- Conditionally render the header -->
    <nav v-if="showHeader">
      <ul>
        <li class="handwritten" style="font-size:1.5em">
          <RouterLink style="float:left" to="/">
            <img style="width:1.5vw" :src="pin" alt="red pin" />
            nazpět.
          </RouterLink>
        </li>
      </ul>
    </nav>

    <!-- Render the router view -->
    <router-view />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import pin from './assets/red-pin.svg';

export default {
  name: 'App',
  setup() {
    const route = useRoute();
    const showHeader = computed(() => route.path !== '/');

    return {
      showHeader,
    };
  },
  data() {
    return {
      pin,
    };
  },
};
</script>

