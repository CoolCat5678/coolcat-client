<template>
  <v-container
    class="bg-background fill-height d-flex align-center justify-center text-center position-relative"
    fluid
  >
    <!-- 背景 canvas 元件 -->
    <ElectricBackground />

    <v-row
      align="center"
      class="w-full"
      justify="space-between"
    >
      <!-- 左邊內容區 -->
      <v-col
        align="center"
        class="d-flex align-center justify-center"
        cols="12"
        md="6"
      >
        <div class="welcome-content">
          <!-- <v-img
            class="mb-8 logo-fade"
            :class="{ visible: showLogo }"
            contain
            height="140"
            src="@/assets/coolcat.png"
            width="140"
          /> -->
          <h1
            class="text-h2 font-weight-bold text-secondary mb-4 title-fade"
            :class="{ visible: showTitle }"
          >
            Welcome to <span class="text-primary">CoolCat</span>
          </h1>
          <p
            class="text-subtitle-1 text-body-1 mb-6 subtitle-fade"
            :class="{ visible: showSubtitle }"
          >
            I've actually seen this situation before. Here's what we'll do: First, search for 'Senren * Banka' on Steam,
            click to purchase, install it, and run it immediately.
          </p>
          <v-btn
            class="btn-fade"
            :class="{ visible: showButton }"
            color="primary"
            variant="outlined"
            @click="onStart"
          >
            Get Started
          </v-btn>

        </div>
      </v-col>

      <!-- 右邊空白區 -->
      <v-col
        class="d-flex justify-center"
        cols="12"
        md="6"
      >
        {{ }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'

  export default defineComponent({
    name: 'WelcomePage',
    setup () {
      const router = useRouter()

      const showLogo = ref(false)
      const showTitle = ref(false)
      const showSubtitle = ref(false)
      const showButton = ref(false)

      const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

      const onStart = () => {
        router.push('/home')
      }

      onMounted(async () => {
        await wait(100)
        showTitle.value = true
        await wait(600)
        showSubtitle.value = true
        await wait(600)
        showButton.value = true
      })

      return {
        showLogo,
        showTitle,
        showSubtitle,
        showButton,
        onStart,
      }
    },
  })
</script>

<style scoped>
  .welcome-content {
    max-width: 600px;
    width: 100%;
    padding: 0 16px;
  }

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

  .logo-fade,
  .title-fade,
  .subtitle-fade,
  .btn-fade {
    animation: fadeInUp 1.2s ease-out forwards;
    opacity: 0;
    visibility: hidden;
  }

  .logo-fade {
    animation-delay: 0.3s;
  }

  .title-fade {
    animation-delay: 0.9s;
  }

  .subtitle-fade {
    animation-delay: 1.5s;
  }

  .btn-fade {
    animation-delay: 2.1s;
    margin-top: 16px;
  }

  .visible {
    visibility: visible;
  }
</style>
