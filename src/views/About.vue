<template>
  <div class="about">
    <DropTitle :img="require('@/assets/About.png')" alt="About Me" />
    <div class="two-columns">
      <Content class="left-col" style="min-width:55%;">
        <h1>Andrew Killmer</h1>
        <p>
          I was born in Seoul and since then I've lived in many different places. My father was an in-demand engineer for IBM, so we traveled a lot.
          He's the guy that
          <a
            href="https://en.wikipedia.org/wiki/HotDog"
            alt="My first HTML editor"
          >got me into HTML</a> when I was around ten years old. Thanks, dad!
        </p>
        <p>
          I went to high school in Northern Virginia, where I started to freelance as a web developer. Many of my clients came through a local
          company called
          <em>Portal Systems</em>. At the time almost all of my projects were
          driven by a LAMP stack (Linux, Apache, MySQL, PHP).
        </p>
        <p>
          After high school I went straight into the work force. I've held a wide variety of jobs since then, too. From construction, to guitar
          instructor, sales, retail, and most recently culinary. This entire time I kept freelancing as a developer. Basically, my
          <em>day jobs</em> were a distraction.
        </p>
        <p>Now, I fully realize that what I've been doing passionately since I was a teenager is what I want to do for a living as an adult.</p>If you don't think I'm too late then please,
        <router-link to="/contact" alt="Contact me">get in touch</router-link>.
      </Content>
      <Content class="right-col side-portrait" accent="white">
        <div style="min-height:500px;"></div>
      </Content>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/media.scss";

.about {
  .side-portrait {
    background-image: url("../assets/about/thats-me.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>

<script>
import Content from "@/components/Content";
import DropTitle from "@/components/DropTitle";

export default {
  name: "About",
  components: {
    Content,
    DropTitle
  }
};
</script>
