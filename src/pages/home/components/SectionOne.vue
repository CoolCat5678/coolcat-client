<template>
  <section
    ref="sectionOneRef"
    class="section-one-container"
  >
    <!-- 視訊卡片 -->
    <div
      ref="sectionOneCardRef"
      class="section-one-card-wrapper"
    >
      <div class="section-one-tv-card">
        <video
          ref="videoCardRef"
          autoplay
          class="w-full h-full object-cover"
          loop
          muted
        >
          <source
            src="@/assets/xlarge.mp4"
            type="video/mp4"
          >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <!-- 純 HTML + Vuetify 顏色的動畫文字區塊 -->
    <div
      ref="textRef"
      class="max-w-3xl mx-auto px-6 py-8 text-center"
    >
      <h2 class="text-2xl md:text-3xl font-bold text-primary mb-4">
        這個春特一定要玩千戀萬花
      </h2>
      <p class="text-secondary leading-relaxed text-base md:text-lg">
        是的同學，要是玩了千戀萬花，保研和獎學金都與你有緣。校園活動會邀請你參加，你的美好大學生活才正式開始。同學會羨慕你，其他 gal 批會嫉妒你，校園裡的貓貓狗狗也會喜歡你。
        <br /><br />
        在以後無數個不眠的夜晚，你總會回想起那次玩千戀萬花。你高興於自己的選擇，欣慰與努力得到了回報。你的未來，全都因這一次打開千戀萬花走向輝煌。
        <br /><br />
        多年以後，你的兒子兒孫問你：「過去的夢想是什麼？」你思索半天，眼眶中流出熱淚──永遠做柚子廚。
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
  const videoCardRef = ref<HTMLElement | null>(null)
  const textRef = ref<HTMLElement | null>(null)

  onMounted(() => {
    if (!sectionOneRef.value || !sectionOneCardRef.value || !videoCardRef.value || !textRef.value) return

    // 卡片縮放動畫
    gsap.fromTo(
      sectionOneCardRef.value,
      { width: '100%' },
      {
        width: '70%',
        scrollTrigger: {
          trigger: sectionOneRef.value,
          start: 'top top',
          end: '+=1000',
          scrub: true,
        },
        ease: 'none',
      }
    )

    // 圓角動畫
    gsap.fromTo(
      videoCardRef.value,
      { borderRadius: '0' },
      {
        borderRadius: '4rem',
        scrollTrigger: {
          trigger: sectionOneRef.value,
          start: '10% 10%',
          end: '+=1000',
          scrub: true,
        },
        ease: 'none',
      }
    )

    gsap.fromTo(
      textRef.value,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: sectionOneRef.value,
          start: 'top top',
          end: '+=1000',
          scrub: true,
          pin: true,
        },
        ease: 'power2.out',
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
    gap: 1rem;
  }

  .section-one-card-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .section-one-tv-card {
    width: 100%;
    height: 600px;
    overflow: hidden;
  }
</style>
