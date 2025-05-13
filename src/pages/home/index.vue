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
      <div
        v-if="introDone"
        class="flex w-full h-full"
      >
        <!-- Left Button container takes 10% width and centers button -->
        <div class="w-[10%] flex justify-center items-center">
          <v-btn @click="prevPage">Previous</v-btn>
        </div>

        <!-- Component container takes 80% width -->
        <div class="w-[80%]">
          <transition
            mode="out-in"
            name="fade"
          >
            <component :is="pages[currentPageIndex]" />
          </transition>
        </div>

        <!-- Right Button container takes 10% width and centers button -->
        <div class="w-[10%] flex justify-center items-center">
          <v-btn @click="nextPage">Next</v-btn>
        </div>
      </div>
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
  const currentPageIndex = ref(0)

  // Array to hold the page components
  const pages = [markRaw(FirstPage), markRaw(SecondPage)]

  const handleAnimationDone = () => {
    introDone.value = true
  }

  const prevPage = () => {
    if (currentPageIndex.value > 0) {
      currentPageIndex.value--
    }
  }

  const nextPage = () => {
    if (currentPageIndex.value < pages.length - 1) {
      currentPageIndex.value++
    }
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
