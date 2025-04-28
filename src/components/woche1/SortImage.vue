<template>
  <div class="flex flex-col items-center p-5">
    <div class="flex gap-5">
      <div ref="canvasContainer1" class="border border-gray-300"></div>
      <div ref="canvasContainer2" class="border border-gray-300"></div>
    </div>
  </div>
</template>

<script>
import p from 'p5'

export default {
  name: 'SortImage',
  mounted() {
    this.createCanvas()
  },
  beforeDestroy() {
    if (this.p5_1) {
      this.p5_1.remove()
    }
    if (this.p5_2) {
      this.p5_2.remove()
    }
  },
  methods: {
    createCanvas() {
      // First canvas
      this.p5_1 = new p((p) => {
        let img
        p.preload = () => {
          img = p.loadImage('https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg')
        }
        p.setup = () => {
          p.createCanvas(400, 400).parent(this.$refs.canvasContainer1)
          p.image(img, 0, 0, 400, 400)
        }
      })

      // Second canvas
      this.p5_2 = new p((p) => {
        let img
        p.preload = () => {
          img = p.loadImage('https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg')
        }
        p.setup = () => {
          const canvas = p.createCanvas(400, 400).parent(this.$refs.canvasContainer2)
          p.noSmooth()
        }
        p.draw = () => {
          img.loadPixels()

          // Loop 100 times to speed up the animation.
          for (let i = 0; i < 100; i++) {
            p.sortPixels()
          }

          img.updatePixels()
          p.image(img, 0, 0, img.width, img.height)
        }
        p.sortPixels = () => {
          // Get a random pixel.
          const x = p.random(img.width)
          const y = p.random(img.height - 1)

          // Get the color of the pixel.
          const colorOne = img.get(x, y)

          // Get the color of the pixel below the first one.
          const colorTwo = img.get(x, y + 1)

          // Get the total R+G+B of both colors.
          const totalOne = p.red(colorOne) + p.green(colorOne) + p.blue(colorOne)
          const totalTwo = p.red(colorTwo) + p.green(colorTwo) + p.blue(colorTwo)

          // If the first total is less than the second total, swap the pixels.
          if (totalOne < totalTwo) {
            img.set(x, y, colorTwo)
            img.set(x, y + 1, colorOne)
          }
        }
      })
    },
  },
}
</script>
