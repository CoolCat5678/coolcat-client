<template>
  <section class="py-10">
    <v-container fluid>
      <v-row
        align="center"
        justify="center"
      >
        <!-- Image Card -->
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            class="overflow-hidden rounded-xl h-96"
            elevation="2"
            ref="cardImage"
          >
            <img
              alt="TV Wall"
              class="w-full h-full object-cover"
              src="@/assets/img/orangeend.jpeg"
            />
          </v-card>
        </v-col>

        <!-- Text Card -->
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            color="secondary"
            variant="text"
            class="h-full"
            ref="cardText"
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
  import { onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const cardImage = ref<HTMLElement | null>(null);
  const cardText = ref<HTMLElement | null>(null);

  onMounted(() => {
    // 创建GSAP时间线
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.py-10',  // 触发动画的容器
        start: 'top 100%',
        toggleActions: 'play none none reset',  // 控制动画的触发方式
      },
    });

    // 第一个卡片：图片
    tl.fromTo(
      cardImage.value,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    )
      // 第二个卡片：文字
      .fromTo(
        cardText.value,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '+=0.1'  // 延迟 0.1 秒开始
      );
  });
</script>

<style scoped>
  .text-body-1 {
    color: #4e4e4e;
    line-height: 1.6;
  }
</style>
