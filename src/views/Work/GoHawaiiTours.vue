<template>
  <div class="work">
    <GoBackTitle url="/work">See More Work</GoBackTitle>
    <Content :sequence="0">
      <h1>Go Hawaii Tours</h1>
      <p>
        Starting in September 2019 I've been working with
        <a
          href="https://www.gohawaiitours.com"
          alt="Go Hawaii Tours"
        >Go Hawaii Tours</a>, creating a wide variety of digital assets. I also
        kickstarted their mobile advertising campaigns with Google Ads. Some of the work below ranges from
        new printed materials like brochures, to a mobile-first landing page, as well as a complete
        redesign of their WordPress website.
      </p>
    </Content>
    <div class="two-columns">
      <Content class="left-col desc" style="min-width:55%;" accent="white" :sequence="0.5">
        <h2>Mobile First Marketing</h2>
        <p>
          The first phase of Go Hawaii Tours' advertising campaign was to focus on mobile users that are on-island.
          While their current website is mobile ready it was performing poorly, with a bounce rate of over 90%.
        </p>
        <p>
          I quickly designed a new mobile landing page with
          <strong>Adobe XD</strong> and implemented the design with
          <strong>Nuxt.js</strong>. The project is generated into static files and then
          served directly from a Google Cloud storage bucket.
        </p>
        <p>
          The average bounce rate for this landing page is 55%. It also generates the highest average order values, beating
          all desktop traffic by over 20%. I also coded specific Analytic events to better track user
          interaction while on this page.
        </p>
        <p>
          You can check the
          <a
            href="https://www2.gohawaiitours.com/landing/hidden-gems"
            alt="Hidden Gems Mobile Landing"
          >mobile landing page here</a>. But note that it was only designed for mobile, so please
          resize your window accordingly.
        </p>
      </Content>
      <Content class="right-col" accent="white" :sequence="0.5">
        <h2>Mobile Landing Page</h2>
        <ScrollView :img="require('@/assets/work/ght/mobile-landing.jpg')" />
      </Content>
    </div>
    <Content :sequence="1">
      <h1>Redesigned WordPress Site</h1>
      <p>
        After seeing how well my redesigned mobile landing page performed I began to redesign their desktop site.
        The mockups below were created in
        <strong>Adobe Photoshop</strong> and will be implemented as a WordPress theme.
      </p>
    </Content>
    <div class="two-columns">
      <Content class="left-col" accent="white" style="min-width:42%;" :sequence="1.5">
        <h2>Home Page</h2>
        <ScrollView :img="require('@/assets/work/ght/redesign-home.jpg')" />
      </Content>
      <Content class="right-col" accent="white" style="min-width:42%;" :sequence="1.5">
        <h2>Tour Details</h2>
        <ScrollView :img="require('@/assets/work/ght/redesign-tour.jpg')" />
      </Content>
    </div>

    <Content :sequence="2">
      <h1>Marketing Materials</h1>
      <p>
        Brochures and rack cards are very important to reach many tourists within Waikiki. Having a strong
        and eye-catching design is critical to cut through all of the noise. I designed their brochure (left) and
        rack card (right) with
        <strong>Adobe Photoshop</strong>. The brochure is in current circulation.
      </p>
    </Content>

    <div class="two-columns">
      <Content class="left-col" accent="white" :sequence="2.5">
        <h2>Brochure</h2>
        <img src="@/assets/work/ght/brochure-front.jpg" />
        <img src="@/assets/work/ght/brochure-back.jpg" />
      </Content>
      <div class="right-col">
        <Content accent="white" style="min-width:40%;" :sequence="2.5">
          <h2>Rack Card</h2>
          <img src="@/assets/work/ght/rack-card.jpg" />
        </Content>
        <Content :sequence="3">
          <h2>All original copy, too</h2>
          <p>
            I wrote original copy for the brochures, web sites, and marketing campaigns.
            On both Google's Search and Display networks the copy proved effective, too, with 6%+ on Search and 0.8%+ on Display.
          </p>
        </Content>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/media.scss";

.work {
  .desc {
    min-width: 50%;
    margin-bottom: 0;
  }
}
</style>

<script>
import Content from "@/components/Content";
import ScrollView from "@/components/ScrollView";
import GoBackTitle from "@/components/GoBackTitle";

export default {
  name: "GoHawaiiTours",
  components: {
    Content,
    ScrollView,
    GoBackTitle
  }
};
</script>
