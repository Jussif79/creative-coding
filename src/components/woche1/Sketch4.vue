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

            };

            p5.setup = () => {

            };

            p5.draw = () => {

            }
        }
    }
}
</script>
