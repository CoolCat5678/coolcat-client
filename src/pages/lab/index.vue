<template>
  <v-container
    class="pa-0"
    fluid
  >
    <div class="overlay"></div>
    <div class="bg-container"></div>
  </v-container>
</template>

<script
  setup
  lang="ts"
>
  import { onMounted, onBeforeUnmount } from 'vue'

  let overlayEl: HTMLElement | null = null

  const onMouseMove = (e: MouseEvent) => {
    if (!overlayEl) return
    const x = e.clientX
    const width = window.innerWidth
    const p = x / width

    let scale
    if (p <= 0.2) {
      scale = 7
    } else if (p >= 0.8) {
      scale = 1
    } else {
      const t = (p - 0.2) / (0.8 - 0.2)
      scale = 7 - 6 * t // 7 → 1 線性插值
    }

    overlayEl.style.transform = `scale(${scale})`
  }

  onMounted(() => {
    overlayEl = document.querySelector('.overlay')
    window.addEventListener('mousemove', onMouseMove)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', onMouseMove)
  })
</script>

<style scoped>
  .bg-container {
    position: relative;
    height: 100vh;
    width: 100%;
    background-image: url('@/assets/img/mac.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  .overlay {
    z-index: 1;
    inset: 0;
    background: black;

    mask-image: linear-gradient(black, black), url('@/assets/img/747.png');
    mask-repeat: no-repeat, no-repeat;
    mask-position: center, center;
    mask-composite: exclude;

    transform-origin: center center;
    transition: transform ease-out;
  }
</style>
