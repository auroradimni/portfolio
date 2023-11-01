<script lang="ts">
import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)
export default {
  name: 'VHome',
  components: {
    FontAwesomeIcon
  }
}
</script>
<template>
  <div
    class="main justify-content-between pad-xxl-t pad-xxl-b pad-xxl-r pad-xxl-l mar-xxl-l mar-xxl-r mar-xxl-b mar-xxl-t color-white bg-color-black-opac-02"
  >
    <div class="profileholder">
      <div class="about justify-content-between">
        <h3>About me</h3>
        <p>
          Welcome to my portfolio! I am a passionate and dedicated individual with a keen interest
          in leveraging technology to create innovative solutions. With a solid foundation in
          various programming languages and a flair for creative problem-solving, I strive to
          develop user-friendly applications that deliver seamless and enriching experiences. My
          journey in the world of technology has equipped me with valuable skills in web
          development, software engineering, and beyond. I am committed to continuous learning and
          growth, and I am excited to contribute my skills to projects that make a positive impact.
          Explore my portfolio to discover more about my work and professional journey.
        </p>
      </div>
      <div class="img-holder mar-sm-l">
        <img class="img mar-sm-l" src="@/assets/profile.jpg" />
        <h4 class="mar-sm-l">Aurora Dimni</h4>
        <h5 class="mar-sm-l">Frontend Developer</h5>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <div>
        <h3>My experience</h3>
        <ul>
          <li>Freelance Vue.js frontend Developer <b>Upwork</b></li>
          <br />
          <p>
            As a Vue.js Frontend Developer on Upwork, I specialize in creating elegant and efficient
            user interfaces. With a passion for clean, maintainable code and a keen eye for design,
            I build web applications that captivate users and drive engagement. Harness the power of
            Vue.js with me to enhance your digital presence and deliver exceptional user
            experiences.
          </p>
        </ul>
      </div>
      <div class="mar-sm-l">
        <ul>
          <li>
            Education <br />
            <p>
              <b>University of Tirana</b> <br />
              Pursuing Business Informatics at Faculty of economy, blending technology and business
              for a dynamic skill set including Algorithms ,Data structure, SQL , C++, marketing
              ,economics etc.
            </p>
          </li>
          <li>Certification</li>
          <ul class="">
            <li><a></a></li>
            <li><a></a></li>
            <li><a></a></li>
            <li><a></a></li>
            <li><a></a></li>
          </ul>
        </ul>
      </div>
    </div>
    <div class="d-grid">
      <h3>My projects</h3>
      <div class="projects d-flex justify-content-between mar-xl-l mar-xl-r color-white">
        <router-link to="/vue" class="color-coral-blue">Vue </router-link>
        <router-link to="/react" class="color-coral-blue">React </router-link> <router-view />
      </div>
    </div>

    <div class="d-grid">
      <br />
      <br />
      <h3>Contact me</h3>
      <div class="d-flex justify-content-between">
        <font-awesome-icon :icon="['fab', 'github']" />
        <font-awesome-icon :icon="['fab', 'google']" />
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main {
  overflow-y: scroll;
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  z-index: 3;
  // background: rgba($color: #000000, $alpha: 0.01);
  box-shadow: 1px 1px 5px 1px mapget($colors, 'coral-blue');
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  //display: grid;
}
.profileholder {
  //overflow: hidden;
  display: flex;
}

img {
  max-width: 150px;
  max-height: 150px;
}
.projects {
  &:hover {
    color: mapget($colors, 'hover');
  }
}
</style>
