<style lang="scss">
@import '@/scss/app.scss';
</style>

<script lang="ts">
import ParticlesComponent from './components/ParticlesComponent.vue'
import { RouterView } from 'vue-router'

export default {
  name: 'App',
  components: {
    ParticlesComponent
  }
}
</script>

<template>
  <router-view />
  <ParticlesComponent />
</template>
