<template>
  <v-container
    class="fill-height pa-0"
    fluid
  >
    <intro-canvas
      class="fill-height"
      @animation-finished="handleAnimationDone"
    />
    <div
      class="w-full h-full max-h-[100%] overflow-y-scroll max-x-[100%] overflow-x-hidden pa-4"
      :class="{ visible: introDone }"
      @click="handleWindowClick"
    >
      <grid-background />
      <transition name="fade">
        <component :is="currentPage" />
      </transition>
    </div>
  </v-container>
</template>

<script
  lang="ts"
  setup
>
  import { ref, markRaw } from 'vue'
  import FirstPage from './components/FirstPage.vue'
  import SecondPage from './components/SecondPage.vue'

  const introDone = ref(false)
  const windowClicked = ref(false)

  const currentPage = ref<ReturnType<typeof markRaw>>(null)

  const handleAnimationDone = () => {
    introDone.value = true
    currentPage.value = markRaw(FirstPage)
  }

  const handleWindowClick = () => {
    windowClicked.value = true
    currentPage.value = markRaw(SecondPage)
  }
</script>

<style scoped>

  /* Fade transition styles */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 2.0s ease, transform 2.0s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
