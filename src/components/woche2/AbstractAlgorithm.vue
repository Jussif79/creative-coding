<template>
  <div ref="canvasContainer" class="mt-15 flex justify-center"></div>
</template>

<script>
import p5 from 'p5'

export default {
  name: 'AbstractAlgorithm',
  mounted() {
    this.createCanvas()
  },
  beforeDestroy() {
    if (this.p5) {
      this.p5.remove()
    }
  },
  methods: {
    createCanvas() {
      this.p5 = new p5(this.sketch, this.$refs.canvasContainer)
    },
    sketch(p5) {
      let circles = []

      p5.setup = () => {
        p5.createCanvas(500, 500)
        let x = p5.random(p5.width)
        let y = p5.random(p5.height)
        let r = p5.random(10, 50)
        circles.push({ x, y, r })
      }

      p5.draw = () => {
        circles.forEach((circle) => {
          p5.ellipse(circle.x, circle.y, circle.r)
        })
      }
    },
  },
}
</script>
