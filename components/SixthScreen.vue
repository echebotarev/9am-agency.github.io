<script setup lang="ts">
import Button from "~/components/common/Button.vue";
</script>

<template>
  <div>
    <div class="image pt-[30px] pb-[44px]">
      <h1 class="text-[64px] font-bold text-center mb-[30px]">Контакты</h1>
    </div>

    <div class="w-full bg-[#F9F9F9] py-[44px]">
      <form class="form flex flex-col w-[50%] mx-auto">
        <span class="text-center font-semibold mb-3">
          Оставьте заявку и менеджер свяжется с вами
        </span>

        <input
          id="name"
          name="name"
          type="text"
          class="form-input bg-[#F9F9F9] border-b border-[#505050] focus:border-transparent focus:ring-0 text-sm placeholder-[#505050] mb-2"
          placeholder="Имя"
        />
        <input
          id="phone"
          name="phone"
          type="text"
          class="form-input bg-[#F9F9F9] border-b border-[#505050] focus:border-transparent focus:ring-0 text-sm placeholder-[#505050] mb-2"
          placeholder="Номер телефона"
        />
        <label for="message" class="text-sm text-[#505050] mt-3 pl-3"
          >Сообщение</label
        >
        <textarea
          name="message"
          id="message"
          class="textarea border border-[#505050] focus:border-transparent focus:ring-0 rounded text-sm h-20"
        ></textarea>

        <Button class="mt-[40px] mx-auto">Отправить</Button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.image {
  background: url("/images/fon.png") repeat;
}
</style>
