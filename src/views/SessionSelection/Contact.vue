<template>
  <BackGround class="mx-auto">
    <!--Menu-->
    <MenuSession />

    <!--Header-->
    <div
      class="max-w-7xl mx-auto flex-grow flex-col w-full text-white text-center py-10"
    >
      <p class="text-2xl font-semibold text-shadow-2xs">Contato</p>
    </div>

    <Footer />
  </BackGround>
</template>

<script setup>
import BackGround from "@/components/BackGround.vue";
import MenuSession from "@/components/Menus/MenuSession.vue";
import Footer from "@/components/Footer.vue";
</script>

<style>
.text-shadow-2xs {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
</style>
