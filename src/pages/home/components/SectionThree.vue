<template>
  <section
    ref="sectionOneRef"
    class="section-one-container"
  >
    <div class="section-one-content-wrapper">
      <!-- 左圖 -->
      <v-card
        class="section-one-text-card"
        color="secondary"
        variant="text"
      >
        <v-card-title class="text-h5 font-weight-bold text-primary-darken-4">
          火车结局
        </v-card-title>

        <v-card-text class="text-body-1 text-secondary">
          阳光洒下火车站台，doro将不多的积蓄用来买了心爱的欧润吉，不过 这次她并不打算白己吃。doro知道比起欧润吉，更心爱的 人即将远走高飞。 doro跌跌荡荡的走向你，并把心爱的欧润吉送给心爱的你。她想告诉 你，希望你带上欧润吉，吃了它们，吃了她所有的爱。这样她所与的爱，就能直留在 你身边。但你挥了挥手中的两张车票，一把抱起doro，走进了车厢，一起离开了这个地方。
        </v-card-text>
      </v-card>

      <!-- 右文 -->
      <div
        class="section-one-tv-card"
        elevation="6"
        variant="outlined"
      >
        <img
          alt="TV Wall"
          class="w-full h-full object-cover rounded-4xl"
          src="@/assets/yoshino-helloha.gif"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>

<style scoped>
.section-one-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
  gap: 1rem;
}

.section-one-content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.section-one-tv-card {
  width: 45%;
  height: 500px;
  overflow: hidden;
}

.section-one-text-card {
  width: 50%;
  padding: 1rem;
}

.section-one-tv-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
}

.text-body-1 {
  color: #4e4e4e;
}
</style>
