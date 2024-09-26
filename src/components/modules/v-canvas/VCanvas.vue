<script setup>
import { onMounted, ref } from 'vue'
import CanvasTimer from './CanvasTimer.vue'

const finalPhoto = ref()
const showTimer = ref(false)

onMounted(() => {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  finalPhoto.value.src = ''

  const videoHeight = 2160
  const videoWidth = 3840
  const video = document.createElement('video')

  video.addEventListener('play', function () {
    video.height = 3840
    video.width = 2160
    drawToCanvas()
    setTimeout(() => {
      showTimer.value = true
      setTimeout(() => {
        navigator.serial.getPorts().then(async (devices) => {
          let port = devices[0]
          if (port.readable === null) {
            await port.open({ baudRate: 9600 })
            const utf8EncodeText = new TextEncoder()
            const data = utf8EncodeText.encode('1')
            console.log(data)
            const writer = port.writable.getWriter()
            await writer.write(data)
            writer.releaseLock()
          } else {
            console.log(port)
            const utf8EncodeText = new TextEncoder()
            const data = utf8EncodeText.encode('1')
            console.log(data)
            const writer = port.writable.getWriter()
            await writer.write(data)
            writer.releaseLock()
          }
        })
        toPhoto()
      }, 5000)
    }, 1000)
  })

  navigator.mediaDevices
    .getUserMedia({
      video: {
        width: { ideal: videoWidth },
        height: { ideal: videoHeight },
      },
      audio: false,
    })
    .then(function (stream) {
      video.srcObject = stream
      video.play()
    })

  const toPhoto = () => {
    finalPhoto.value.setAttribute('src', canvas.toDataURL())
    video.pause()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    fetch(finalPhoto.value.src)
      .then((res) => res.blob())
      .then(async (blob) => {
        const file = new File([blob], 'image.png', blob)
        const formData = new FormData()
        formData.append('userFaceImage', file)
        formData.append('costumeId', 0)
        formData.append('backgroundId', 0)
      })
  }

  function drawToCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.save()
    ctx.drawImage(video, 0, 0, 3840, 2160, 0, 0, canvas.width, canvas.height)
    ctx.save()
    ctx.rotate(-Math.PI / 2)
    ctx.drawImage(canvas, -canvas.height, 0, canvas.height, canvas.width)
    ctx.restore()
    ctx.save()
    ctx.translate(canvas.width, 0)
    ctx.scale(-1, 1)
    ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    requestAnimationFrame(drawToCanvas)
  }
})
</script>

<template>
  <div class="canvas-container">
    <canvas width="2160" height="3840" id="canvas" class="canvas"></canvas>
    <img src="/images/person-stroke.svg" alt="" class="person-stroke" />
    <div class="choose-title">Встаньте в область</div>
    <img ref="finalPhoto" src="" alt="" class="final-photo" />
    <CanvasTimer v-if="showTimer" :time="5" />
  </div>
</template>

<style scoped lang="scss">
@import 'VCanvas';
</style>
