<template>
  <v-container
    class="pa-0"
    fluid
  >
    <intro-canvas
      class="fill-height"
      @animation-finished="handleAnimationDone"
    />

    <!-- 首頁 Hero 區塊 -->
    <div
      v-if="introDone"
      class="overflow-x-hidden"
    >
      <HomePage />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  </v-container>
</template>

<script
  setup
  lang="ts"
>
  import HomePage from './components/HomePage.vue';
  import SectionOne from './components/SectionOne.vue';
  import SectionTwo from './components/SectionTwo.vue';
  import SectionThree from './components/SectionThree.vue';
  import SectionFour from './components/SectionFour.vue';
  import SectionFive from './components/SectionFive.vue';

  const introDone = ref(false)

  const handleAnimationDone = () => {
    introDone.value = true
  }
</script>

<style scoped></style>
