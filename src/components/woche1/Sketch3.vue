<template>
<div ref="canvasContainer" class="mt-15 flex justify-center"></div>
</template>

<script>
import p5 from 'p5';

export default {
    name: 'Sketch3',
    mounted() {
        this.createCanvas();
    },
    beforeDestroy() {
        if (this.p5) {
            this.p5.remove();
        }
    },
    methods: {
        createCanvas() {
            this.p5 = new p5(this.sketch, this.$refs.canvasContainer);
        },
        sketch(p5) {
            let img;

            p5.preload = () => {
                img = p5.loadImage('https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg');
            };

            p5.setup = () => {
                p5.createCanvas(500, 500)

                let cols = 10;
                let rows = 10;
                let squareSize = 50;

                for (let i = 0; i < cols; i++) {
                    for (let j = 0; j < rows; j++) {

                        let x = i * squareSize;
                        let y = j * squareSize;

                        p5.strokeWeight(2);

                        if (p5.random() < 0.5) {
                            p5.line(x, y, x + squareSize, y + squareSize);
                        } else {
                            p5.line(x + squareSize, y, x, y + squareSize);
                        }
                    }
                }
            };
        }
    }
}
</script>
