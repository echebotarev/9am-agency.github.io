<script setup lang="ts">
import { onBeforeMount } from "vue";
import storage from "~/composables/useStorage";

onBeforeMount(async () => {
  const lang = await storage.getItem("lang");
  if (!lang) {
    await storage.setItem("lang", "ru");
  }
});

import Header from "~/components/common/Header/index.vue";
import MainScreen from "~/components/MainScreen.vue";
</script>

<template>
  <Header />
  <div class="relative">
    <MainScreen />
    <LazySecondScreen />
    <LazyThirdScreen />
    <LazyFourthScreen />
    <LazyFifthScreen />
    <LazySixthScreen />
    <LazyContacts />
    <LazyFooter />
  </div>
</template>
