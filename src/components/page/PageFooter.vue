<template>
  <div class="footer-links">
    <router-link :to="{ name: 'Audio' }">Arranging Audio</router-link>
    &bull; <router-link :to="{ name: 'Video' }">Arranging Video</router-link>
    &bull; <router-link :to="{ name: 'PianoSamples' }">Piano Samples</router-link>
    &bull; <router-link :to="{ name: 'Contact' }">Contact</router-link>
    &bull; <router-link :to="{ name: 'Home' }">Home</router-link>
  </div>
</template>

<style scoped>
.footer-links {
  font-size: 8pt;
  color: #fff;
}
</style>
