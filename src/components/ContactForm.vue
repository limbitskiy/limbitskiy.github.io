<template>
  <div class="contact-form">
    <p>...drop me a line</p>
    <form>
      <TheInput v-model="name" placeholder="name" />
      <TheTextarea v-model="msg" placeholder="message" />
      <TheBtn
        :id="this.btnId"
        :onclick="this.onclick"
        color="var(--grey-text)"
        @click="
          sendData();
          afterSendData();
        "
        >DROP</TheBtn
      >
    </form>
    <p>
      <span>*</span>All the fields are optional, as is the message itself ;)
    </p>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  props: ["btnId", "onclick"],
  data() {
    return {
      name: "",
      msg: "",
    };
  },
  methods: {
    sendData() {
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("msg", this.msg);

      fetch("mail.php", {
        method: "post",
        body: formData,
      })
        .then(function (response) {
          return response.text();
        })
        .then(function (text) {
          console.log(text);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    afterSendData() {
      alert("Thank you for your message ;)");
      this.name = "";
      this.msg = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-form {
  margin-block: 2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    * {
      border-radius: var(--border-radius);
      height: 45px;
    }

    textarea,
    input {
      border: none;
      font-size: var(--font-small);
      padding: 1rem;

      &:focus {
        outline-color: var(--grey-text);
      }
    }

    textarea {
      height: 100px;
    }
  }

  p {
    color: var(--grey-text);
    font-size: var(--font-small);
    line-height: 18px;
    margin-block: 0.5rem;

    span {
      font-size: var(--font-big);
    }
  }
}
</style>
