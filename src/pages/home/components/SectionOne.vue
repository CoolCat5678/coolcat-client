<template>
  <section
    ref="sectionOneRef"
    class="section-one-container"
  >
    <div
      ref="sectionOneCardRef"
      class="section-one-card-wrapper"
    >
      <div
        class="section-one-tv-card"
        elevation="6"
        variant="outlined"
      >
        <img
          alt="TV Wall"
          class="w-full h-full object-cover rounded-4xl"
          src="@/assets/yoshino-helloha.gif"
        >
      </div>
    </div>

    <v-card
      class="mx-auto"
      color="secondary"
      variant="text"
    >
      <v-card-title class="text-h5 font-weight-bold text-primary-darken-4">
        是又怎樣
      </v-card-title>

      <v-card-text class="text-body-1 text-primary-darken-2">
        這個春特一定要玩千戀萬花 是的同學 要是玩了千戀萬花 保研和獎學金都與你有緣 校園活動會邀請你參加 你的美好大學生活才正式開始 同學會羨慕你 其他gal批會嫉妒你 校園裡的貓貓狗狗也會喜歡你 在以後無數個不眠的夜晚 你總會回想起那次玩千戀萬花 你高興於自己的選擇 欣慰與努力得到了回報 你的未來 全都因這一次打開千戀萬花走向輝煌 你計畫好的人生被完全打亂 你暢想的結局必然會實現 你只能順利地從這個大學畢業 考研讀博 在大城市拿著你過去不敢想的薪資 和你最愛的人結婚 背上沉重的名譽 詩和遠方為你而來 你的雙眼顯現著希望 多年以後 你的兒子兒孫問你 過去的夢想是什麼？ 你思索半天 眼眶中流出熱淚 永遠做柚子廚
      </v-card-text>
    </v-card>
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
      { width: '100%' },
      {
        width: '70%',
        scrollTrigger: {
          trigger: sectionOneRef.value,
          start: '0%',
          end: '+=100%',
          scrub: true,
          pin: false,
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

  .section-one-description {
    text-align: center;
  }
</style>
