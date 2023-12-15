<script setup lang="ts">
import storage from "~/composables/useStorage";
const { isMobile } = useDevice();

const lang = await storage.getItem("lang");
const content = await queryContent(`/content-${lang}`).findOne();
</script>

<template>
  <div
    :class="
      isMobile
        ? 'flex flex-col-reverse'
        : 'grid grid-cols-2 gap-4 pt-[64px] pb-[45px]'
    "
  >
    <div class="map overflow-hidden rounded-r-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.034754523096!2d28.832708176736098!3d47.039548826962466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97db22f736a81%3A0x4a04cbef37087976!2zMSwgU3RyYWRhIEFsYmnFn29hcmEgNzgsIENoacWfaW7Eg3UsINCc0L7Qu9C00L7QstCw!5e0!3m2!1sru!2spt!4v1693751954328!5m2!1sru!2spt"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div
      :class="`info flex bg-[#FFDDDF] font-semibold pl-4 ${
        isMobile ? 'rounded-t-2xl pt-7 pb-[50px] px-4' : 'rounded-l-lg'
      }`"
    >
      <div class="my-auto">
        <p class="mb-4">
          {{ content.content.contacts.description }}
        </p>
        <a href="tel:+37378219920" target="_blank" class="mr-6">
          <img
            src="/images/call.svg"
            alt=""
            class="w-[20px] inline-block mr-2"
          />
          <span>+373 78 21 99 20</span>
        </a>

        <span>
          <img
            src="/images/letter.svg"
            alt=""
            class="w-[20px] inline-block mr-2"
          />
          <span>9amagency@gmail.com</span>
        </span>

        <div class="mt-3 mb-5">
          <a href="https://wa.me/373060320713" target="_blank">
            <img src="/images/whatsapp.svg" alt="" class="w-[40px]" />
          </a>
        </div>

        <!--        <div class="mb-4">
          <p class="mb-2">Следите за нами в соцсетях</p>
          <a
            href="www.instagram.com/9am_agency?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            class="inline-block mr-2"
          >
            <img src="/images/inst.svg" alt="" class="w-[40px]" />
          </a>
          <a
            href="www.facebook.com/9am.agency?mibextid=ZbWKwL"
            target="_blank"
            class="inline-block mr-2"
          >
            <img src="/images/fb.svg" alt="" class="w-[40px]" />
          </a>
          <a
            href="https://www.tiktok.com/@9am.agency"
            target="_blank"
            class="inline-block mr-2"
          >
            <img src="/images/tiktok.svg" alt="" class="w-[40px]" />
          </a>
          <a
            href="www.youtube.com/@9amagency296"
            target="_blank"
            class="inline-block mr-2"
          >
            <img src="/images/youtube.svg" alt="" class="w-[40px]" />
          </a>
        </div>-->

        <div>
          <img src="/images/location.svg" alt="" class="inline-block mr-2" />
          <span>{{ content.content.contacts.street }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
