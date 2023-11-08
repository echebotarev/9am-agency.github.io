<script setup lang="ts">
import storage from "~/composables/useStorage";
import Button from "~/components/common/Button.vue";
const { isMobile } = useDevice();

const lang = await storage.getItem("lang");
const content = await queryContent(`/content-${lang}`).findOne();

const form = ref<HTMLElement>();
const name = ref<HTMLElement>();
const phone = ref<HTMLElement>();
const message = ref<HTMLElement>();

const sendMail = () => {
  if (name.value?.value && phone.value?.value && message.value) {
    const data = {
      name: name.value.value,
      phone: phone.value.value,
      message: message.value?.value,
    };

    fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          form.value?.reset();
          alert(content.content.sixthScreen.messageSent);
        } else {
          alert(content.content.sixthScreen.failedHappened);
        }
      });
  } else {
    alert(content.content.sixthScreen.fillTheGaps);
  }
};
</script>

<template>
  <div>
    <div class="image pt-[30px] pb-[44px]">
      <h1
        id="contacts"
        :class="`font-bold text-center ${
          isMobile ? 'text-[40px] ' : 'text-[64px] mb-[30px]'
        }`"
      >
        {{ content.content.sixthScreen.title }}
      </h1>
    </div>

    <div class="w-full bg-[#F9F9F9] py-[44px]">
      <form
        id="form"
        ref="form"
        :class="`form flex flex-col mx-auto ${
          isMobile ? 'w-[95%]' : 'w-[50%]'
        }`"
      >
        <span class="text-center font-semibold mb-3">
          {{ content.content.sixthScreen.description }}
        </span>

        <input
          id="name"
          name="name"
          ref="name"
          type="text"
          class="form-input bg-[#F9F9F9] border-b border-[#505050] focus:border-transparent focus:ring-0 text-sm placeholder-[#505050] mb-2"
          :placeholder="content.content.sixthScreen.placeholder1"
        />
        <input
          id="phone"
          name="phone"
          ref="phone"
          type="text"
          class="form-input bg-[#F9F9F9] border-b border-[#505050] focus:border-transparent focus:ring-0 text-sm placeholder-[#505050] mb-2"
          :placeholder="content.content.sixthScreen.placeholder2"
        />
        <label for="message" class="text-sm text-[#505050] mt-3 pl-3">{{
          content.content.sixthScreen.label
        }}</label>
        <textarea
          id="message"
          name="message"
          ref="message"
          class="textarea border border-[#505050] focus:border-transparent focus:ring-0 rounded text-sm h-20"
        ></textarea>

        <Button class="mt-[40px] mx-auto" @click="sendMail">{{
          content.content.sixthScreen.buttonText
        }}</Button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.image {
  background: url("/images/fon.png") repeat;
}
</style>
