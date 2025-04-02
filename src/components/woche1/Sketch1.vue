<template>
<div ref="canvasContainer"></div>
</template>

<script>
import p5 from 'p5';

export default {
    name: 'ImageManipulation',
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
                const weight = p5.random(1, 10)

                for (let i = 0; i < 500; i += 50) {
                    p5.strokeWeight(weight)
                    p5.rect(p5.random(0, p5.width / 2), p5.random(0, p5.height / 2), p5.random(200, 300))
                }
            };
        }
    }
}
</script>
