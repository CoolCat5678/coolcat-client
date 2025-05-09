<template>
  <v-row
    class="h-full"
    no-gutters
  >
    <v-col
      class="d-flex items-center justify-center"
      cols="12"
    >
      <transition name="fade">
        <h2
          v-show="visible"
          class="text-h2"
        >
          Welcome to the First Page
        </h2>
      </transition>
    </v-col>
  </v-row>
</template>

<script
  lang="ts"
  setup
>
  import { onMounted, ref } from 'vue'

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
