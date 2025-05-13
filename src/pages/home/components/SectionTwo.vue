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
            src="@/assets/shocked-surprised.gif"
          >
          <img
            alt="TV Wall"
            class="tv-wall-img object-cover rounded-2xl"
            src="@/assets/shocked-surprised.gif"
          >
          <img
            alt="TV Wall"
            class="tv-wall-img object-cover rounded-2xl"
            src="@/assets/shocked-surprised.gif"
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
        start: 'top 10%',
        end: '+=200%',
        toggleActions: 'play none none none',
        pin: true,
      },
    })

    // 依序淡入三張圖
    tl.to(images[0], { opacity: 1, duration: 0.2, ease: 'power2.out' })
      .to(images[1], { opacity: 1, duration: 0.2, ease: 'power2.out' }, '+=0.1')
      .to(images[2], { opacity: 1, duration: 0.2, ease: 'power2.out' }, '+=0.1')
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
    overflow: scroll;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tv-wall-grid {
    display: flex;
    min-width: 100%;
    height: 100%;
    gap: 1rem;
    margin: 0 1rem;
  }

  .tv-wall-img {
    flex: 1;
    object-fit: cover;
    height: 100%;
    border-radius: 1;
    transition: opacity 0.3s;
  }
</style>
