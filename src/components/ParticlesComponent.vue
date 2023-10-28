<template>
  <div id="particles"></div>
</template>

<script lang="ts">
export default {
  name: 'ParticlesComponent',
  mounted() {
    this.loadParticles()
  },
  methods: {
    loadParticles() {
      window.particlesJS('particles', {
        particles: {
          number: {
            value: 150
          },
          color: {
            value: '#065267'
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: 2
          }
        }
      })
    }
  }
}
</script>
<style>
#particles {
  z-index: 1;
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
