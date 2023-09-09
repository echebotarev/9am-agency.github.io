<script setup lang="ts">
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
