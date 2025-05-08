<template>
  <v-container
    class="fill-height pa-0"
    fluid
  >
    <intro-canvas
      class="fill-height pa-0"
      @animation-finished="handleAnimationDone"
    />
    <div
      class="content-wrapper w-full h-full max-h-[100%] overflow-y-scroll"
      :class="{ visible: introDone }"
    >
      <grid-background />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </div>

  </v-container>
</template>

<script
  lang="ts"
  setup
>
  import { ref } from 'vue'
  import FirstPage from './components/FirstPage.vue'
  import SecondPage from './components/SecondPage.vue'
  import ThirdPage from './components/ThirdPage.vue'
  const introDone = ref(false)
  const handleAnimationDone = () => {
    introDone.value = true
  }
</script>

<style scoped>
  .content-wrapper {
    opacity: 0;
    transform: translateY(30px);
    pointer-events: none;
    transition: opacity 2.0s ease, transform 2.0s ease;
  }

  .content-wrapper.visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
</style>
