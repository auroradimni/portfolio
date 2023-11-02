<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)
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
          💻 Welcome to my portfolio! I'm a passionate and dedicated tech enthusiast, eager to
          leverage the latest innovations for creative solutions. With a diverse skill set in
          various programming languages and a knack for inventive problem-solving, I aim to craft
          user-friendly applications that offer seamless and enriching experiences. <br />🚀 My tech
          journey has equipped me with valuable skills in web development, software engineering, and
          more. I'm dedicated to continuous learning and growth, excited to contribute to projects
          that create a positive impact.<br />
          🌟 Dive into my portfolio to explore more about my work and professional journey!
        </p>
        <p>
          🌟 Innovation: Passionate about creative problem-solving and pushing boundaries in
          tech.<br />
          🤝 Collaboration: Thrive in team environments, fostering open communication and collective
          success. As a seasoned Frontend Developer, I've contributed to diverse projects, ensuring
          seamless collaboration across teams and delivering top-notch user experiences. Let's
          connect via auroradimnid.com or on LinkedIn to discuss collaboration opportunities.
          Looking forward to contributing to your team's success!
        </p>
      </div>
      <div class="img-holder mar-sm-l color-cream">
        <h3 class="name mar-sm-l font-family-sd">Aurora Dimni</h3>
        <img class="img mar-sm-l" src="@/assets/profile.jpeg" />

        <div class="d-flex justify-content-between">
          <h4 class="font-family-sd">Frontend Developer</h4>
        </div>
      </div>
    </div>
    <div class="experience d-flex justify-content-between">
      <div>
        <div class="color-cream font-family-sh d-grid"><h2>My experience</h2></div>
        <ul>
          <div class="d-flex">
            <font-awesome-icon :icon="['fas', 'code']" class="color-coral-blue mar-sm-r" />
            Freelance Vue.js frontend Developer
            <b class="mar-sm-l">Upwork</b>
            <br />
          </div>

          <li>
            <p>
              As a Vue.js Frontend Developer on Upwork, I specialize in creating elegant and
              efficient user interfaces. With a passion for clean, maintainable code and a keen eye
              for design, I build web applications that captivate users and drive engagement.
              Harness the power of Vue.js with me to enhance your digital presence and deliver
              exceptional user experiences.
            </p>
          </li>
          <div class="skills-holder">
            <h3 class="color-cream font-family-sh">Skills</h3>
            <li class="skills">
              HTML5 CSS3 Git GitHub Javascript TypeScript C++ Bootstrap Vue.js MySQL SASS(SCSS)
              Responsive Web development Java Object-Oriented Programming (OOP) React
            </li>
          </div>
        </ul>
      </div>
      <div class="mar-sm-l">
        <ul>
          <div class="font-family-sh">
            <div class="d-flex">
              <h2 class="color-cream">Education <br /></h2>
              <font-awesome-icon
                :icon="['fas', 'school']"
                class="color-coral-blue mar-sm-l mar-lg-t"
              />
            </div>

            <li>
              <b>University of Tirana</b> <br />
              <p>
                Pursuing Business Informatics at Faculty of Economy, blending technology and
                business for a dynamic skill set.
              </p>
            </li>
          </div>

          <li class="color-cream font-family-sh gap-2px">Certification</li>
          <ul class="certification">
            <li>
              <a
                class="link text-dec-none color-cream"
                href="https://www.credly.com/badges/ff762df1-dab3-4882-9ac6-b5757e2aceee/public_url"
              >
                JavaScript Essentials 1 <b>Cisco</b></a
              >
            </li>
            <li>
              <a
                class="link text-dec-none color-cream"
                href="https://verify.mygreatlearning.com/verify/LQFBAGQG"
              >
                JavaScript Projects
                <b>Great Learning</b>
              </a>
            </li>
            <li>
              <a
                class="link text-dec-none color-cream"
                href="https://www.linkedin.com/learning/certificates/499759501b641e94448b235e5c2b2b9544c2482607f06f936180f9b9dd27c841"
              >
                JavaScript Essential Training <b>LinkedIn Learning</b></a
              >
            </li>
            <li>
              <a
                class="link text-dec-none color-cream"
                href="https://www.linkedin.com/learning/certificates/a775b16219f1173621a5563f273721197fb962f25af5f4a67b696f536a8ba334"
              >
                Python Essential Training <b>LinkedIn Learning</b></a
              >
            </li>
          </ul>
        </ul>
      </div>
    </div>
    <div class="d-grid color-cream">
      <h3 class="font-family-sh">My projects</h3>
      <div class="projects d-flex justify-content-between mar-xl-l mar-xl-r color-cream">
        <router-link to="/vue" class="color-coral-blue">Vue </router-link>
        <router-link to="/react" class="color-coral-blue">React </router-link> <router-view />
      </div>
    </div>

    <div class="d-grid color-cream">
      <br />
      <br />
      <div class="color-cream font-family-sh"><h3>Contact me</h3></div>
      <div class="social-media d-flex justify-content-between">
        <a href="https://github.com/auroradimni"
          ><font-awesome-icon :icon="['fab', 'github']" class="social color-white"
        /></a>

        <div>
          <font-awesome-icon :icon="['fas', 'envelope']" class="social color-white" />
          <span class="mar-sm-l"> auroradimnid@gmail.com </span>
        </div>
        <a href="https://www.linkedin.com/in/aurora-dimni-4038ba225/?originalSubdomain=al">
          <font-awesome-icon :icon="['fab', 'linkedin']" class="social color-white"
        /></a>
      </div>
    </div>
    <div class="justify-content-center d-flex mar-sm color-cream">
      <h2 class="font-family-su">LET'S WORK TOGERTHER</h2>
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
}
.profileholder {
  display: flex;
}

img {
  max-width: 150px;
  max-height: 150px;
}
.projects {
  a {
    text-decoration: none;
    &:hover {
      color: mapget($colors, 'secondary') !important;
      transform: scale(1.2);
    }
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
.link {
  :hover {
    color: mapget($colors, 'secondary') !important;
  }
}
.social {
  :hover {
    transform: scale(1.2);
  }
}
</style>
