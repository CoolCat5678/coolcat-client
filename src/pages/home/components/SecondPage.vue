<template>
  <v-row class="h-full">
    <v-col
      class="d-flex justify-center"
      cols="12"
    >
      <transition name="fade">
        <h1
          v-show="visible"
          class="text-h1"
        >
          O I I A
        </h1>
      </transition>
      <OiiaCatThree />
    </v-col>
  </v-row>
</template>

<script
  lang="ts"
  setup
>
  import { onMounted, ref } from 'vue'
  import OiiaCatThree from './OiiaCatThree.vue'

  const visible = ref(false)

  onMounted(() => {
    visible.value = true
  })
</script>


<style scoped>

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 2.0s ease, transform 2.0s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
