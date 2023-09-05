<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";

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
      markers: true,
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

      <a
        href="tel:+373060320713"
        class="call-button rounded-full flex my-auto mr-10 px-8 py-3.5"
      >
        <svg
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 mr-2.5"
          style="fill: #d02431"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M23.5652 15.7533C22.0242 15.7533 20.5111 15.5234 19.0773 15.0716C18.3747 14.8431 17.511 15.0528 17.0822 15.4727L14.2522 17.5098C10.9701 15.8393 8.94838 13.9121 7.22033 10.8061L9.29387 8.17781C9.83259 7.66481 10.0258 6.91544 9.79431 6.21231C9.31845 4.83794 9.07672 3.39587 9.07672 1.92587C9.07678 0.863937 8.17074 0 7.05712 0H2.43483C1.3212 0 0.415161 0.863937 0.415161 1.92581C0.415161 14.0977 10.8001 24 23.5652 24C24.6788 24 25.5848 23.1361 25.5848 22.0742V17.679C25.5848 16.6172 24.6787 15.7533 23.5652 15.7533Z"
            />
          </g>
        </svg>
        <div class="font-medium">060 320 713</div>
      </a>

      <!--      <div class="w-[65px]">
        <v-select
          :items="['RU', 'ROM', 'EN']"
          density="compact"
          variant="plain"
          label="RU"
          single-line
          solo
        ></v-select>
      </div>-->
    </div>
  </div>
</template>

<style scoped>
.call-button {
  background-color: #ffffff;
  color: #000;
}
</style>
