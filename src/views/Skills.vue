<template>
  <div class="skills">
    <DropTitle :img="require('../assets/Skills.png')" alt="My Skills" />
    <div class="two-columns">
      <div class="left-col" style="min-width:50%;">
        <Content :sequence="0" accent="white">
          <h2>
            Front End
            <i class="fas fa-code"></i>
          </h2>
          <ul>
            <li>
              <i class="fab fa-html5" style="color:#F16429;"></i>HTML / CSS
              <span style="background-color:#F16429;">SINCE 1995</span>
            </li>
            <li>
              <i class="fab fa-node-js" style="color:#81C91E;"></i>JavaScript / Node.js
              <span style="background-color:#81C91E;">6 Years</span>
            </li>
            <li>
              <i class="fab fa-react" style="color:#16AABF;"></i>React
              <span style="background-color:#16AABF;">3 years</span>
            </li>
            <li>
              <i class="fab fa-vuejs" style="color:#41B883;"></i>Vue.js / Nuxt.js
              <span style="background-color:#41B883;">2 years</span>
            </li>
            <li>
              <i class="fab fa-sass" style="color:#C76394;"></i>Sass / SCSS
              <span style="background-color:#C76394;">2 Years</span>
            </li>
          </ul>
          <Note>
            I pretty much stopped working with React since I started up with Vue.js, and this year
            I started doing professional work with Nuxt.js.
          </Note>
        </Content>
        <Content :sequence="1" accent="white">
          <h2>
            Back End
            <i class="fas fa-terminal"></i>
          </h2>
          <ul>
            <li>
              <i class="fab fa-linux" style="color:#4D4D4D;"></i> Linux (Debian)
              <span style="background-color:#4D4D4D;">4 years</span>
            </li>
            <li>
              <i class="fab fa-git-alt" style="color:#F54D27;"></i> Git SCM
              <span style="background-color:#F54D27;">4 years</span>
            </li>
            <li>
              <i class="fab fa-google" style="color:#F8B801;"></i> Google Cloud
              <span style="background-color:#F8B801;">3 years</span>
            </li>
            <li>
              <img src="../assets/skills/go.png" /> Go
              <span style="background-color:#5AC9E3;">3 years</span>
            </li>
          </ul>
          <Note>
            I'm comfortable with Node.js, PHP, and some Python for back end work, but Go has been my
            <em>go</em> to lately.
          </Note>
        </Content>
      </div>
      <div class="right-col" style="min-width:50%;">
        <Content :sequence="0.5" accent="white">
          <h2>
            Design
            <i class="fas fa-layer-group"></i>
          </h2>
          <ul>
            <li>
              <svg
                version="1.1"
                id="svg-ps"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 485 485"
                style="fill:#05C8FF;"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M321.27,328.414c-16.269,0-37.082-7.252-47.173-13.307l-9.743,39.196c13.307,7.252,33.866,12.299,56.916,12.299
		c50.361,0,76.376-24.124,76.376-57.012c-0.379-25.891-14.412-42.887-47.932-54.333c-21.537-7.631-28.318-11.952-28.318-20.213
		c0-8.988,7.506-14.412,20.813-14.412c15.136,0,30.177,5.803,38.185,10.122l9.714-37.839c-10.817-5.424-29.168-10.091-49.76-10.091
		c-43.58,0-71.676,24.88-71.676,57.644c-0.379,20.938,13.655,40.774,50.139,52.976c20.432,6.906,25.856,11.194,25.856,20.182
		C344.668,322.644,337.762,328.414,321.27,328.414z"
                  />
                  <path
                    d="M141.687,276.194c5.045,0.726,11.573,0.978,18.698,0.978c32.417,0,60.23-7.883,78.834-25.479
		c14.539-13.686,22.42-33.899,22.42-57.643c0-23.777-10.343-43.99-25.983-56.194c-16.146-13.055-40.268-19.456-74.167-19.456
		c-33.489,0-57.264,2.21-74.136,5.046v239.593h54.333V276.194z M141.782,162.012c3.847-1.105,11.479-2.209,22.547-2.209
		c27.465,0,42.885,13.276,43.01,35.572c0,24.911-18.132,39.669-47.3,39.669c-7.884,0-13.559-0.346-18.257-1.357V162.012z"
                  />
                  <path d="M0,0v485h485V0H0z M455,455H30V30h425V455z" />
                </g>
              </svg>
              Photoshop
              <span style="background-color:#05C8FF;">Since 2002</span>
            </li>
            <li>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 485 485"
                style="fill:#FF7C01;"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M168.404,305.486h68.192l18.428,61.115h57.887l-73.885-238.312h-70.621L95.455,366.601h55.875L168.404,305.486z
		 M201.199,168.546h0.693c3.505,14.264,26.966,96.545,26.966,96.545h-52.75C176.108,265.091,197.658,182.81,201.199,168.546z"
                  />
                  <rect x="333.95" y="193.775" width="53.824" height="172.826" />
                  <path
                    d="M360.533,172.503c17.769,0,29.012-12.078,29.012-26.86c-0.415-15.583-11.243-27.244-28.595-27.244
		c-17.352,0-28.735,11.66-28.353,27.244C332.215,160.425,343.598,172.503,360.533,172.503z"
                  />
                  <path d="M0,0v485h485V0H0z M455,455H30V30h425V455z" />
                </g>
              </svg> Illustrator
              <span style="background-color:#FF7C01;">2 years</span>
            </li>
            <li>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 485 485"
                style="enable-background:new 0 0 485 485; fill:#f829bd;"
                xml:space="preserve"
              >
                <g>
                  <path d="M0,0v485h485V0H0z M455,455H30V30h425V455z" />
                  <g>
                    <path
                      class="xd-stroke"
                      d="M258.2,126.7l-57.6,106.1l61.8,112.9c1.2,2,0.8,3.3-1.2,3.7h-38.7c-2.4,0-4-0.9-4.8-2.7L173.6,260h-0.3
			l-43.2,86.7c-0.8,1.8-2.1,2.7-3.9,2.7H89.3c-0.6,0-1.1-0.2-1.4-0.5c-0.3-0.3-0.5-0.8-0.5-1.4c0-0.6,0.2-1.1,0.6-1.5l61.2-110.1
			L90.5,125.7c-0.4-0.7-0.4-1.3-0.1-1.9c0.3-0.6,0.8-0.8,1.6-0.8h38.4c2,0,3.3,0.8,3.9,2.4l42,85.7h0.3l41.4-85.7
			c0.8-1.6,2.1-2.4,3.9-2.4h34.8C258.9,123,259.4,124.3,258.2,126.7z"
                    />
                    <path
                      class="xd-stroke"
                      d="M335.3,352.8c-23.2,0-41.9-7.2-56-21.6c-14.1-14.4-21.2-35.5-21.2-63.4c0-25.2,7.5-45.9,22.7-62.4
			c15.1-16.4,35.3-24.6,60.8-24.6c7,0,12.6,0.7,16.8,2v-76.1c0-1.6,0.7-2.4,2.1-2.4h34.2c1.2,0,1.8,0.7,1.8,2v205
			c0,3.9,0.3,11.6,0.9,23.1c0.2,1.6-0.4,2.6-1.8,3.1C377,347.7,356.9,352.8,335.3,352.8z M358.4,317.4v-103
			c-4.4-2.5-10.2-3.7-17.4-3.7c-13.2,0-23.8,4.8-31.8,14.4c-8,9.6-12,23.3-12,41c0,18.6,4,32.4,12,41.5c8,9.1,18.1,13.6,30.3,13.6
			C347.7,321.2,354,319.9,358.4,317.4z"
                    />
                  </g>
                </g>
              </svg>
              Xd
              <span style="background-color:#f829bd;">1 year</span>
            </li>
            <li>
              <i class="fab fa-sketch" style="color:#F6AE00;"></i> Sketch
              <span style="background-color:#F6AE00;">1 year</span>
            </li>
          </ul>
          <Note>
            I want to get better at Xd or Sketch, especially for when it's time to collaborate with others.
            But Photoshop has always been my main tool for designing.
          </Note>
        </Content>
        <Content :sequence="1.5">
          <h2>
            The most important skill
            <i class="fab fa-stack-overflow"></i>
          </h2>
          <p>
            Perhaps my strongest skill is finding answers quickly. It's impossible to commit everything to memory
            so I often rely on Google and the fine users at Stack Overflow to keep the ball rolling. I never shy from
            learning something new or from finding a better way to do things.
          </p>
        </Content>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/media.scss";

/* I created the Xd icon, it needed to be thicker to match the others */
.xd-stroke {
  stroke: #f829bd;
  stroke-width: 10px;
  stroke-miterlimit: 10;
}

.skills {
  span {
    display: block;
    font-size: 0.6em;
    float: right;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fafafa;
    opacity: 0.8;
    padding: 2px 14px 0 14px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

    @media screen and (max-width: 650px) {
      display: none;
    }
  }

  ul {
    padding-left: 1em;

    li {
      list-style: none;
      font-size: 1em;
      margin-bottom: 1em;
      margin-left: -1.5em;

      // icons via font awesome
      i {
        text-align: center;
        font-size: 2.5em;
        width: 120px;
        vertical-align: middle;
      }

      // icons via inline svg
      svg {
        max-width: 2.5em;
        padding-left: 2.1em;
        margin-right: 2.2em;
        vertical-align: bottom;
      }

      // the go icon, png
      img {
        max-width: 4em;
        padding-left: 1em;
        padding-right: 1.8em;
        margin-bottom: -0.5em;
        margin-top: -0.5em;
      }

      @media #{$portrait} {
        font-size: 0.9em;
      }
    }
  }
}
</style>

<script>
import Content from "@/components/Content";
import DropTitle from "@/components/DropTitle";
import Note from "@/components/Note";

export default {
  name: "Skills",
  components: {
    Content,
    DropTitle,
    Note
  }
};
</script>
