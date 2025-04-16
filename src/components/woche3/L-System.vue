<template>
  <div class="flex flex-col items-center p-5">
    <button
      @click="generate"
      class="px-5 py-2 mb-5 text-white bg-green-500 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
      :disabled="generationCount >= 4"
    >
      Generate {{ generationCount }}
    </button>
    <div class="flex gap-5">
      <div ref="canvasContainer1" class="border border-gray-300"></div>
      <div ref="canvasContainer2" class="border border-gray-300"></div>
    </div>
    <div class="flex gap-5 mt-5">
      <div ref="canvasContainer3" class="border border-gray-300"></div>
      <div ref="canvasContainer4" class="border border-gray-300"></div>
    </div>
  </div>
</template>

<script>
import p5 from 'p5'

export default {
  name: 'L-System',
  data() {
    return {
      p5_1: null,
      p5_2: null,
      p5_3: null,
      p5_4: null,
      sentences: ['F', 'F', 'F', 'F'],
      length: 100,
      angles: [22.5, 50, 15, 30],
      rules: [
        {
          pre: 'F',
          post: 'FF+[+F-F-F]-[-F+F+F]',
        },
        {
          pre: 'F',
          post: 'F[+F]F[-F]F',
        },
        {
          pre: 'F',
          post: 'F[+F][-F]',
        },
        {
          pre: 'F',
          post: 'FF-[-F+F+F]+[+F-F-F]',
        },
      ],
      generationCount: 0,
    }
  },
  mounted() {
    this.initCanvases()
  },
  beforeDestroy() {
    if (this.p5_1) this.p5_1.remove()
    if (this.p5_2) this.p5_2.remove()
    if (this.p5_3) this.p5_3.remove()
    if (this.p5_4) this.p5_4.remove()
  },
  methods: {
    initCanvases() {
      // First canvas
      this.p5_1 = new p5((p) => {
        p.setup = () => {
          p.createCanvas(400, 400).parent(this.$refs.canvasContainer1)
          p.background(55)
          this.drawing(p, 0) // 0 is the index for canvas 1
        }
      })

      // Second canvas
      this.p5_2 = new p5((p) => {
        p.setup = () => {
          p.createCanvas(400, 400).parent(this.$refs.canvasContainer2)
          p.background(200)
          this.drawing(p, 1) // 1 is the index for canvas 2
        }
      })

      // Third canvas
      this.p5_3 = new p5((p) => {
        p.setup = () => {
          p.createCanvas(400, 400).parent(this.$refs.canvasContainer3)
          p.background(100, 150, 200)
          this.drawing(p, 2)
        }
      })

      // Fourth canvas
      this.p5_4 = new p5((p) => {
        p.setup = () => {
          p.createCanvas(400, 400).parent(this.$refs.canvasContainer4)
          p.background(200, 100, 50)
          this.drawing(p, 3)
        }
      })
    },
    generate() {
      if (this.generationCount >= 4) return

      this.length *= 0.5

      // Generate next sentence for each canvas using its own rules
      for (let canvasIndex = 0; canvasIndex < 4; canvasIndex++) {
        let nextSentence = ''
        for (let i = 0; i < this.sentences[canvasIndex].length; i++) {
          const current = this.sentences[canvasIndex].charAt(i)
          const found = this.rules[canvasIndex].pre === current ? this.rules[canvasIndex] : null
          nextSentence += found ? found.post : current
        }
        this.sentences[canvasIndex] = nextSentence
      }

      this.generationCount++

      this.drawing(this.p5_1, 0)
      this.drawing(this.p5_2, 1)
      this.drawing(this.p5_3, 2)
      this.drawing(this.p5_4, 3)
    },
    drawing(p, canvasIndex) {
      const backgrounds = [
        [55, 55, 55],
        [150, 100, 240],
        [100, 150, 200],
        [200, 100, 50]
      ]
      p.background(...backgrounds[canvasIndex])

      p.resetMatrix()
      p.translate(p.width / 2, p.height)

      const strokes = [
        [255, 100],
        [200, 100],
        [255, 150, 50],
        [50, 255, 150]
      ]
      p.stroke(...strokes[canvasIndex])

      const angle = p.radians(this.angles[canvasIndex])
      const sentence = this.sentences[canvasIndex]

      for (let i = 0; i < sentence.length; i++) {
        const current = sentence.charAt(i)
        if (current === 'F') {
          p.line(0, 0, 0, -this.length)
          p.translate(0, -this.length)
        } else if (current === '+') {
          p.rotate(angle)
        } else if (current === '-') {
          p.rotate(-angle)
        } else if (current === '[') {
          p.push()
        } else if (current === ']') {
          p.pop()
        }
      }
    },
  },
}
</script>
