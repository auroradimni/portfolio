<style lang="scss">
@import '@/scss/app.scss';
</style>

<script lang="ts">
import ParticlesComponent from './components/ParticlesComponent.vue'
import VHome from './views/VHome.vue'

export default {
  name: 'App',
  components: {
    ParticlesComponent,
    VHome
  }
}
</script>

<template>
  <router-view />
  <ParticlesComponent />
  <VHome />
</template>
