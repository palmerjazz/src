<template>
  <div>
    <InnerItem v-for="{ routeName, linkText } in siteSections" :key="routeName">
      <div><router-link :to="{ name: routeName }">{{ linkText }}</router-link></div>
    </InnerItem>
  </div>
</template>

<script>
import InnerItem from '@/components/common/InnerItem';

export default {
  components: {
    InnerItem,
  },
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
