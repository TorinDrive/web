<template>
  <BackGround color1Intensity="40" color2Intensity="60">
    <MenuElevator />
    <SectionHeader title="Máquinas de Tração" />

    <div class="w-full px-4 lg:px-6">
      <section class="flex flex-col lg:flex-row items-start justify-center py-8 md:py-16 gap-8 lg:gap-12 w-full max-w-7xl mx-auto -translate-y-10">

      </section>
    </div>

    <Footer />
  </BackGround>
</template>

<script setup>
// O script permanece o mesmo
import BackGround from "@/components/BackGround.vue";
import Footer from "@/components/Footer.vue";
import MenuElevator from "@/components/Menus/MenuElevator.vue";
import SectionHeader from "@/components/SectionHeader.vue";


</script>
