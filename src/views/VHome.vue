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
        <h2 class="color-cream" style="font-family: Sitka Heading">About me</h2>
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
      <div class="img-holder mar-sm-l color-cream">
        <h3 style="font-family: Sitka Display; letter-spacing: 0.05em" class="mar-sm-l">
          Aurora Dimni
        </h3>
        <img class="img mar-sm-l" src="@/assets/profile.jpeg" />

        <h4 class="" style="font-family: Sitka Display; letter-spacing: 0.05em">
          Frontend Developer
        </h4>
      </div>
    </div>
    <div class="experience d-flex justify-content-between">
      <div>
        <div class="color-cream"><h2 style="font-family: Sitka Heading">My experience</h2></div>
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
          <li class="" style="font-family: Sitka Heading">
            <h2 class="color-cream">Education <br /></h2>
            <p>
              <b>University of Tirana</b> <br />
              Pursuing Business Informatics at Faculty of economy, blending technology and business
              for a dynamic skill set including Algorithms ,Data structure, SQL , C++, marketing
              ,economics etc.
            </p>
          </li>
          <li class="color-cream" style="font-family: Sitka Heading">Certification</li>
          <ul class="">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </ul>
      </div>
    </div>
    <div class="d-grid color-cream">
      <h3 style="font-family: Sitka Heading">My projects</h3>
      <div class="projects d-flex justify-content-between mar-xl-l mar-xl-r color-cream">
        <router-link to="/vue" class="color-coral-blue">Vue </router-link>
        <router-link to="/react" class="color-coral-blue">React </router-link> <router-view />
      </div>
    </div>

    <div class="d-grid color-cream">
      <br />
      <br />
      <div class="color-cream"><h3 style="font-family: Sitka Heading">Contact me</h3></div>
      <div class="social-media d-flex justify-content-between">
        <a href=""><font-awesome-icon :icon="['fab', 'github']" class="github color-white" /></a>
        <a href=""><font-awesome-icon :icon="['fab', 'google']" class="google color-white" /></a>
        <a href="">
          <font-awesome-icon :icon="['fab', 'linkedin']" class="linkedin color-white"
        /></a>
      </div>
    </div>
    <div class="justify-content-center d-flex mar-sm color-cream">
      <h1 style="font-family: Segoe UI" class="">LETS WORK TOGERTHER</h1>
    </div>
  </div>
</template>

<style lang="scss">
.main {
  font-family: 'Segoe UI';
  overflow-y: scroll;
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  z-index: 3;
  background: rgba($color: #000000, $alpha: 0.1);
  box-shadow: 1px 1px 5px 1px mapget($colors, 'coral-blue');
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  //display: grid;
}
.profileholder {
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
@media screen and (max-width: breakpointValue(sm)) {
  .profileholder {
    flex-direction: column-reverse;
  }
  .experience {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
  .hobbies-container {
    flex-direction: column-reverse;
    display: grid;
    gap: 20px;
  }
}
.hobby-item {
  border-radius: 50%;
}
::-webkit-scrollbar {
  width: 13px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 3px mapget($colors, 'cream');
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: mapget($colors, 'secondary');
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: mapget($colors, 'primary');
}
</style>
