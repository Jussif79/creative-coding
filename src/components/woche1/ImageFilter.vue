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
                p5.createCanvas(400, 400);
                p5.pixelDensity(1);
            };

            p5.draw = () => {
                p5.background(0);
                img.p5.loadPixels();
                p5.loadPixels();
                for (let y = 0; y < height; y++) {
                    for (let x = 0; x < width; x++) {
                        let index = (x + y * width) * 4;
                        let r = img.pixels[index + 0];
                        let g = img.pixels[index + 1];
                        let b = img.pixels[index + 2];
                        let a = img.pixels[index + 3];
                        let bright = (r + g + b) / 3;
                        pixels[index + 0] = bright;
                        pixels[index + 1] = bright;
                        pixels[index + 2] = bright;
                        pixels[index + 3] = a;
                    }
                }
                p5.updatePixels();
            }
        }
    }
}
</script>
