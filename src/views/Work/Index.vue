<template>
  <div class="work">
    <DropTitle :img="require('@/assets/Work.png')" alt="Past Work" />
    <div class="two-columns">
      <div class="left-col" style="min-width:50%;">
        <Content>
          <h1>Go Hawaii Tours</h1>
          <p class="skills-used">
            <span>Nuxt.js</span>
            <span>SCSS</span>
            <span>Photoshop</span>
            <span>XD</span>
            <span>Google Cloud</span>
          </p>
          <p>
            A tour company based out of Waikiki. I've provided graphic design,
            web development, and created marketing campaigns for them since
            September 2019.
          </p>
          <p class="see-more">
            <router-link to="/work/gohawaiitours">
              See more
              <i class="fas fa-arrow-right"></i>
            </router-link>
          </p>
        </Content>
        <Content>
          <h1>Riptide</h1>
          <p class="skills-used">
            <span>React</span>
            <span>Redux</span>
            <span>Go</span>
            <span>BoltDB</span>
          </p>
          <p>
            With this app, along with the Riptide server, you can have full
            control over your torrents on your local network.
          </p>
          <p>
            <strong>Client</strong>
            <br />
            <a href="https://github.com/akillmer/riptide-client"
              >github.com/akillmer/riptide-client</a
            >
            <br />
            <strong>Server</strong>
            <br />
            <a href="https://github.com/akillmer/riptide-server"
              >github.com/akillmer/riptide-server</a
            >
          </p>
        </Content>
      </div>
      <div class="right-col">
        <Content>
          <h1>Mixplate.io</h1>
          <p class="skills-used">
            <span>Vue.js</span>
            <span>SCSS</span>
            <span>Go</span>
            <span>Google Cloud</span>
          </p>
          <p>
            This website was created using Vue.js with SCSS. The
            <router-link to="/contact">contact</router-link>&nbsp; form uses a
            Google Cloud function, written in Go, to email all posted messages
            to me directly.
          </p>
          <p>
            <strong>Website</strong>
            <br />
            <a href="https://github.com/akillmer/portfolio/"
              >github.com/akillmer/portfolio</a
            >
            <br />
            <strong>Cloudmail</strong>
            <br />
            <a href="https://github.com/akillmer/cloudmail/"
              >github.com/akillmer/cloudmail</a
            >
          </p>
        </Content>
        <Content>
          <h1>Handy 3D Printing</h1>
          <p class="skills-used">
            <span>WordPress</span>
            <span>CSS</span>
            <span>SEO</span>
          </p>
          <p>
            I'm really passionate about 3D printing, so I started a blog all
            about it.
            <a href="https://www.handy3dprinting.com">Handy 3D Printing</a> is
            an experiment on hacking at my own WordPress blog with a focus on
            SEO.
          </p>
        </Content>
      </div>
    </div>
    <Content accent="white">
      <h2>GitHub</h2>
      <p>
        Check out my pinned repositories and more over at
        <a href="https://github.com/akillmer">my GitHub profile</a>.
      </p>
    </Content>
  </div>
</template>

<style lang="scss">
.work {
  .see-more {
    display: block;
    font-size: 1.5em;
    margin-bottom: 2em;

    a {
      display: block;
      float: right;
      font-weight: bold;
      border: none;
    }

    i {
      text-shadow: inherit;
      margin-left: 0.25em;
    }
  }
  .skills-used {
    span {
      font-size: 0.8em;
      display: inline-block;
      color: rgba(0, 0, 0, 0.5);
      background-color: rgba(255, 255, 255, 0.65);
      margin-right: 0.5em;
      margin-bottom: 0.5em;
      padding: 0 0.5em 0 0.5em;
      border-radius: 4px;
      font-weight: bold;
    }
  }
}
</style>

<script>
import Content from '@/components/Content'
import DropTitle from '@/components/DropTitle'

export default {
  name: 'Work',
  components: {
    Content,
    DropTitle
  },
  mounted() {
    document.title = 'Work - Mixplate.io'
    this.$ga.page('/work')
  }
}
</script>
