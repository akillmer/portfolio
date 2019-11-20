<template>
  <div class="home">
    <DropTitle :img="require('../assets/Aloha.png')" alt="Aloha, I'm Andy" />
    <Content title="I'm a full-stack developer from Aiea, Hawaii" :sequence="0">
      <p>
        Aloha, my name's Andy and I prefer calling myself a
        <strong>mix-plate</strong> developer.
        I started with HTML in 1995 when I was ten years old and I never stopped learning since.
        Some of my skills now include Vue.js, React, Golang, and Kardashian-grade Photoshopping.
      </p>
      <p>
        I actively freelance as a developer, but I'm now looking for a team
        to join. I really believe Hawai'i can greatly benefit from a strong tech scene and
        I would love to be a part of that. Check out which
        <router-link to="/skills">skills</router-link>&nbsp;I offer and some of my
        <router-link to="/work">previous work</router-link>.
      </p>
      <p>
        I look forward to getting
        <router-link to="/contact">in touch</router-link>&nbsp;with you.
      </p>
    </Content>
    <Content :sequence="1" accent="white">Hello!</Content>
  </div>
</template>

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
