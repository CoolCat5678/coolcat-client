<template>
  <section
    ref="sectionThreeRef"
    class="py-10"
  >
    <div class="flex flex-col md:flex-row md:gap-6">
      <!-- 左邊圖片 -->
      <div
        class="w-full md:w-1/2 flex justify-center"
        ref="cardImage"
      >
        <div class="w-4/5 aspect-video">
          <img
            alt="TV Wall"
            class="w-full h-full object-cover rounded-xl"
            src="@/assets/img/orangeend.jpeg"
          >
        </div>
      </div>

      <!-- 右邊文字 -->
      <div
        class="w-full md:w-1/2 flex flex-col justify-center pa-6"
        ref="cardText"
      >
        <h2 class="text-4xl font-bold text-primary mb-4">
          火车结局
        </h2>
        <p class="text-secondary leading-relaxed">
          阳光洒下火车站台，doro将不多的积蓄用来买了心爱的欧润吉，不过这次她并不打算白己吃。
          doro知道比起欧润吉，更心爱的人即将远走高飞。doro跌跌荡荡地走向你，并把心爱的欧润吉送给心爱的你。
          她想告诉你，希望你带上欧润吉，吃了它们，吃了她所有的爱。这样她所予的爱，就能一直留在你身边。
          但你挥了挥手中的两张车票，一把抱起 doro，走进了车厢，一起離開了这个地方。
        </p>
      </div>

    </div>
  </section>
</template>


<script
  setup
  lang="ts"
>
  import { onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const sectionThreeRef = ref < HTMLElement | null > (null);
  const cardImage = ref < HTMLElement | null > (null);
  const cardText = ref < HTMLElement | null > (null);

  onMounted(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionThreeRef.value,
        start: 'top 100%',
        toggleActions: 'play none none reset',
      },
    });

    // 圖片從左滑入
    tl.fromTo(
      cardImage.value,
      { opacity: 0, x: -60 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
    )
      // 文字從右滑入
      .fromTo(
        cardText.value,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' },
        '+=0.1'
      );
  });
</script>
