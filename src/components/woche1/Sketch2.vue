<template>
<div ref="canvasContainer" class="mt-15 flex justify-center"></div>
</template>

<script>
import p5 from 'p5';

export default {
    name: 'Sketch2',
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
                p5.createCanvas(500, 500);

                const col = 10
                const row = 10
                const Gridsize = 50

                const color = ["#ECECEC", "#656262", "#110000"];

                for (let i = 0; i < col; i++) {
                    for (let j = 0; j < row; j++) {
                        p5.fill(color[p5.random([0, 1, 2])]);
                        p5.noStroke();
                        p5.circle(i * Gridsize, j * Gridsize, p5.random(15, 60));
                    }
                }
            };
        }
    }
}
</script>
