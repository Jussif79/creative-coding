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
import p from 'p5';

export default {
  name: 'GameOfLife',
  data() {
    return {
      isRunning: false,
      shouldDraw: false,
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
      this.shouldDraw = true
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
        p5.noLoop()

        // to see frame of canvas
        p5.stroke(0)
        p5.rect(0, 0, p5.width, p5.height)
        p5.stroke(255)

        cols = p5.floor(p5.width / 20)
        rows = p5.floor(p5.height / 20)

        for (let i = 0; i < cols; i++) {
          grid[i] = []
          for (let j = 0; j < rows; j++) {
            grid[i][j] = 0
          }
        }

        grid[5][7] = 1
        grid[5][8] = 1
        grid[6][7] = 1
        grid[6][8] = 1

        grid[5][11] = 1
        grid[5][12] = 1
        grid[6][11] = 1
        grid[6][12] = 1

        grid[8][5] = 1
        grid[8][6] = 1
        grid[8][7] = 1
        grid[8][8] = 1
        grid[8][9] = 1
        grid[8][10] = 1
        grid[8][11] = 1
        grid[8][12] = 1
        grid[8][13] = 1
        grid[8][14] = 1

        grid[9][4] = 1
        grid[9][15] = 1
        grid[10][4] = 1
        grid[10][5] = 1
        grid[10][8] = 1
        grid[10][9] = 1
        grid[10][10] = 1
        grid[10][11] = 1
        grid[10][14] = 1
        grid[10][15] = 1

        grid[12][9] = 1
        grid[12][10] = 1
        grid[13][8] = 1
        grid[13][11] = 1
        grid[14][8] = 1
        grid[14][11] = 1
        grid[15][9] = 1
        grid[15][10] = 1

        grid[18][4] = 1
        grid[18][15] = 1
        grid[17][4] = 1
        grid[17][5] = 1
        grid[17][8] = 1
        grid[17][9] = 1
        grid[17][10] = 1
        grid[17][11] = 1
        grid[17][14] = 1
        grid[17][15] = 1

        grid[19][5] = 1
        grid[19][6] = 1
        grid[19][7] = 1
        grid[19][8] = 1
        grid[19][9] = 1
        grid[19][10] = 1
        grid[19][11] = 1
        grid[19][12] = 1
        grid[19][13] = 1
        grid[19][14] = 1

        grid[21][7] = 1
        grid[21][8] = 1
        grid[22][7] = 1
        grid[22][8] = 1

        grid[21][11] = 1
        grid[21][12] = 1
        grid[22][11] = 1
        grid[22][12] = 1


        p5.frameRate(5)

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

        if (!this.shouldDraw) return

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
