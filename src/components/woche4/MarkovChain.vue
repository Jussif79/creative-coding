<template>
  <div ref="canvasContainer" class="mt-15 flex flex-col items-center">
    <button
      @click="generateText"
      class="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Generate Text
    </button>
    <div v-if="generatedText" class="max-w-lg p-4 bg-gray-100 rounded">
      {{ generatedText }}
    </div>
  </div>
</template>

<script>
import p5 from 'p5'

export default {
  name: 'MarkovChain',
  data() {
    return {
      generatedText: '',
      markovChain: null,
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
    generateText(startWord, length) {
      let currentWord = startWord
      let result = [currentWord]

      for (let i = 0; i < length; i++) {
        let possibilities = markovChain[currentWord]
        if (!possibilities || possibilities.length === 0) break

        currentWord = random(possibilities)
        result.push(currentWord)
        this.generatedText = result.join(' ')
      }
    },
    sketch(p5) {
      let txtFile
      let markovChain = new Map()
      p5.preload = () => {
        txtFile = p5.loadStrings('/Unterlagen/Woche4/test.txt')
      }

      p5.setup = () => {
        p5.createCanvas(400, 400)

        let words = txtFile[0].split(' ')

        for (let i = 0; i < words.length - 1; i++) {
          let currentWord = words[i]
          let nextWord = words[i + 1]

          if (!markovChain[currentWord]) {
            markovChain[currentWord] = []
          }
          markovChain[currentWord].push(nextWord)
        }

        console.log(markovChain)
      }

      p5.draw = () => {}
    },
  },
}
</script>
