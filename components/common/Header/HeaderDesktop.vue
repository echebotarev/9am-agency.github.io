<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";

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
        <nuxt-link :to="{ path: '/', hash: '#smm' }" class="mr-10"
          >SMM</nuxt-link
        >
        <nuxt-link :to="{ path: '/', hash: '#video-production' }" class="mr-10"
          >Видеопродакшен</nuxt-link
        >
        <nuxt-link :to="{ path: '/', hash: '#us' }" class="mr-10"
          >О нас</nuxt-link
        >
        <nuxt-link :to="{ path: '/', hash: '#contacts' }" class="mr-10"
          >Контакты</nuxt-link
        >
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
