<template>
  <section class="py-10">
    <v-container fluid>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            class="overflow-hidden rounded-xl h-96"
            elevation="2"
          >
            <img
              alt="TV Wall"
              class="w-full h-full object-cover"
              src="@/assets/img/orangeend.jpeg"
            >
          </v-card>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-card
            color="secondary"
            variant="text"
            class="h-full"
          >
            <v-card-title class="text-h5 font-weight-bold text-primary-darken-4">
              火车结局
            </v-card-title>
            <v-card-text class="text-body-1 text-secondary">
              阳光洒下火车站台，doro将不多的积蓄用来买了心爱的欧润吉，不过这次她并不打算白己吃。
              doro知道比起欧润吉，更心爱的人即将远走高飞。doro跌跌荡荡地走向你，并把心爱的欧润吉送给心爱的你。
              她想告诉你，希望你带上欧润吉，吃了它们，吃了她所有的爱。这样她所予的爱，就能一直留在你身边。
              但你挥了挥手中的两张车票，一把抱起 doro，走进了车厢，一起离开了这个地方。
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script
  setup
  lang="ts"
>
  // 無邏輯需求
</script>

<style scoped>
  .text-body-1 {
    color: #4e4e4e;
    line-height: 1.6;
  }
</style>
