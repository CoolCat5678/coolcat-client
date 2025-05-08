<template>
  <div
    ref="threeCanvas"
    class="w-full h-full three-canvas"
  />
</template>

<script
  lang="ts"
  setup
>
  import { onMounted, ref } from 'vue'
  import * as THREE from 'three'
  import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

  const modelUrl = new URL('../../../assets/models/oiiaioooooiai_cat/scene.gltf', import.meta.url).href
  const threeCanvas = ref<HTMLElement | null>(null)

  onMounted(() => {
    const scene = new THREE.Scene()
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    if (!threeCanvas.value) return
    threeCanvas.value.appendChild(renderer.domElement)

    const updateCameraAspect = () => {
      const width = threeCanvas.value!.clientWidth
      const height = threeCanvas.value!.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    const initialPosition = new THREE.Vector3(-40, 60, 100)
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 500)
    camera.position.copy(initialPosition)
    updateCameraAspect()

    const light = new THREE.AmbientLight(0xffffff, 2)
    scene.add(light)

    let model: THREE.Object3D | null = null

    const loader = new GLTFLoader()
    loader.load(
      modelUrl,
      (gltf: GLTF) => {
        gltf.scene.position.set(0, 1, 0)
        gltf.scene.scale.set(8, 8, 8)
        scene.add(gltf.scene)
        model = gltf.scene
      },
      undefined,
      (error: Error) => {
        console.error('GLTF loading error:', error)
      }
    )

    camera.lookAt(new THREE.Vector3(0, 2, 0))

    const targetPosition = new THREE.Vector3(-2, 3, 5)
    const animationDuration = 3 // seconds
    let startTime: number | null = null
    let animationFinished = false

    const animateCameraSlide = (time: number) => {
      if (!startTime) startTime = time
      const elapsedTime = (time - startTime) / 1000

      if (elapsedTime < animationDuration) {
        const progress = elapsedTime / animationDuration
        camera.position.lerpVectors(initialPosition, targetPosition, progress)
        camera.lookAt(new THREE.Vector3(0, 2, 0))
      } else {
        if (!animationFinished) {
          camera.position.copy(targetPosition)
          camera.lookAt(new THREE.Vector3(0, 2, 0))
          animationFinished = true
        }
      }
    }

    let lastTimestamp = 0

    const animate = (time: number) => {
      requestAnimationFrame(animate)

      const delta = (time - lastTimestamp) / 1000 // in seconds
      lastTimestamp = time

      animateCameraSlide(time)

      if (animationFinished && model) {
        const rotationSpeed = (6 * Math.PI) / 180 // 6 degrees per second in radians
        model.rotation.y += rotationSpeed * delta
      }

      renderer.render(scene, camera)
    }

    const resizeRenderer = () => {
      const width = threeCanvas.value!.clientWidth
      const height = threeCanvas.value!.clientHeight
      renderer.setSize(width, height)
      updateCameraAspect()
    }

    resizeRenderer()
    animate(0)

    window.addEventListener('resize', resizeRenderer)
  })
</script>

<style scoped>
  .three-canvas {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>