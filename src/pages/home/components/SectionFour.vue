<template>
  <section
    ref="sectionFourRef"
    class="pa-0 bg-container"
  >
    <div
      ref="overlayRef"
      class="overlay"
    />
  </section>
</template>

<script
  setup
  lang="ts"
>
  import { onMounted, ref } from 'vue'
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  const sectionFourRef = ref<HTMLElement | null>(null)
  const overlayRef = ref<HTMLElement | null>(null)

  onMounted(() => {
    if (!sectionFourRef.value || !overlayRef.value) return

    const startScale = 10
    const endScale = 1

    gsap.set(overlayRef.value, { scale: startScale })

    gsap.fromTo(
      overlayRef.value,
      { scale: startScale },
      {
        scale: endScale,
        scrollTrigger: {
          trigger: sectionFourRef.value,
          start: 'top top',
          end: '+=3000',
          scrub: true,
          pin: true,
        },
        ease: 'power2.out',
      }
    )
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
    position: absolute;
    inset: 0;
    background: black;

    mask-image: linear-gradient(black, black), url('@/assets/img/747.png');
    mask-repeat: no-repeat, no-repeat;
    mask-position: center, center;
    mask-size: 100% 100%, auto 50%;
    /* 第一層全覆蓋，第二層佔 50% */
    mask-composite: exclude;
  }
</style>
