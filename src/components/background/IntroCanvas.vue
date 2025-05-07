<template>
  <canvas ref="canvas" class="w-full h-full" />
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onBeforeUnmount,
  ref,
  nextTick,
} from 'vue'
import { useTheme } from 'vuetify'

export default defineComponent({
  name: 'ElectricCanvas',
  setup() {
    const canvas = ref<HTMLCanvasElement | null>(null)
    const theme = useTheme()
    const themeBackground = theme.current.value.colors.background

    let animationFrameId: number
    let gridBrightness: number[][] = []
    let gridSize = 0
    let cols = 0
    let rows = 0
    let tick = 0
    let tickCounter = 0
    let phase = 0
    let backgroundAlpha = 1.0

    const animation3Stages = 4
    const stageDelay = 5
    let columnGroupMap: number[] = []

    const clearSelf = () => {
      const el = canvas.value
      if (el?.parentNode) {
        el.parentNode.removeChild(el)
      }
    }

    const animation_1 = () => {
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          if (row + col === tick) {
            gridBrightness[row][col] = 1
          }
        }
      }
    }

    const animation_2 = () => {
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          if ((col - row) === (cols - 1 - tick)) {
            gridBrightness[row][col] = 1
          }
        }
      }
    }

    const animation_3 = () => {
      for (let col = 0; col < cols; col++) {
        const group = columnGroupMap[col]
        const delay = group * stageDelay
        const currentRow = rows - 1 - (tick - delay)

        if (tick >= delay && currentRow >= 0 && currentRow < rows) {
          gridBrightness[currentRow][col] = 1
        }
      }
    }

    const animation_4 = () => {
      backgroundAlpha = Math.max(0, backgroundAlpha - 0.01)
    }

    const drawIntroPattern = () => {
      tickCounter += 0.3
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
        const maxDelay = (animation3Stages - 1) * stageDelay
        if (tick > rows + maxDelay) {
          tick = 0
          phase = 3
        }
      } else if (phase === 3) {
        animation_4()
        if (backgroundAlpha === 0) {
          phase = 4
          cancelAnimationFrame(animationFrameId)
          clearSelf()
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

      gridBrightness = Array.from({ length: rows }, (_, row) =>
        Array.from({ length: cols }, (_, col) => gridBrightness?.[row]?.[col] ?? 0)
      )

      if (columnGroupMap.length !== cols) {
        columnGroupMap = Array.from({ length: cols }, () =>
          Math.floor(Math.random() * animation3Stages)
        )
      }

      drawIntroPattern()

      // 使用 Vuetify 的 onBackground 顏色並加上透明度
      ctx.fillStyle = hexToRgba(themeBackground, backgroundAlpha)
      ctx.fillRect(0, 0, width, height)

      ctx.lineWidth = 1
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * gridSize
          const y = row * gridSize
          const brightness = gridBrightness[row][col]

          gridBrightness[row][col] = Math.max(0, brightness - 0.02)

          const alpha = 0.05 + brightness * 0.95
          ctx.strokeStyle = `rgba(149, 117, 205, ${alpha})`
          ctx.strokeRect(x, y, gridSize, gridSize)
        }
      }
    }

    // 將 hex 顏色轉為 rgba 字串
    const hexToRgba = (hex: string, alpha: number): string => {
      const r = parseInt(hex.slice(1, 3), 16)
      const g = parseInt(hex.slice(3, 5), 16)
      const b = parseInt(hex.slice(5, 7), 16)
      return `rgba(${r}, ${g}, ${b}, ${alpha})`
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
