<template>
  <div ref="canvasContainer" class="mt-15 flex justify-center"></div>
</template>

<script>
import p5 from 'p5'

export default {
  name: 'Shapes',
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
      const amountOfFormPoints = 5
      const stepSize = 2
      const initRadius = 150
      const mouseAttraction = 0.01
      let centerX, centerY
      let x = []
      let y = []

      p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight)

        //initial shape
        centerX = p5.width / 2
        centerY = p5.height / 2

        const angle = p5.radians(360 / amountOfFormPoints)
        for (let i = 0; i < amountOfFormPoints; i++) {
          x.push(p5.cos(angle * i) * initRadius)
          y.push(p5.sin(angle * i) * initRadius)
        }

        //styling
        p5.stroke(0, 75)
        p5.strokeWeight(0.5)
        p5.background(255)
        p5.noFill()
      }

      p5.draw = () => {
        // float owards mouse position
        centerX += (p5.mouseX - centerX) * mouseAttraction
        centerY += (p5.mouseY - centerY) * mouseAttraction

        //calculate new points
        for (let i = 0; i < amountOfFormPoints; i++) {
          x[i] += p5.random(-stepSize, stepSize)
          y[i] += p5.random(-stepSize, stepSize)
          p5.ellipse(x[i] + centerX, y[i] + centerY, 5, 5)
        }

        p5.beginShape()
        //first controlPoint
        p5.curveVertex(x[0] + centerX, y[0] + centerY)

        //only these points are drawn
        for (let i = 0; i < amountOfFormPoints; i++) {
          p5.curveVertex(x[i] + centerX, y[i] + centerY)
        }

        // connect to the first point again
        p5.curveVertex(x[0] + centerX, y[0] + centerY)

        //end controlPoint
        p5.curveVertex(x[amountOfFormPoints - 1] + centerX, y[amountOfFormPoints - 1] + centerY)
        p5.endShape()
      }
    },
  },
}
</script>
