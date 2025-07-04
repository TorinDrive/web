<template>
    <BackGround color1Intensity="40" color2Intensity="60">
        <MenuElevator />

        <div class="w-full px-4 lg:px-6 pt-20">
            <section
                class="flex flex-col items-center justify-center py-16 gap-8 w-full max-w-2xl mx-auto -translate-y-10"
            >
                <img
                    src="https://cdn-icons-png.flaticon.com/512/616/616494.png"
                    alt="Em breve"
                    class="w-32 h-32 mb-4 animate-bounce"
                />
                <h2 class="text-3xl font-bold text-pink-600 text-center">
                    Página Em Desenvolvimento
                </h2>
                <p class="text-lg text-gray-700 text-center">
                    Volte em breve para novidades encantadoras
                </p>
                <div class="flex gap-2 mt-4">
                    <span class="text-2xl animate-pulse">✨</span>
                    <span class="text-2xl animate-pulse">🛠️</span>
                    <span class="text-2xl animate-pulse">💡</span>
                </div>
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
