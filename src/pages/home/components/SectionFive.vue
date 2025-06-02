<template>
  <section
    ref="techSection"
    class="py-16"
  >
    <div class="max-w-5xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-primary mb-10">
        Frontend Tech Overview
      </h2>

      <div class="grid gap-6">
        <div
          v-for="(tech, index) in techList"
          :key="index"
          class="rounded-xl elevation-2 pa-6 d-flex flex-column flex-md-row align-start align-md-center justify-space-between overflow-hidden"
          :ref="el => setRefs(el, index)"
        >
          <v-img
            :src="tech.image"
            alt="tech icon"
            class="mb-4 mb-md-0 mr-md-6"
            max-width="64"
            max-height="64"
            cover
            rounded
          />
          <div class="flex-1">
            <div
              class="text-h6 font-weight-medium text-primary"
              :ref="el => titleRefs[index] = el"
            >
              {{ tech.name }}
            </div>
            <div
              class="mt-2 text-secondary"
              :ref="el => descRefs[index] = el"
            >
              {{ tech.description }}
            </div>
          </div>
        </div>
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

  interface TechItem {
    name: string;
    description: string;
    image: string;
  }

  const techList: TechItem[] = [
    {
      name: 'Vue 3',
      description: 'Modern reactive framework',
      image: new URL('@/assets/img/tech-icons/vue.png', import.meta.url).href,
    },
    {
      name: 'Vuetify',
      description: 'Material Design component framework',
      image: new URL('@/assets/img/tech-icons/vuetify.png', import.meta.url).href,
    },
    {
      name: 'TypeScript',
      description: 'Typed JavaScript',
      image: new URL('@/assets/img/tech-icons/typescript.png', import.meta.url).href,
    },
    {
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework',
      image: new URL('@/assets/img/tech-icons/tailwindcss.svg', import.meta.url).href,
    },
    {
      name: 'GSAP',
      description: 'High-performance animation',
      image: new URL('@/assets/img/tech-icons/gsap.webp', import.meta.url).href,
    },
    {
      name: 'Three.js',
      description: 'WebGL 3D rendering library',
      image: new URL('@/assets/img/tech-icons/threejs.png', import.meta.url).href,
    },
  ];

  const techSection = ref<HTMLElement | null>(null);
  const titleRefs: HTMLElement[] = [];
  const descRefs: HTMLElement[] = [];

  const setRefs = (el: HTMLElement, index: number) => {
    if (el && !titleRefs[index]) {
      titleRefs[index] = el.querySelector('div:nth-child(2) > div:nth-child(1)') as HTMLElement;
      descRefs[index] = el.querySelector('div:nth-child(2) > div:nth-child(2)') as HTMLElement;
    }
  };

  onMounted(() => {
    titleRefs.forEach((title, index) => {
      const desc = descRefs[index];
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
          toggleActions: 'play none none reset',
        },
      });

      tl.fromTo(
        title,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
      ).fromTo(
        desc,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      );
    });
  });
</script>
