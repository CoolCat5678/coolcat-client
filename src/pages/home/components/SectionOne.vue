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
          src="@/assets/shocked-surprised.gif"
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
        本人在此鄭重澄清：本人從未參與過任何拷打羊宮妃娜的言論，你要知道 BanG Dream 是一個養成系的企劃，主打的是記錄三次元的少女們與二次元的少女們為了心中的夢想而一同成長的感人經歷。<br><br>
        如果覺得某個成員不夠努力那肯定是她還在成長當中，如果覺得某個成員記不住詞那肯定是提詞器沒到位。羊宮妃那深懂粉絲內心，與粉絲同為一心，是邦邦中的豪傑。<br><br>
        她的轉變是一部非常值得推薦給所有人的勵志故事，整個世界是一個巨大的羊宮妃那，配音界都需要以羊宮妃那為榜樣，積極學習。<br><br>
        最後祝羊宮妃那和她的樂隊 MyGO!!!!! 蒸蒸日上。
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
          end: '+=150%',
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
