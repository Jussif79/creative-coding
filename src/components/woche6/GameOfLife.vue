<template>
  <div class="flex flex-col items-center">
    <button
      @click="toggleSimulation"
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      {{ isRunning ? 'Pause' : 'Start' }}
    </button>
    <div ref="canvasContainer" class="mt-4"></div>
  </div>
</template>

<script>
import p5 from 'p5'

export default {
  name: 'GameOfLife',
  data() {
    return {
      isRunning: false,
    }
  },
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
    toggleSimulation() {
      this.isRunning = !this.isRunning
      if (this.p5) {
        if (this.isRunning) {
          this.p5.loop()
        } else {
          this.p5.noLoop()
        }
      }
    },
    sketch(p5) {
      let grid = []
      let cols, rows

      p5.setup = () => {
        p5.createCanvas(600, 400)
        p5.background(255)
        p5.noLoop() // Start in paused state

        // to see frame of canvas
        p5.stroke(0)
        p5.rect(0, 0, p5.width, p5.height)
        p5.stroke(255)

        cols = p5.floor(p5.width / 20)
        rows = p5.floor(p5.height / 20)

        for (let i = 0; i < cols; i++) {
          grid[i] = []
          for (let j = 0; j < rows; j++) {
            grid[i][j] = p5.floor(p5.random(2))
          }
        }

        p5.frameRate(10)

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            if (grid[i][j] === 1) {
              p5.fill(0)
              p5.rect(i * 20, j * 20, 20, 20)
            }
          }
        }
      }
      p5.draw = () => {
        let next = []
        for (let i = 0; i < cols; i++) {
          next[i] = []
          for (let j = 0; j < rows; j++) {
            let state = grid[i][j]
            let sum = 0
            for (let x = -1; x <= 1; x++) {
              for (let y = -1; y <= 1; y++) {
                if (x === 0 && y === 0) continue
                let col = (i + x + cols) % cols
                let row = (j + y + rows) % rows
                sum += grid[col][row]
              }
            }
            if (state === 1 && (sum < 2 || sum > 3)) {
              next[i][j] = 0
            } else if (state === 0 && sum === 3) {
              next[i][j] = 1
            } else {
              next[i][j] = state
            }
          }
        }

        grid = next

        p5.clear()

        // to see frame of canvas
        p5.stroke(0)
        p5.fill(255)
        p5.rect(0, 0, p5.width, p5.height)
        p5.stroke(255)

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            if (grid[i][j] === 1) {
              p5.fill(0)
              p5.rect(i * 20, j * 20, 20, 20)
            }
          }
        }
      }
    },
  },
}
</script>
