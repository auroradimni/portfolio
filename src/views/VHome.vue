<script lang="ts">
export default {
  name: 'VHome'
}
</script>
<template w-100 h-100>
  <div
    class="main justify-content-between pad-xxl-t pad-xxl-b pad-xxl-r pad-xxl-l mar-xxl-l mar-xxl-r mar-xxl-b mar-xxl-t d-flex color-white"
  >
    <div class="profile">
      <img />
      <p>about</p>
      <p>education</p>
      <p>certification</p>
    </div>
    <div class="experience">work</div>
    <div class="projects">vue,react</div>
  </div>
</template>

<style lang="scss">
.main {
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  background: rgba($color: #000000, $alpha: 0.1);
  box-shadow: 1px 1px 5px 1px mapget($colors, 'coral-blue');
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
}
</style>
