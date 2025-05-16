<template>
  <v-container class="h-[80vh] flex items-center justify-center text-center pa-0">
    <GridBackground />
    <div>
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        {{ title }}
      </h1>

      <p class="text-lg md:text-xl max-w-xl mx-auto mb-4">
        你这个情况我还真见过，这样吧，你启动steam，搜索千恋万花，点击购买，启动游戏，记住七个选项：
      </p>

      <p class="text-lg md:text-xl max-w-xl mx-auto">第一个选项：敷衍过去。</p>
      <p class="text-lg md:text-xl max-w-xl mx-auto">第二个选项：不好说。</p>
      <p class="text-lg md:text-xl max-w-xl mx-auto">第三个选项：单独行动。</p>
      <p class="text-lg md:text-xl max-w-xl mx-auto">第四个选项：看着不奇怪。</p>
      <p class="text-lg md:text-xl max-w-xl mx-auto">第五个选项：摸头。</p>
      <p class="text-lg md:text-xl max-w-xl mx-auto">第六个选项：有点担心。</p>
      <p class="text-lg md:text-xl max-w-xl mx-auto">第七个选项：少说两句。</p>

      <p class="text-lg md:text-xl max-w-xl mx-auto mt-4">
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
