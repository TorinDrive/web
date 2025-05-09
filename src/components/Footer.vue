<template>
  <footer class="text-white">
    <div class="max-w-7xl mx-auto mt-10">
      <div class="flex flex-wrap justify-between border-t-2 border-white py-4">
        <!-- Logo -->
        <div class="flex justify-center w-full md:w-auto mb-4 md:mb-0">
          <img
            src="@/assets/images/logo.png"
            alt="Logo da Empresa"
            class="h-12 md:h-16 object-contain"
          />
        </div>

        <!-- Links -->
        <div class="flex flex-wrap justify-center text-sm w-full md:w-auto">
          <!-- Navegação -->
          <div class="flex flex-col items-center md:items-start mx-4">
            <h3 class="font-semibold mb-2">Navegação</h3>
            <ul class="space-y-1">
              <li><a href="#" class="hover:underline">Home</a></li>
              <li><a href="#" class="hover:underline">Sobre Nós</a></li>
              <li><a href="#" class="hover:underline">Produtos</a></li>
              <li><a href="#" class="hover:underline">Soluções</a></li>
              <li><a href="#" class="hover:underline">Blog</a></li>
              <li><a href="#" class="hover:underline">FAQ</a></li>
              <li><a href="#" class="hover:underline">Contato</a></li>
            </ul>
          </div>

          <!-- Redes Sociais -->
          <div class="flex flex-col items-center md:items-start mx-4">
            <h3 class="font-semibold mb-2">Redes Sociais</h3>
            <ul class="space-y-1">
              <li><a href="#" class="hover:underline">Facebook</a></li>
              <li><a href="#" class="hover:underline">Instagram</a></li>
              <li><a href="#" class="hover:underline">LinkedIn</a></li>
              <li><a href="#" class="hover:underline">Twitter</a></li>
              <li><a href="#" class="hover:underline">YouTube</a></li>
            </ul>
          </div>

          <!-- Legais -->
          <div class="flex flex-col items-center md:items-start mx-4">
            <h3 class="font-semibold mb-2">Links Legais</h3>
            <ul class="space-y-1">
              <li>
                <a href="#" class="hover:underline">Política de Privacidade</a>
              </li>
              <li><a href="#" class="hover:underline">Termos de Serviço</a></li>
              <li>
                <a href="#" class="hover:underline">Política de Cookies</a>
              </li>
            </ul>
          </div>

          <!-- Contato -->
          <div class="flex flex-col items-center md:items-start mx-4">
            <h3 class="font-semibold mb-2">Contato</h3>
            <p class="text-sm leading-none text-center md:text-left">
              Endereço Completo<br />
              Rua Exemplo, 123 – Bairro Industrial, Joinville/SC
            </p>
            <p class="text-sm leading-none text-center md:text-left mt-2">
              Telefone<br />
              <a href="tel:+5547999999999" class="hover:underline"
                >(47) 9 9999-9999</a
              >
            </p>
            <p class="text-sm leading-none text-center md:text-left mt-2">
              E-mail<br />
              <a href="mailto:contato@empresa.com.br" class="hover:underline"
                >contato@empresa.com.br</a
              >
            </p>
          </div>
        </div>
      </div>

      <div class="text-center text-xs text-white border-t border-white py-4">
        © 2025 Torindrive, Inc. Todos os direitos reservados.
      </div>
    </div>
  </footer>
</template>

<script setup></script>
