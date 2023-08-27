<script setup lang="ts">
import Header from "~/components/Header.vue";
import MainScreen from "~/components/MainScreen.vue";
import SecondScreen from "~/components/SecondScreen.vue";
import ThirdScreen from "~/components/ThirdScreen.vue";
import FourthScreen from "~/components/FourthScreen.vue";
</script>

<template>
  <Header />
  <div class="relative top-[-70px]">
    <MainScreen />
    <SecondScreen />
    <ThirdScreen />
    <FourthScreen />
  </div>
</template>
