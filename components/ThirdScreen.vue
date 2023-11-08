<script setup lang="ts">
import ButtonsSlide from "~/components/common/ButtonsSlide.vue";
import storage from "~/composables/useStorage";

const lang = await storage.getItem("lang");
const content = await queryContent(`/content-${lang}`).findOne();
const { isMobile } = useDevice();

const slideIndex = ref(0);
const step = 24;
const prev = () => {
  if (slideIndex.value > step) {
    slideIndex.value -= step;
  } else {
    slideIndex.value = content.images.length - step;
  }
};
const next = () => {
  if (slideIndex.value < content.images.length - step) {
    slideIndex.value += step;
  } else {
    slideIndex.value = 0;
  }
};
</script>

<template>
  <div class="relative top-[70px] pb-[50px]">
    <h1
      :class="`font-bold text-center mb-[30px] ${
        isMobile ? 'leading-[60px] text-[40px]' : 'text-[64px]'
      }`"
    >
      {{ content.content.thirdScreen.title1 }}
    </h1>

    <div v-if="isMobile" class="relative">
      <div class="w-full grid grid-flow-row-dense grid-cols-2 px-5">
        <img
          v-for="(img, i) in content.images.slice(
            slideIndex,
            slideIndex + step,
          )"
          :key="i"
          :src="img.path"
          alt=""
          class="m-auto"
        />
      </div>
      <ButtonsSlide
        class="relative flex justify-center mt-5"
        @prev="prev"
        @next="next"
      />
    </div>
    <div v-else class="w-full flex flex-row flex-wrap px-5">
      <img
        v-for="(img, i) in content.images"
        :key="i"
        :src="img.path"
        alt=""
        class="m-auto"
      />
    </div>

    <h1
      id="smm"
      :class="`font-bold text-center mb-[30px] ${
        isMobile ? 'text-[40px]  mt-10' : 'text-[64px]'
      }`"
    >
      {{ content.content.thirdScreen.title2 }}
    </h1>
    <p
      :class="`text-xl mb-[70px] text-center ${
        isMobile ? 'px-2.5' : 'px-[120px]'
      }`"
    >
      {{ content.content.thirdScreen.description }}
    </p>
  </div>
</template>

<style scoped></style>
