<template>
  <div class="about">
    <DropTitle :img="require('../assets/About.png')" alt="About Me" />
    <Content title="According to Starbursts, I'm a juicy contradiction.">
      <p>Lorem Ipsum</p>
    </Content>
  </div>
</template>

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
