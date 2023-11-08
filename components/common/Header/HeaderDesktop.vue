<script setup lang="ts">
import { onMounted } from "vue";
import storage from "~/composables/useStorage";
import gsap from "gsap";

const lang = await storage.getItem("lang");
const content = await queryContent(`/content-${lang}`).findOne();

import ButtonLanguage from "~/components/common/ButtonLanguage.vue";
import ButtonCall from "~/components/common/ButtonCall.vue";

onMounted(() => {
  const btn = document.querySelector(".call-button");
  const svg = document.querySelector(".call-button svg");
  const text = document.querySelector(".call-button div");

  const container = document.querySelector(".second-screen");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      scrub: true,
      start: "top 50%",
      end: "top 55%",
      immediateRender: false,
      // markers: true,
    },
  });

  tl.to(btn, {
    backgroundColor: "#D02431",
  })
    .to(svg, {
      fill: "#fff",
    })
    .to(text, {
      color: "#fff",
    });
});
</script>

<template>
  <div class="fixed top-5 left-0 z-10 w-full">
    <div class="absolute left-4">
      <img src="/images/logo.svg" alt="9am Agency" />
    </div>

    <div class="flex h-[70px] justify-end">
      <div class="links my-auto font-semibold">
        <nuxt-link :to="{ path: '/', hash: '#smm' }" class="mr-10">{{
          content.content.links.smm
        }}</nuxt-link>
        <nuxt-link
          :to="{ path: '/', hash: '#video-production' }"
          class="mr-10"
          >{{ content.content.links.video }}</nuxt-link
        >
        <nuxt-link :to="{ path: '/', hash: '#us' }" class="mr-10">{{
          content.content.links.about
        }}</nuxt-link>
        <nuxt-link :to="{ path: '/', hash: '#contacts' }" class="mr-10">{{
          content.content.links.contacts
        }}</nuxt-link>
      </div>

      <ButtonCall class="mr-10" />

      <ButtonLanguage class="d-flex mr-6" />
    </div>
  </div>
</template>

<style scoped>
.call-button {
  background-color: #ffffff;
  color: #000;
}
</style>
