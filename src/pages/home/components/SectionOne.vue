<template>
  <section
    ref="sectionOneRef"
    class="section-one-container"
  >
    <div
      ref="sectionOneCardRef"
      class="section-one-card-wrapper"
    >
      <v-card
        elevation="6"
        variant="outlined"
        class="section-one-tv-card"
      >
        <!-- 你會放 gif 或 video 在這裡 -->
        <img
          alt="TV Wall"
          class="w-full h-full object-cover"
          src="@/assets/shocked-surprised.gif"
        >
      </v-card>
    </div>

    <div class="section-one-description">
      <h2 class="text-3xl font-bold mb-4">是又怎樣</h2>
      <p class="text-lg text-gray-600 max-w-xl mx-auto">
        在這裡，創意與科技融合，點亮品牌的新篇章。
        我們相信每一個影像都能講述一個有力的故事。
      </p>
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

  const sectionOneRef = ref<HTMLElement | null>(null)
  const sectionOneCardRef = ref<HTMLElement | null>(null)

  onMounted(() => {
    if (!sectionOneRef.value || !sectionOneCardRef.value) return

    gsap.fromTo(
      sectionOneCardRef.value,
      { width: '80%' },
      {
        width: '100%',
        scrollTrigger: {
          trigger: sectionOneRef.value,
          start: 'top top',
          end: '+=100%',
          scrub: true,
          pin: true,
        },
        ease: 'none',
      }
    )
  })
</script>

<style scoped>
  .section-one-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 1rem;
    gap: 4rem;
  }

  .section-one-card-wrapper {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;
  }

  .section-one-tv-card {
    width: 100%;
    height: 400px;
    overflow: hidden;
  }

  .section-one-description {
    text-align: center;
    padding: 0 1rem;
  }
</style>
