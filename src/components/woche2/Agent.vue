<template>
  <div ref="canvasContainer" class="mt-15 flex justify-center"></div>
</template>

<script>
import p5 from 'p5'

export default {
  name: 'Agent',
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
      let centerX, centerY
      let point1 = { x: 200, y: 200 }
      let point2 = { x: 300, y: 300 }
      let point3 = { x: 400, y: 400 }
      let point4 = { x: 100, y: 100 }
      const directions = {
        north: 0,
        east: 1,
        south: 2,
        west: 3,
      }

      p5.setup = () => {
        p5.createCanvas(500, 500)
        centerX = p5.width / 2
        centerY = p5.height / 2
      }

      p5.draw = () => {
        p5.clear()
        p5.strokeWeight(2)

        for (let i = 0; i < 100; i++) {
          let direction = p5.floor(p5.random(0, 4))
          p5.beginShape()
          p5.stroke('blue')
          p5.vertex(centerX, centerY)

          switch (direction) {
            case directions.north:
              p5.vertex(centerX, p5.mouseY)
              break
            case directions.south:
              p5.vertex(centerX, p5.mouseY)
              break
            case directions.east:
              p5.vertex(p5.mouseX, centerY)
              break
            case directions.west:
              p5.vertex(p5.mouseX, centerY)
              break
          }
          p5.endShape()

          p5.beginShape()
          p5.stroke('red')
          p5.vertex(point1.x, point1.y)

          switch (direction) {
            case directions.north:
              p5.vertex(point1.x, p5.mouseY)
              break
            case directions.south:
              p5.vertex(point1.x, p5.mouseY)
              break
            case directions.east:
              p5.vertex(p5.mouseX, point1.y)
              break
            case directions.west:
              p5.vertex(p5.mouseY, point1.y)
              break
          }
          p5.endShape()

          p5.beginShape()
          p5.stroke('green')
          p5.vertex(point2.x, point2.y)

          switch (direction) {
            case directions.north:
              p5.vertex(point2.x, p5.mouseY)
              break
            case directions.south:
              p5.vertex(point2.x, p5.mouseY)
              break
            case directions.east:
              p5.vertex(p5.mouseX, point2.y)
              break
            case directions.west:
              p5.vertex(p5.mouseY, point2.y)
              break
          }
          p5.endShape()

          p5.beginShape()
          p5.stroke('black')
          p5.vertex(point3.x, point3.y)

          switch (direction) {
            case directions.north:
              p5.vertex(point3.x, p5.mouseY)
              break
            case directions.south:
              p5.vertex(point3.x, p5.mouseY)
              break
            case directions.east:
              p5.vertex(p5.mouseX, point3.y)
              break
            case directions.west:
              p5.vertex(p5.mouseY, point3.y)
              break
          }
          p5.endShape()

          p5.beginShape()
          p5.stroke('orange')
          p5.vertex(point4.x, point4.y)

          switch (direction) {
            case directions.north:
              p5.vertex(point4.x, p5.mouseY)
              break
            case directions.south:
              p5.vertex(point4.x, p5.mouseY)
              break
            case directions.east:
              p5.vertex(p5.mouseX, point4.y)
              break
            case directions.west:
              p5.vertex(p5.mouseY, point4.y)
              break
          }
          p5.endShape()
        }
      }
    },
  },
}
</script>
