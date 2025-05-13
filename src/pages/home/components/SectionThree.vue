<template>
  <section
    class="grow-story"
    ref="storySection"
  >
    <div class="story-wrapper">
      <div
        class="textContentArticle"
        ref="textWrapper"
      >
        <div
          v-for="(text, index) in pages"
          :key="index"
          class="textArea"
        >
          <p class="text">{{ text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script
  setup
  lang="ts"
>
  import { ref, onMounted, nextTick } from 'vue'
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  const storySection = ref<HTMLElement | null>(null)
  const textWrapper = ref<HTMLElement | null>(null)

  const pages = [
    '從一個小小的點子開始，這段旅程充滿了挑戰與成長。',
    '我們走過未知的道路，跌倒過，也一次次重新站起。',
    '每一段經歷都成就了今天的我們。',
    '夥伴的努力與汗水，是這段旅程不可或缺的一頁。',
    '這不是結尾，而是另一段新篇章的開始。',
    '我們將繼續探索、挑戰、前行。',
    '每一步，都是未來的根基。',
    '每個夢想，都值得全力以赴。',
    '我們的旅程，還在繼續。',
    '這就是我們的故事。'
  ]

  onMounted(async () => {
    await nextTick()

    const totalPages = pages.length
    const container = textWrapper.value
    if (!container) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: storySection.value,
        start: 'top top',
        end: () => `+=${window.innerHeight * totalPages * 0.2}`,
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    })

    tl.to(container, {
      xPercent: -(100 * (totalPages - 1)),
      ease: 'none'
    })
  })
</script>

<style scoped>
  .grow-story {
    height: 100vh;
    background-color: #f0f0f0;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .story-wrapper {
    width: 100%;
    overflow: hidden;
    max-width: 800px;
  }

  .textContentArticle {
    display: flex;
    width: max-content;
  }

  .textArea {
    flex: 0 0 100%;
    padding: 2rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text {
    font-size: 1.5rem;
    text-align: center;
    max-width: 600px;
    color: #333;
  }
</style>
