<template>
  <div class="work">
    <DropTitle :img="require('../assets/Work.png')" alt="Past Work" />
    <Content title="According to Starbursts, I'm a juicy contradiction.">
      <p>Lorem Ipsum</p>
    </Content>
  </div>
</template>

<script>
import Content from "@/components/Content";
import DropTitle from "@/components/DropTitle";

export default {
  name: "Work",
  components: {
    Content,
    DropTitle
  }
};
</script>
