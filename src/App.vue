<script>
import HeaderVue from './components/Header.vue';
import MainFirstVue from './components/MainFirst.vue';
import MainSecondVue from './components/MainSecond.vue';
import MainThirdVue from './components/MainThird.vue';
import FooterVue from './components/Footer.vue';
import CarouselVue from './components/Carousel.vue';

export default {
  name: "App",
  components: {
    HeaderVue,
    MainFirstVue,
    MainSecondVue,
    MainThirdVue,
    CarouselVue,
    FooterVue
  }
}
</script>

<template>
  <HeaderVue />
  <main>
    <MainFirstVue />
    <MainSecondVue />
    <MainThirdVue />
    <CarouselVue />
  </main>
  <FooterVue />
</template>


<style lang="scss">
@use './styles/generals.scss' as*;
@use './styles/partials/mixins' as*;
@use './styles/partials/variables' as*
</style>
