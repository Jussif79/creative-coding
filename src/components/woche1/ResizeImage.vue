<template>
    <div ref="canvasContainer" class="mt-15 flex justify-center"></div>
</template>

<script>
import p5 from 'p5';

export default {
    name: 'ResizeImage',
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
            let originalWidth, originalHeight;

            p5.preload = () => {
                img = p5.loadImage('https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg');
            };

            p5.setup = () => {
                p5.createCanvas(800, 500);
                p5.pixelDensity(1);

                originalWidth = img.width;
                originalHeight = img.height;
            };

            p5.draw = () => {
                p5.background(220);

                // Map mouseX to scale between 0.1 and 2.0 for width
                let scaleW = p5.map(p5.mouseX, 0, p5.width, 0.1, 2.0);

                // Map mouseY to scale between 0.1 and 2.0 for height
                let scaleH = p5.map(p5.mouseY, 0, p5.height, 0.1, 2.0);

                // Calculate new dimensions
                let newWidth = originalWidth * scaleW;
                let newHeight = originalHeight * scaleH;

                // Center the image
                let x = (p5.width - newWidth) / 2;
                let y = (p5.height - newHeight) / 2;

                // Draw the image with scaled dimensions
                p5.image(img, x, y, newWidth, newHeight);

            }
        }
    }
}
</script>
