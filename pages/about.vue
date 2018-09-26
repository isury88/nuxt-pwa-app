<template>
  <div>
    <h1>About</h1>
    <carousel>
      <slide>
        <img src="https://source.unsplash.com/random" alt="">
      </slide>
      <slide>
        <img src="https://source.unsplash.com/random" alt="">
      </slide>
      <slide>
        <img src="https://source.unsplash.com/random" alt="">
      </slide>
      <slide>
        <img src="https://source.unsplash.com/random" alt="">
      </slide>
      <slide>
        <img src="https://source.unsplash.com/random" alt="">
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
components: {
  Carousel,
  Slide
}
};
</script>
