<template>
  <div ref="canvasContainer" class="mt-15 flex justify-center"></div>
</template>

<script>
import p5 from 'p5'

export default {
  name: 'TwoImages',
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
      let imgA, imgB
      let combinedImg

      p5.preload = () => {
        imgA = p5.loadImage('https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg')
        imgB = p5.loadImage(
          'https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg',
        )
      }

      p5.setup = () => {
        p5.createCanvas(500, 500)
        p5.pixelDensity(1)

        // Resize both images to the same dimensions (using the smaller dimensions)
        const w = p5.min(imgA.width, imgB.width)
        const h = p5.min(imgA.height, imgB.height)
        imgA.resize(w, h)
        imgB.resize(w, h)

        // Create a blank image for the result
        combinedImg = p5.createImage(w, h)
      }

      p5.draw = () => {
        // Load pixels for all images
        imgA.loadPixels()
        imgB.loadPixels()
        combinedImg.loadPixels()

        // Iterate through all pixels
        for (let y = 0; y < combinedImg.height; y++) {
          for (let x = 0; x < combinedImg.width; x++) {
            // Calculate the 1D pixel index
            const idx = (x + y * combinedImg.width) * 4

            // Check if pixel is odd or even (alternating pattern)
            if ((x + y) % 2 === 0) {
              // Even position - take from image B
              combinedImg.pixels[idx] = imgB.pixels[idx] // R
              combinedImg.pixels[idx + 1] = imgB.pixels[idx + 1] // G
              combinedImg.pixels[idx + 2] = imgB.pixels[idx + 2] // B
              combinedImg.pixels[idx + 3] = imgB.pixels[idx + 3] // A
            } else {
              // Odd position - take from image A
              combinedImg.pixels[idx] = imgA.pixels[idx] // R
              combinedImg.pixels[idx + 1] = imgA.pixels[idx + 1] // G
              combinedImg.pixels[idx + 2] = imgA.pixels[idx + 2] // B
              combinedImg.pixels[idx + 3] = imgA.pixels[idx + 3] // A
            }
          }
        }

        // Update and display the combined image
        combinedImg.updatePixels()
        p5.image(
          combinedImg,
          (p5.width - combinedImg.width) / 2,
          (p5.height - combinedImg.height) / 2,
        )
      }
    },
  },
}
</script>
