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

      const handleMouseMove = (e: MouseEvent) => {
        if (!canvas.value) return
        const rect = canvas.value.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const col = Math.floor(x / gridSize)
        const row = Math.floor(y / gridSize)

        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const r = row + dy
            const c = col + dx

            if (gridBrightness[r] && gridBrightness[r][c] !== undefined) {
              if (dx === 0 && dy === 0) {
                // 中心格最亮
                gridBrightness[r][c] = 1
              } else if (dx === 0 || dy === 0) {
                // 上下左右格亮度範圍 0.0 ~ 0.4
                gridBrightness[r][c] = Math.max(gridBrightness[r][c], 0.4 - 0.4 * Math.abs(dx + dy))
              } else {
                // 左上、右上、左下、右下的格子亮度範圍 0.0 ~ 0.2
                gridBrightness[r][c] = Math.max(gridBrightness[r][c], 0.2 - 0.2 * Math.abs(dx + dy))
              }
            }

          }
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

        // 初始化或保留原亮度資料
        gridBrightness = Array.from({ length: rows }, (_, row) =>
          Array.from({ length: cols }, (_, col) => gridBrightness?.[row]?.[col] ?? 0)
        )

        ctx.lineWidth = 1

        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            const x = col * gridSize
            const y = row * gridSize
            const brightness = gridBrightness[row][col]

            // 更新亮度（漸暗）
            gridBrightness[row][col] = Math.max(0, brightness - 0.02)

            // 基底線條 + 發光透明度疊加
            const alpha = 0.05 + brightness * 0.95
            ctx.strokeStyle = `rgba(149, 117, 205, ${alpha})`
            ctx.strokeRect(x, y, gridSize, gridSize)
          }
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
          window.addEventListener('mousemove', handleMouseMove)
          animate()
        })
      })

      onBeforeUnmount(() => {
        cancelAnimationFrame(animationFrameId)
        window.removeEventListener('resize', resizeCanvas)
        window.removeEventListener('mousemove', handleMouseMove)
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
