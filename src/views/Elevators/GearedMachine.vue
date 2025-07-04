<template>
    <BackGround color1Intensity="40" color2Intensity="60">
        <MenuElevator />
        <SectionHeader title="Máquinas de Tração com Engrenagem" />

        <div class="w-full px-0">
            <section class="flex flex-col items-center justify-center gap-8 w-full max-w-7xl mx-auto">
            <img src="../../assets/images/geared-machine/relacao.png" alt="Relação de Transformação" class="w-full max-w-7xl object-contain" />
            <img src="../../assets/images/geared-machine/diferencial.png" alt="Relação de Transformação" class="w-full max-w-7xl object-contain" />
            <img src="../../assets/images/geared-machine/especificacao.png" alt="Relação de Transformação" class="w-full max-w-7xl object-contain" />
            <img src="../../assets/images/geared-machine/dados.png" alt="Relação de Transformação" class="w-full max-w-7xl object-contain" />
            </section>
        </div>

        <Footer />
    </BackGround>
</template>

<script setup>
import BackGround from "@/components/BackGround.vue";
import Footer from "@/components/Footer.vue";
import MenuElevator from "@/components/Menus/MenuElevator.vue";
import SectionHeader from "@/components/SectionHeader.vue";
</script>
