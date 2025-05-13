<template>
  <v-container
    class="pa-0"
    fluid
  >
    <!-- 首頁 Hero 區塊 -->
    <v-container class="h-[80vh] flex items-center justify-center text-center pa-0">
      <GridBackground />
      <div>
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          Ciallo～(∠・ω< )⌒☆
        </h1>
        <p class="text-lg md:text-xl max-w-xl mx-auto">
          你这个情况我还真见过，这样吧，你启动steam，搜索千恋万花，点击购买，启动游戏，记住七个选项 第一个选项：敷衍过去。 第二个选项：不好说。 第三个选项：单独行动。 第四个选项：看着不奇怪。 第五个选项：摸头。 第六个选项：有点担心。第七个选项：少说两句。这样你就能进入丛雨线了
        </p>
      </div>
    </v-container>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour/>
    <SectionFive/>
  </v-container>
</template>

<script
  setup
  lang="ts"
>
  import SectionOne from './components/SectionOne.vue';
  import SectionTwo from './components/SectionTwo.vue';
  import SectionThree from './components/SectionThree.vue';
  import SectionFour from './components/SectionFour.vue';
  import SectionFive from './components/SectionFive.vue';
</script>

<style scoped>

</style>
