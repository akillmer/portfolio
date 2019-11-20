<template>
  <div class="skills">
    <DropTitle :img="require('../assets/Skills.png')" alt="My Skills" />
    <Content title="According to Starbursts, I'm a juicy contradiction.">
      <p>Lorem Ipsum</p>
    </Content>
  </div>
</template>

<script>
import Content from "@/components/Content";
import DropTitle from "@/components/DropTitle";

export default {
  name: "Skills",
  components: {
    Content,
    DropTitle
  }
};
</script>
