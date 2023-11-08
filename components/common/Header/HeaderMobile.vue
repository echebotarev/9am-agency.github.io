<script setup lang="ts">
import { ref } from "vue";
import storage from "~/composables/useStorage";

const lang = await storage.getItem("lang");
const content = await queryContent(`/content-${lang}`).findOne();

import ButtonCall from "~/components/common/ButtonCall.vue";
import ButtonLanguage from "~/components/common/ButtonLanguage.vue";

const isOpen = ref<boolean>(false);
const close = () => {
  isOpen.value = false;
};
</script>

<template>
  <div class="container-menu fixed w-full h-[50px] top-0 z-10">
    <img
      v-if="!isOpen"
      src="/images/burger.svg"
      alt=""
      class="btn-open absolute top-7 right-2.5"
      @click="isOpen = !isOpen"
    />
    <div
      v-if="isOpen"
      class="menu h-screen font-semibold"
      @wheel.prevent
      @touchmove.prevent
      @scroll.prevent
    >
      <img
        src="/images/close.svg"
        alt=""
        class="absolute top-7 right-2.5"
        @click="isOpen = !isOpen"
      />

      <div
        class="relative mt-[110px] mr-2.5 flex flex-col gap-3 text-xl text-right"
        @click="close"
      >
        <nuxt-link :to="{ path: '/', hash: '#smm' }">{{
          content.content.links.smm
        }}</nuxt-link>
        <nuxt-link :to="{ path: '/', hash: '#video-production' }">
          {{ content.content.links.video }}
        </nuxt-link>
        <nuxt-link :to="{ path: '/', hash: '#us' }">
          {{ content.content.links.about }}
        </nuxt-link>
        <nuxt-link :to="{ path: '/', hash: '#contacts' }">
          {{ content.content.links.contacts }}
        </nuxt-link>

        <div class="flex justify-end w-full">
          <ButtonCall class="w-fit mt-10" />
        </div>
      </div>

      <div class="flex justify-end w-full">
        <ButtonLanguage class="mt-10 mr-2.5 w-[100px]" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-menu {
  pointer-events: none;
}
.btn-open {
  pointer-events: all;
}
.menu {
  background: linear-gradient(90deg, #ece9e6 0%, #fff 100%);
  pointer-events: all;
}
</style>
