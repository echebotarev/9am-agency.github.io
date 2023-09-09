<script setup lang="ts">
const { isMobile } = useDevice();
</script>

<template>
  <footer class="text-white">
    <div
      :class="
        isMobile
          ? 'flex flex-col gap-10 pt-4 pb-7 text-xl text-center font-semibold'
          : 'grid grid-cols-4 gap-10 py-[60px] px-[60px]'
      "
    >
      <div class="flex">
        <img src="/images/logo-white.png" alt="" class="mx-auto" />
      </div>

      <div>
        <nuxt-link :to="{ path: '/', hash: '#smm' }" class="block mb-1"
          >SMM</nuxt-link
        >
        <nuxt-link
          :to="{ path: '/', hash: '#video-production' }"
          class="block mb-1"
        >
          Видеопродакшен
        </nuxt-link>
        <nuxt-link :to="{ path: '/', hash: '#us' }" class="block mb-1"
          >О нас</nuxt-link
        >
        <nuxt-link :to="{ path: '/', hash: '#contacts' }" class="block mb-1"
          >Контакты</nuxt-link
        >
      </div>

      <div>
        <a href="tel:+373060320713" class="block mb-3">
          <img
            src="/images/phone-white.svg"
            alt=""
            class="inline-block mr-2 w-5"
          />
          <span>060 320 713</span>
        </a>

        <p>
          <img
            src="/images/letter-white.svg"
            alt=""
            class="inline-block mr-2 w-5"
          />
          <span>9amagency@gmail.com</span>
        </p>
      </div>

      <div>
        <!--        <div class="mb-2">
          <a href="https://wa.me/373060320713" target="_blank">
            <img src="/images/whatsapp.svg" alt="" class="w-[40px]" />
          </a>
        </div>-->
        <div class="mb-4">
          <a
            href="https://www.instagram.com/9am_agency?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            class="inline-block mr-2"
          >
            <img src="/images/inst.svg" alt="" class="w-[40px]" />
          </a>
          <a
            href="https://www.facebook.com/9am.agency?mibextid=ZbWKwL"
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
            href="https://www.youtube.com/@9amagency296"
            target="_blank"
            class="inline-block mr-2"
          >
            <img src="/images/youtube.svg" alt="" class="w-[40px]" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: linear-gradient(
    165deg,
    #fe4d63 9.58%,
    #d02431 45.31%,
    #93291e 91.25%
  );
}
</style>
