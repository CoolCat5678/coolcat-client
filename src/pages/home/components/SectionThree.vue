<template>
    <section
        ref="sectionRef"
        class="section-container"
    >
        <div
            ref="cardRef"
            class="card-wrapper"
        >
            <v-card
                elevation="6"
                class="animated-card"
            >
                <h2 id="title">Simple Fade-Up Card</h2>
                <p>This card fades and moves up into view on scroll.</p>
            </v-card>
        </div>
    </section>
</template>

<script
    setup
    lang="ts"
>
    import { ref, onMounted } from 'vue'
    import gsap from 'gsap'
    import ScrollTrigger from 'gsap/ScrollTrigger'

    gsap.registerPlugin(ScrollTrigger)

    const sectionRef = ref<HTMLElement | null>(null)
    const cardRef = ref<HTMLElement | null>(null)

    onMounted(() => {
        if (!sectionRef.value || !cardRef.value) return

        gsap.from(cardRef.value, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: sectionRef.value,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        })
    })
</script>

<style scoped>
    .section-container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
    }

    .card-wrapper {
        width: 100%;
        max-width: 1000px;
    }

    .animated-card {
        padding: 2rem;
        background-color: #ffffff;
    }
</style>