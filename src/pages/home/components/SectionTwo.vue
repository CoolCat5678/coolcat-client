<template>
  <section
    ref="sectionTwoRef"
    class="section-two-container"
  >
    <div
      ref="cardTwoRef"
      class="section-two-card-wrapper"
    >
      <v-card
        elevation="6"
        class="section-two-card"
      >
        <h2 id="sectionTwoTitle">Section Two</h2>
        <p>This section fades and moves up into view on scroll.</p>
      </v-card>
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
  const cardTwoRef = ref<HTMLElement | null>(null)

  onMounted(() => {
    if (!sectionTwoRef.value || !cardTwoRef.value) return

    gsap.from(cardTwoRef.value, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionTwoRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    })
  })
</script>

<style scoped>
  .section-two-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  .section-two-card-wrapper {
    width: 100%;
    max-width: 1000px;
  }

  .section-two-card {
    padding: 2rem;
    background-color: #ffffff;
  }
</style>
