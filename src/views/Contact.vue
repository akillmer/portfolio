<template>
  <div class="contact">
    <DropTitle :img="require('../assets/Contact.png')" alt="Contact Me" />
    <div class="two-columns">
      <div class="left-col">
        <Content>
          <h1>I'm just an email away</h1>
          <p>
            You can always contact me directly at
            <a
              href="mailto:andy@mixplate.io"
              alt="andy@mixplate.io"
            >andy@mixplate.io</a>, but I'd prefer if you used my handy dandy contact form. Because, you know, reasons.
          </p>
        </Content>
        <Content accent="white">
          <h2>
            Mail via Cloud Function
            <i class="fas fa-cloud"></i>
          </h2>
          <p>
            Check out my Google Cloud Function that handles these messages over at
            <a
              href="https://github.com/akillmer/cloudmail"
              alt="cloudmail repo"
            >github.com/akillmer/cloudmail</a>!
          </p>
        </Content>
      </div>
      <Content class="right-col" accent="white">
        <h2>
          Send a Message
          <i class="fas fa-feather-alt"></i>
        </h2>

        <p :class="{ locked: success }">
          <label for="from-name">
            <i v-if="validName" class="fas fa-signature"></i>
            <i v-else class="fas fa-exclamation-circle red-icon"></i>
            <span v-if="!validName">Please provide your name</span>
            <input
              id="from-name"
              v-model="fromName"
              :disabled="isSending || success"
              type="text"
              placeholder="Your Name"
              maxlength="64"
            />
          </label>
          <label for="from-email">
            <i v-if="validEmail" class="fas fa-at"></i>
            <i v-else class="fas fa-exclamation-circle red-icon"></i>
            <span v-if="!validEmail">Please provide a valid email address</span>
            <input
              id="from-email"
              v-model="replyTo"
              :disabled="isSending || success"
              type="text"
              placeholder="Your Email"
              maxlength="64"
            />
          </label>
          <textarea
            v-model="message"
            :class="{'missing-message': !validMessage}"
            :disabled="isSending || success"
            :placeholder="messagePlaceholder"
            maxlength="500"
          />
          <button
            v-if="validRecaptcha && !hasError && !success"
            @click="sendMessage"
            :disabled="!canSend"
          >Send Message</button>
          <vue-recaptcha
            v-if="!success"
            :class="{ 'recaptcha': true, 'hide-recaptcha': validRecaptcha || isSending || hasError }"
            :sitekey="sitekey"
            ref="recaptcha"
            @verify="onVerify"
            @expired="onExpired"
          />
          <i v-if="isSending && !hasError" class="fas fa-cloud-upload-alt sending"></i>
        </p>
        <p v-if="success" class="thanks">Thanks for your message! I'll get back to you ASAP.</p>
        <p v-else-if="hasError" class="error">
          Uh oh, please
          <a style="cursor:pointer;" @click="tryAgain" alt="try again">try again</a> or email me at
          <a href="mailto:andy@mixplate.io" alt="andy@mixplate.io">andy@mixplate.io</a>.
          <span>
            <i class="fas fa-exclamation-circle"></i>
            {{ errorMessage }}
          </span>
        </p>
      </Content>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/media.scss";

.contact {
  .locked {
    opacity: 0.5;
  }

  input[type="text"] {
    display: inline-block;
    width: 100%;
    font-size: 1em;
    box-sizing: border-box;
    background-color: #fafafa;
    margin-bottom: 0.5em;
    padding: 1em;
    border: none;
    border-radius: 4px;

    &::placeholder {
      color: #ccc;
    }
  }

  label {
    position: relative;

    i {
      display: block;
      position: absolute;
      right: 0.5em;
      font-size: 1.5em;
      color: #333;
      padding-top: 0.5em;
      opacity: 0.2;
    }

    span {
      display: block;
      position: absolute;
      font-size: 0.6em;
      text-transform: uppercase;
      margin-left: 1.8em;
      color: red;
      margin-top: 2.7em;
      font-weight: bold;
      letter-spacing: 1px;
    }

    .red-icon {
      color: red;
      opacity: 1;
    }
  }

  textarea {
    font-family: "Work Sans", sans-serif;
    position: relative;
    font-size: 1em;
    display: inline-block;
    width: 100%;
    height: 10em;
    border: solid 1px #e3e3e3;
    padding: 1em;
    box-sizing: border-box;
    margin-bottom: 1em;
    border-radius: 4px;
    resize: none;

    &::placeholder {
      color: #ccc;
    }
  }

  button {
    font-size: 1em;
    padding: 1em;
    border-radius: 4px;
    border: none;
    background-color: #d9e8f5;
    box-shadow: 2px 2px 1px #91bed4;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      color: #777;
      cursor: default;
    }
  }

  i.sending {
    font-size: 2.5em;
    vertical-align: middle;
    margin-left: 0.5em;
    color: #333;
    opacity: 0.25;

    animation: bounce 1s linear infinite;
    @keyframes bounce {
      33% {
        transform: translateY(4px);
      }
      66% {
        transform: translateY(-4px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  .thanks {
    font-weight: bold;
  }

  .recaptcha {
    @media #{$portrait} {
      // this doesn't actually change the width of the recaptcha,
      // but it lets the preceeding form elements stay within the margins
      width: 100px;
    }
  }

  .hide-recaptcha {
    display: none;
  }

  .missing-message {
    border-color: red;
  }

  .error {
    margin-top: -1em;

    span {
      color: red;
      display: block;
      font-size: 0.7em;
      padding: 0 1em 0 1em;
      border-radius: 2px;
      background-color: rgba(255, 0, 0, 0.1);
    }
  }
}
</style>

<script>
import Content from "@/components/Content";
import DropTitle from "@/components/DropTitle";
import VueRecaptcha from "vue-recaptcha";
import axios from "axios";

export default {
  name: "Contact",
  components: {
    Content,
    DropTitle,
    VueRecaptcha
  },
  data() {
    return {
      sitekey: "6Lef1sMUAAAAAHxAJ7M_chloXQNSR3h-O43WMa_H",
      recaptchaResp: undefined,
      errorMessage: undefined,
      success: false,
      isSending: false,
      fromName: "",
      replyTo: "",
      message: ""
    };
  },
  computed: {
    // until the recaptcha is valid all the fields are validated as true, so their default icons
    // stay the same. after the user confirms they're not a robot is when the fields are validated,
    // and will update the UI if there's any errors.
    validName() {
      return !this.validRecaptcha || this.fromName.trim().length > 0;
    },
    validEmail() {
      return !this.validRecaptcha || this.validateEmail(this.replyTo);
    },
    validMessage() {
      return !this.validRecaptcha || this.message.trim().length > 0;
    },
    validRecaptcha() {
      return this.recaptchaResp !== undefined;
    },
    messagePlaceholder() {
      return this.validRecaptcha ? "What's on your mind?" : "Hello, there...";
    },
    canSend() {
      return (
        !this.isSending &&
        this.validRecaptcha &&
        this.validName &&
        this.validEmail &&
        this.validMessage
      );
    },
    hasError() {
      return this.errorMessage !== undefined;
    }
  },
  methods: {
    onVerify(resp) {
      this.recaptchaResp = resp;
    },
    onExpired() {
      this.recaptchaResp = undefined;
    },
    sendMessage() {
      this.isSending = true;
      axios
        .post("https://us-central1-mixplate.cloudfunctions.net/cloudmail", {
          recaptcha: this.recaptchaResp,
          name: this.fromName,
          replyTo: this.replyTo,
          message: this.message
        })
        .then(data => {
          this.success = data.status === 200;
          this.isSending = false;
        })
        .catch(err => {
          this.errorMessage = err;
          console.error(err);
        });
    },
    validateEmail(email) {
      // eslint-disable-next-line no-useless-escape
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    tryAgain() {
      this.recaptchaResp = undefined;
      this.isSending = false;
      this.errorMessage = undefined;
      this.success = false;
    }
  }
};
</script>
