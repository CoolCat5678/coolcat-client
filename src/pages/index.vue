<template>
  <v-container
    fluid
    class="bg-grey-lighten-5 fill-height d-flex align-center justify-center text-center"
    @wheel="startExit"
    @click="startExit"
  >
    <div
      class="px-4"
      style="max-width: 600px; width: 100%"
    >
      <v-img
        src="@/assets/coolcat.png"
        class="mb-8"
        width="140"
        height="140"
        contain
        :class="logoClass"
      />
      <h1
        class="text-h2 font-weight-bold text-grey-darken-4 mb-4"
        :class="titleClass"
      >
        Welcome to CoolCat
      </h1>
      <p
        class="text-subtitle-1 text-grey-darken-1 mb-6"
        :class="subtitleClass"
      >
        Sleek user management starts here. Simplified, elegant, and powerful.
      </p>
      <div
        class="text-grey-lighten-1 text-caption"
        :class="hintClass"
      >
        Scroll down or click to begin
      </div>
    </div>
  </v-container>
</template>

<script
  lang="ts"
  setup
>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const exitStarted = ref(false)
  const canExit = ref(false)

  const logoClass = ref('logo-fade')
  const titleClass = ref('title-fade')
  const subtitleClass = ref('subtitle-fade')
  const hintClass = ref('fade-hint')

  onMounted(() => {
    // 入場動畫時間：最後一個動畫 delay + duration = 2.1s + 1.2s = 3.3s
    // 再多一點 buffer，保險起見 3.5s
    setTimeout(() => {
      canExit.value = true
    }, 3500)
  })

  function startExit () {
    if (!canExit.value || exitStarted.value) return
    exitStarted.value = true

    // 出場動畫
    setTimeout(() => (hintClass.value = 'fade-out-fast'), 0)
    setTimeout(() => (subtitleClass.value = 'fade-out-fast'), 300)
    setTimeout(() => (titleClass.value = 'fade-out-fast'), 600)
    setTimeout(() => (logoClass.value = 'fade-out-fast'), 900)

    // 最後動畫 delay(900ms) + duration(800ms) + buffer(1000ms) = 約 2700ms
    setTimeout(() => router.push('/home'), 2700)
  }

</script>

<style scoped>

  /* 進場動畫 */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .logo-fade {
    animation: fadeInUp 1.2s ease-out forwards;
    animation-delay: 0.3s;
    opacity: 0;
  }

  .title-fade {
    animation: fadeInUp 1.2s ease-out forwards;
    animation-delay: 0.9s;
    opacity: 0;
  }

  .subtitle-fade {
    animation: fadeInUp 1.2s ease-out forwards;
    animation-delay: 1.5s;
    opacity: 0;
  }

  .fade-hint {
    animation: fadeInUp 1.2s ease-out forwards;
    animation-delay: 2.1s;
    opacity: 0;
  }

  /* 出場動畫 (快) */
  @keyframes fadeOutUpFast {
    from {
      opacity: 1;
      transform: translateY(0);
    }

    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }

  .fade-out-fast {
    animation: fadeOutUpFast 0.8s ease-in forwards;
  }
</style>
