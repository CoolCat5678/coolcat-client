<template>
  <v-container class="h-[80vh] flex items-center justify-center text-center pa-0">
    <!-- <GridBackground /> -->
    <div class="w-full px-4 sm:px-6 lg:px-8">
      <!-- 同步進場 -->
      <h1
        class="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 fade-up"
        style="animation-delay: 0s;"
      >
        {{ title }}
      </h1>

      <p
        class="text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-loose fade-up"
        style="animation-delay: 0s;"
      >
        你这个情况我还真见过，这样吧，你启动steam，搜索千恋万花，点击购买，启动游戏，记住七个选项：
      </p>

      <!-- 多個跑馬燈 -->
      <Vue3Marquee
        v-for="(delayOffset, i) in [0.6, 0.8, 1]"
        :key="i"
        :direction="i === 1 ? 'reverse' : 'normal'"
        :duration="60"
        :pause-on-hover="true"
      >
        <v-card
          v-for="(step, index) in steps"
          :key="index"
          class="fade-up pa-1 ma-2"
          :style="{ animationDelay: `${index * 0.2 + delayOffset}s` }"
          :variant="'outlined'"
        >
          <p class="text-xl md:text-2xl max-w-3xl mx-auto">
            {{ step }}
          </p>
        </v-card>
      </Vue3Marquee>

      <!-- 最後一句 -->
      <p
        class="text-xl md:text-2xl max-w-3xl mx-auto mt-10 fade-up"
        style="animation-delay: 2s;"
      >
        这样你就能进入丛雨线了。
      </p>
    </div>
  </v-container>
</template>


<script
  setup
  lang="ts"
>
  import { Vue3Marquee } from 'vue3-marquee'

  const title = 'Ciallo～(∠・ω< )⌒☆'

  const steps = [
    '第一个选项：敷衍过去。',
    '第二个选项：不好说。',
    '第三个选项：单独行动。',
    '第四个选项：看着不奇怪。',
    '第五个选项：摸头。',
    '第六个选项：有点担心。',
    '第七个选项：少说两句。'
  ]
</script>

<style scoped>
  .fade-up {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease-out forwards;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
