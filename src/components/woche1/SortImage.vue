<template>
  <div ref="canvasContainer" class="mt-15 flex justify-center"></div>
</template>

<script>
import p5 from 'p5';

export default {
    name: 'SortImage',
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
            let sorted;

            p5.preload = () => {
                img = p5.loadImage('https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg');
            };

            p5.setup = () => {
                p5.createCanvas(1000, 500);
                sorted = p5.createImage(img.width, img.height);
                sorted = img.get()
            };

            p5.draw = () => {
                sorted.loadPixels();

                // for (let i = 0; i < sorted.pixels.length; i ++) {
                //     float record = -1;
                //     int selectedPixel = i;

                //     for (int j = i; j < sorted.pixels.length; j++){
                //         color pix = sorted.pixels[j];
                //         float b = brightness(pix);

                //         if (b > record){
                //             record = b;
                //             selectedPixel = j;
                //         }
                //     }
                // }
                sorted.updatePixels();

                p5.image(img, 0, 0, 500, 500);
                p5.image(sorted, 500, 0, 500, 500);
            }
        }
    }
}
</script>
