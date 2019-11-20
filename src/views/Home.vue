<template>
  <div class="home">
    <DropTitle :img="require('../assets/Aloha.png')" alt="Aloha, I'm Andy" />
    <Content class="intro" :sequence="0">
      <h1>I'm a full-stack developer from ʻAiea, Hawaiʻi</h1>
      <div class="profile-image">
        <img src="../assets/home/profile-picture.jpg" />
      </div>
      <p>
        <strong>Aloha</strong>, my name's Andy and I like to call myself a
        <span class="strike">full-stack</span> mix-plate developer.
        I started with
        <span class="skill">HTML</span> in 1995 when I was ten and I haven't stopped learning since.
        Some of my skills now include
        <span
          class="skill"
        >Vue.js</span>,
        <span class="skill">React</span>,
        <span class="skill">Golang</span>, and even Kardashian-grade
        <span class="skill">Photoshopping</span>.
      </p>
      <p>
        I actively freelance but I'm now looking for a team to join. I really believe Hawaiʻi
        could greatly benefit from a strong tech scene and I would love to be a part of that.
        Check out which
        <router-link to="/skills">skills</router-link>&nbsp;I offer and some of my
        <router-link to="/work">previous work</router-link>, too.
      </p>
      <p>
        I look forward to getting
        <router-link to="/contact">in touch</router-link>&nbsp;with you. Thanks.
      </p>
    </Content>
    <div class="two-columns">
      <Content class="left-col" :sequence="1" accent="white">
        <h2>
          Riptide, client and server
          <i class="fab fa-react"></i>
        </h2>
        <img src="../assets/home/riptide.jpg" alt="Riptide client built with React" />
        <p>
          Nearly three years ago I created
          <strong>Riptide</strong>, my very first non-trivial project with React. It's a web app that lets you
          remotely manage your torrents. The
          <a
            href="https://github.com/akillmer/riptide-client"
            alt="Riptide Client repo"
          >client</a>
          was developed with React and the
          <a
            href="https://github.com/akillmer/riptide-server"
            alt="Riptide Server repo"
          >server</a> with Go.
        </p>
        <p>
          To learn more check out my
          <router-link to="/work" alt="Work">work and projects</router-link>.
        </p>
      </Content>
      <div class="right-col">
        <Content :sequence="1.5" accent="white">
          <h2>
            My GitHub
            <i class="fab fa-github-alt icon"></i>
          </h2>
          <p>
            Check out my repositories over at
            <a
              href="https://github.com/akillmer"
              alt="github.com/akillmer"
            >my GitHub profile</a>.
            There's an even a
            <a
              href="https://github.com/akillmer/portfolio"
              alt="This website's repo"
            >repository for this website</a>, built with Vue.js and SCSS.
          </p>
        </Content>
        <Content :sequence="2.2">
          <h2>
            Let's talk
            <i class="far fa-envelope"></i>
          </h2>
          <p>
            Could your team use a person like me? Reach me any time at
            <a
              href="mailto:andy@mixplate.io"
            >andy@mixplate.io</a>.
          </p>
        </Content>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/media.scss";

.home {
  .strike {
    text-decoration: line-through;
    opacity: 0.8;
  }

  .skill {
    font-weight: bold;
    opacity: 0.8;
  }

  .profile-image {
    position: relative;

    &:before {
      content: "";
      clip-path: circle(50% at center);
      background-color: rgba(255, 255, 255, 0.5);
      width: 320px;
      height: 320px;
      display: block;
      position: absolute;
      right: -10px;
      top: 10px;
    }

    img {
      clip-path: circle(50% at center);
      width: 300px;
      display: block;
      float: right;
      margin: 1em 0 1em 2em;
    }

    @media #{$windowed-narrow} {
      float: none;
      margin: 1em auto;
    }
  }
}
</style>

<script>
import Content from "@/components/Content";
import DropTitle from "@/components/DropTitle";

export default {
  name: "Home",
  components: {
    Content,
    DropTitle
  }
};
</script>
