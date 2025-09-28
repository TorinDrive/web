<template>
  <footer class="bg-slate-900 text-slate-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <div class="space-y-4">
          <img
            src="@/assets/images/logo.png"
            alt="Logo da Torindrive"
            class="h-12 object-contain"
          />
          <p class="text-sm">
            Elevando a qualidade, peça por peça. Soluções completas em componentes para elevadores com a confiança e agilidade que você precisa.
          </p>
        </div>

        <div class="space-y-4">
          <h3 class="font-semibold text-white tracking-wider">Navegação</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Produtos</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Clientes</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Catálogo</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Contato</a></li>
          </ul>
        </div>

        <div class="space-y-4">
          <h3 class="font-semibold text-white tracking-wider">Unidades</h3>
          <div class="space-y-4 text-sm">
            <div class="flex items-start space-x-3">
              <MapPinIcon class="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-semibold text-white">SANTA CATARINA</p>
                <p class="leading-snug">Rua Alfredo Schulze, 235<br />Pirabeiraba, Joinville - SC</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <MapPinIcon class="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-semibold text-white">SÃO PAULO</p>
                <p class="leading-snug">Av. D. M. Janitelli Melliani, 42<br />Vila Melliani, Guarulhos - SP</p>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="font-semibold text-white tracking-wider">Fale Conosco</h3>
          <ul class="space-y-2 text-sm">
            <li class="flex items-center space-x-3">
              <PhoneIcon class="w-5 h-5 text-slate-400" />
              <a href="tel:+5547999999999" class="hover:text-white transition-colors">(47) 9 9999-9999</a>
            </li>
            <li class="flex items-center space-x-3">
              <EnvelopeIcon class="w-5 h-5 text-slate-400" />
              <a href="mailto:contato@torindrive.com.br" class="hover:text-white transition-colors">contato@torindrive.com.br</a>
            </li>
          </ul>
          
          <div class="pt-4">
             <h3 class="font-semibold text-white tracking-wider">Legal</h3>
              <ul class="space-y-2 text-sm mt-4">
                <li><a href="#" class="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Termos de Serviço</a></li>
              </ul>
          </div>
        </div>

      </div>

      <div class="border-t border-slate-800 py-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p class="text-slate-400 mb-4 sm:mb-0">
          © {{ new Date().getFullYear() }} Torindrive, Inc. Todos os direitos reservados.
        </p>
        <div class="flex space-x-4">
          <a v-for="social in socialLinks" :key="social.name" :href="social.href" target="_blank" class="text-slate-400 hover:text-white transition-colors" :aria-label="social.name">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path :d="social.iconPath"></path>
            </svg>
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline';

// Ícones SVG para redes sociais (mais fácil de gerenciar aqui)
const socialLinks = ref([
  { 
    name: 'Instagram', 
    href: '#', 
    iconPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z'
  },
  { 
    name: 'Facebook', 
    href: '#', 
    iconPath: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
  },
  { 
    name: 'LinkedIn', 
    href: '#', 
    iconPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
  }
]);
</script>