<script setup lang="ts">
import Header from "~/components/Header.vue";
import MainScreen from "~/components/MainScreen.vue";
import SecondScreen from "~/components/SecondScreen.vue";
import ThirdScreen from "~/components/ThirdScreen.vue";
import FourthScreen from "~/components/FourthScreen.vue";
import FifthScreen from "~/components/FifthScreen.vue";
import SixthScreen from "~/components/SixthScreen.vue";
import Contacts from "~/components/Contacts.vue";
import Footer from "~/components/Footer.vue";
</script>

<template>
  <Header />
  <div class="relative">
    <MainScreen />
    <SecondScreen />
    <ThirdScreen />
    <FourthScreen />
    <FifthScreen />
    <SixthScreen />
    <Contacts />
    <Footer />
  </div>
</template>
