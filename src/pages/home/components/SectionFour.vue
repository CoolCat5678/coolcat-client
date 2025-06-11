<template>
  <section
    ref="sectionTwoRef"
    class="section-four-container"
  >
    <Vue3Marquee>
      <div
        v-for="(imgSrc, index) in tvWallImages"
        :key="index"
        class="tv-wall-wrapper"
      >
        <img
          alt="TV Wall"
          class="tv-wall-img"
          :src="imgSrc"
        >
      </div>
    </Vue3Marquee>
  </section>
</template>

<script
  setup
  lang="ts"
>
  import { Vue3Marquee } from 'vue3-marquee'
  import A1 from '@/assets/img/cinderella.jpg'
  import A2 from '@/assets/img/doro.webp'
  import A3 from '@/assets/img/doro2.webp'
  import A4 from '@/assets/img/doroqq.jpg'
  import A5 from '@/assets/img/QQ.jpg'

  const tvWallImages = [A1, A2, A3, A4, A5]
</script>

<style scoped>
  .section-four-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  .tv-wall-wrapper {
    width: auto;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  .tv-wall-img {
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width: auto;
    object-fit: contain;
    border-radius: 2rem;
  }

</style>
