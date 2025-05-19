<template>
  <section
    ref="sectionTwoRef"
    class="section-four-container"
  >
    <Vue3Marquee
      class="h-full marquee-container"
      :pause-on-hover="true"
    >
      <img
        alt="TV Wall"
        class="tv-wall-img object-cover rounded-2xl"
        src="@/assets/img/cinderella.jpg"
      >
      <img
        alt="TV Wall"
        class="tv-wall-img object-cover rounded-2xl"
        src="@/assets/img/doro.webp"
      >
      <img
        alt="TV Wall"
        class="tv-wall-img object-cover rounded-2xl"
        src="@/assets/img/doro2.webp"
      >
      <img
        alt="TV Wall"
        class="tv-wall-img object-cover rounded-2xl"
        src="@/assets/img/doroqq.jpg"
      >
      <img
        alt="TV Wall"
        class="tv-wall-img object-cover rounded-2xl"
        src="@/assets/img/QQ.jpg"
      >
    </Vue3Marquee>
  </section>
</template>

<script
  setup
  lang="ts"
>
  import { Vue3Marquee } from 'vue3-marquee'

</script>

<style scoped>
  .section-four-container {
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  .marquee-container {
    gap: 4rem;
  }

  .tv-wall-img {
    flex: 1;
    object-fit: cover;
    height: 100%;
    border-radius: 1;
    transition: opacity 0.3s;
  }
</style>
