<template>
  <section
    ref="sectionTwoRef"
    class="section-two-container"
  >
    <div
      ref="sectionTwoCardRef"
      class="section-two-card-wrapper"
    >
      <div
        class="section-two-tv-card"
        elevation="6"
        variant="outlined"
      >
        <div class="tv-wall-grid">
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
        </div>
      </div>
    </div>
  </section>
</template>

<script
  setup
  lang="ts"
>
  import { ref, onMounted } from 'vue'
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  const sectionTwoRef = ref<HTMLElement | null>(null)
  const sectionTwoCardRef = ref<HTMLElement | null>(null)

  onMounted(() => {
    if (!sectionTwoRef.value || !sectionTwoCardRef.value) return

    // 抓出三張圖片
    const images = sectionTwoCardRef.value.querySelectorAll<HTMLImageElement>('.tv-wall-img')

    // 初始為透明
    images.forEach(img => {
      img.style.opacity = '0'
    })

    // 動畫時間線
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionTwoRef.value,
        start: 'top 100%',
        toggleActions: 'play none none reset',

      },
    })

    tl.fromTo(images[0], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
      .fromTo(images[1], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '+=0.1')
      .fromTo(images[2], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '+=0.1')
      .fromTo(images[3], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '+=0.1')
      .fromTo(images[4], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '+=0.1')
    // .fromTo(images[5], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '+=0.1')
    // .fromTo(images[6], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '+=0.1')
    // .fromTo(images[7], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '+=0.1')
    // .fromTo(images[8], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '+=0.1')
  })
</script>

<style scoped>
  .section-two-container {
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .section-two-card-wrapper {
    width: 100%;
  }

  .section-two-tv-card {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  .tv-wall-grid {
    min-width: 100vw;
    display: flex;
    height: 100%;
    gap: 1rem;
    overflow: hidden;
    overflow-x: scroll;

    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* Internet Explorer 10+ */
  }

  .tv-wall-grid::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari, Opera */
  }

  .tv-wall-img {
    flex: 1;
    object-fit: cover;
    height: 100%;
    border-radius: 1;
    transition: opacity 0.3s;
  }
</style>
