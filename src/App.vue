<script>
import HeaderVue from './components/Header.vue';
import MainFirstVue from './components/MainFirst.vue';
import MainSecondVue from './components/MainSecond.vue';
import MainThirdVue from './components/MainThird.vue';

export default {
  name: "App",
  components: {
    HeaderVue,
    MainFirstVue,
    MainSecondVue,
    MainThirdVue
  }
}
</script>

<template>
  <HeaderVue />
  <main>
    <MainFirstVue />
    <MainSecondVue />
    <MainThirdVue />
  </main>
</template>


<style lang="scss">
@use './styles/generals.scss' as*;
@use './styles/partials/mixins' as*;
@use './styles/partials/variables' as*
</style>
