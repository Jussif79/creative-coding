<template>
<div ref="canvasContainer" class="mt-15 flex justify-center">

</div>
</template>

<script>
import p5 from 'p5';

export default {
    name: 'ImageFilter',
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
                p5.image(img, 0, 0);

                img.loadPixels();

                for (let y = 0; y < img.height; y += 2) {
                    for (let x = 0; x < img.width; x += 2) {
                        let i = (x + y * img.width) * 4;
                        img.pixels[i + 0] = p5.mouseX;
                        img.pixels[i + 1] = p5.mouseY;
                        img.pixels[i + 2] = y;
                    }
                }

                img.updatePixels();
                p5.image(img, 0, 0);
            }
        }
    }
}
</script>
