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
    <transition name="slide-fade-up">
      <div v-if="introDone">
        <GridBackground />
        <HomePage />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </div>
    </transition>
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

<style scoped>
  .slide-fade-up-enter-active {
    transition: all 1.2s ease;
  }

  .slide-fade-up-enter-from {
    opacity: 0;
    transform: translateY(40px);
  }

  .slide-fade-up-enter-to {
    opacity: 1;
    transform: translateY(0);
  }
</style>
