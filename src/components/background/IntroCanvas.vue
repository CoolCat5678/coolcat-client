<template>
  <canvas
    ref="canvas"
    class="w-full h-full"
    @click="handleClick"
  />
</template>

<script lang="ts">
  import {
    defineComponent,
    onMounted,
    onBeforeUnmount,
    ref,
    nextTick,
  } from 'vue'

  export default defineComponent({
    name: 'ElectricCanvas',
    setup () {
      const canvas = ref<HTMLCanvasElement | null>(null)
      let animationFrameId: number
      let gridBrightness: number[][] = []
      let gridSize = 0
      let cols = 0
      let rows = 0
      let tick = 0
      let tickCounter = 0
      let phase = 0 // 0: animation_1, 1: animation_2, 2: animation_3, 3: animation_4

      const clearSelf = () => {
        const el = canvas.value
        if (el?.parentNode) {
          el.parentNode.removeChild(el)
        }
      }

      // animation_1: Left-Top to Right-Bottom
      const animation_1 = () => {
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            if (row + col === tick) {
              gridBrightness[row][col] = 1
            }
          }
        }
      }

      // animation_2: Right-Top to Left-Bottom
      const animation_2 = () => {
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            if ((col - row) === (cols - 1 - tick)) {
              gridBrightness[row][col] = 1
            }
          }
        }
      }

      // animation_3: Diagonal growth
      const animation_3 = () => {
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            if (Math.abs(row - col) === tick) {
              gridBrightness[row][col] = 1
            }
          }
        }
      }

      // animation_4: Fade from black to transparent from top to bottom
      const animation_4 = () => {
        for (let row = 0; row < rows; row++) {
          const alpha = (row / rows); // Gradually increase transparency as we go down
          for (let col = 0; col < cols; col++) {
            gridBrightness[row][col] = Math.max(0, gridBrightness[row][col] - 0.02) // Fade grid brightness
          }
        }
      }

      // Handle switching between animations and clearing after phase 4
      const drawIntroPattern = () => {
        tickCounter += 0.6
        if (tickCounter < 1) return
        tickCounter = 0

        if (phase === 0) {
          animation_1()
          tick++
          if (tick > rows + cols - 2) {
            tick = 0
            phase = 1
          }
        } else if (phase === 1) {
          animation_2()
          tick++
          if (tick > rows + cols - 2) {
            tick = 0
            phase = 2
          }
        } else if (phase === 2) {
          animation_3()
          tick++
          if (tick > rows + cols - 2) {
            tick = 0
            phase = 3
          }
        } else if (phase === 3) {
          animation_4()
          tick++
          if (tick > rows + cols - 2) {
            tick = 0
            phase = 4
          }
        } else if (phase === 4) {
          cancelAnimationFrame(animationFrameId) // Stop animation
          clearSelf() // Remove the canvas after the animations are completed
        }
      }

      const drawGrid = (
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number
      ) => {
        const targetSize = 50
        cols = Math.floor(width / targetSize)
        gridSize = width / cols
        rows = Math.ceil(height / gridSize)

        gridBrightness = Array.from({ length: rows }, (_, row) =>
          Array.from({ length: cols }, (_, col) => gridBrightness?.[row]?.[col] ?? 0)
        )

        drawIntroPattern() // Draw animation pattern

        // Gradually fade the background from black to transparent (animation_4)
        const fadeAlpha = (tick / (rows + cols)) // Adjust alpha as we go through the animation
        ctx.fillStyle = `rgba(0, 0, 0, ${fadeAlpha})`
        ctx.fillRect(0, 0, width, height) // Fill canvas with black, gradually fading to transparent

        ctx.lineWidth = 1
        let hasActiveBrightness = false

        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            const x = col * gridSize
            const y = row * gridSize
            const brightness = gridBrightness[row][col]

            if (brightness > 0.01) hasActiveBrightness = true
            gridBrightness[row][col] = Math.max(0, brightness - 0.02)

            const alpha = 0.05 + brightness * 0.95
            ctx.strokeStyle = `rgba(149, 117, 205, ${alpha})`
            ctx.strokeRect(x, y, gridSize, gridSize)
          }
        }

        // Remove canvas when the animation is complete
        if (!hasActiveBrightness && phase === 4) {
          cancelAnimationFrame(animationFrameId)
          clearSelf()
        }
      }

      const animate = () => {
        const ctx = canvas.value?.getContext('2d')
        if (!ctx || !canvas.value) return

        const { width, height } = canvas.value
        ctx.clearRect(0, 0, width, height)

        drawGrid(ctx, width, height)

        animationFrameId = requestAnimationFrame(animate)
      }

      const resizeCanvas = () => {
        const el = canvas.value
        if (el) {
          el.width = el.offsetWidth
          el.height = el.offsetHeight
        }
      }

      const handleClick = (e: MouseEvent) => {
        if (!canvas.value) return
        const rect = canvas.value.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        console.log(`Clicked at (${x}, ${y})`)
      }

      onMounted(() => {
        nextTick(() => {
          resizeCanvas()
          window.addEventListener('resize', resizeCanvas)
          animate()
        })
      })

      onBeforeUnmount(() => {
        cancelAnimationFrame(animationFrameId)
        window.removeEventListener('resize', resizeCanvas)
      })

      return {
        canvas,
        handleClick,
      }
    },
  })
</script>

<style scoped>
  canvas {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
