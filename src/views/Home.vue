<template>
  <div>
    <inner-item v-for="{ routeName, linkText } in siteSections" :key="routeName">
      <div><router-link :to="{ name: routeName }">{{ linkText }}</router-link></div>
    </inner-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siteSections: [
        { routeName: 'Audio', linkText: 'Arranging Audio' },
        { routeName: 'Video', linkText: 'Arranging Video' },
        { routeName: 'PianoSamples', linkText: 'Piano Samples' },
      ],
    };
  },
};
</script>
