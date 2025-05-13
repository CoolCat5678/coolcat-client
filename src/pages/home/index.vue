<template>
  <v-container
    class="grow-story pa-0"
    fluid
  >
    <GridBackground />
    <!-- 首頁 Hero 區塊 -->
    <v-container class="h-screen flex items-center justify-center text-center">
      <div>
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          COOLCAT
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
          CoolCAT
        </p>
      </div>
    </v-container>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
  </v-container>
</template>

<script
  setup
  lang="ts"
>
  import SectionOne from './components/SectionOne.vue';
  import SectionTwo from './components/SectionTwo.vue';
  import SectionThree from './components/SectionThree.vue';
</script>

<style scoped></style>
