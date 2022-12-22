<script>
import HeaderVue from './components/Header.vue';
import MainFirstVue from './components/MainFirst.vue';

export default {
  name: "App",
  components: {
    HeaderVue,
    MainFirstVue
  }
}
</script>

<template>
  <HeaderVue />
  <main>
    <MainFirstVue />
  </main>
</template>


<style lang="scss">
@use './styles/generals.scss' as*;
@use './styles/partials/mixins' as*;
@use './styles/partials/variables' as*
</style>
