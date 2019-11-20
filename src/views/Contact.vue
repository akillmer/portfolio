<template>
  <div class="contact">
    <DropTitle :img="require('../assets/Contact.png')" alt="Contact Me" />
    <Content title="According to Starbursts, I'm a juicy contradiction.">
      <p>Lorem Ipsum</p>
    </Content>
  </div>
</template>

<script>
import Content from "@/components/Content";
import DropTitle from "@/components/DropTitle";

export default {
  name: "Contact",
  components: {
    Content,
    DropTitle
  }
};
</script>
