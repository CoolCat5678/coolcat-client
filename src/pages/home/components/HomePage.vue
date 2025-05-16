<template>
  <v-container class="h-[80vh] flex items-center justify-center text-center pa-0">
    <GridBackground />
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

      <!-- 選項段落 -->
      <div class="space-y-6">
        <p
          class="text-xl md:text-2xl max-w-3xl mx-auto fade-right"
          style="animation-delay: 0.6s;"
        >
          第一个选项：敷衍过去。
        </p>
        <p
          class="text-xl md:text-2xl max-w-3xl mx-auto fade-right"
          style="animation-delay: 1.2s;"
        >
          第二个选项：不好说。
        </p>
        <p
          class="text-xl md:text-2xl max-w-3xl mx-auto fade-right"
          style="animation-delay: 1.8s;"
        >
          第三个选项：单独行动。
        </p>
        <p
          class="text-xl md:text-2xl max-w-3xl mx-auto fade-right"
          style="animation-delay: 2.4s;"
        >
          第四个选项：看着不奇怪。
        </p>
        <p
          class="text-xl md:text-2xl max-w-3xl mx-auto fade-right"
          style="animation-delay: 3s;"
        >
          第五个选项：摸头。
        </p>
        <p
          class="text-xl md:text-2xl max-w-3xl mx-auto fade-right"
          style="animation-delay: 3.6s;"
        >
          第六个选项：有点担心。
        </p>
        <p
          class="text-xl md:text-2xl max-w-3xl mx-auto fade-right"
          style="animation-delay: 4.2s;"
        >
          第七个选项：少说两句。
        </p>
      </div>

      <!-- 最後一句 -->
      <p
        class="text-xl md:text-2xl max-w-3xl mx-auto mt-10 fade-up"
        style="animation-delay: 4.8s;"
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
  const title = 'Ciallo～(∠・ω< )⌒☆'
</script>

<style scoped>
  .fade-up {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .fade-right {
    opacity: 0;
    transform: translateX(40px);
    animation: fadeInRight 0.6s ease-out forwards;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInRight {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
