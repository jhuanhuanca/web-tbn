<template>
  <footer class="bg-[#222d25] text-white">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

      <!-- GRID PRINCIPAL -->
      <div class="grid gap-12 lg:grid-cols-3">

        <!-- BRAND -->
        <div>
          <div class="flex items-center gap-3">
            <div class="flex items-center justify-center size-12 rounded-xl bg-[#54b144] text-white font-bold shadow-md">
              TBN
            </div>
            <div>
              <p class="text-lg font-bold">TBN Living</p>
              <p class="text-xs text-white/60">Plataforma empresarial</p>
            </div>
          </div>

          <p class="mt-5 max-w-sm text-sm text-white/70 leading-relaxed">
            Plataforma digital enfocada en crecimiento personal, negocios y bienestar.
            Diseñada para escalar equipos y generar resultados reales.
          </p>
        </div>

        <!-- LINKS -->
        <div class="grid gap-8 sm:grid-cols-2 lg:col-span-2">

          <!-- MENU -->
          <div>
            <p class="text-sm font-semibold text-[#54b144]">Navegación</p>
            <ul class="mt-4 space-y-2 text-sm text-white/70">

              <li><a href="#inicio" class="hover:text-white transition">Inicio</a></li>
              <li><a href="#productos" class="hover:text-white transition">Productos</a></li>
              <li><a href="#negocio" class="hover:text-white transition">Negocio</a></li>
              <li><a href="#recursos" class="hover:text-white transition">Recursos</a></li>
              <li><a href="#testimonios" class="hover:text-white transition">Testimonios</a></li>

            </ul>
          </div>

          <!-- REDES + CONTACTO -->
          <div>
            <p class="text-sm font-semibold text-[#54b144]">Conecta con nosotros</p>

            <!-- REDES -->
            <div class="mt-4 flex gap-3">

              <a class="flex items-center justify-center size-10 rounded-lg bg-white/5 hover:bg-[#54b144] transition">
                <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 2H8a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6Z"/>
                  <circle cx="12" cy="12" r="4"/>
                </svg>
              </a>

              <a class="flex items-center justify-center size-10 rounded-lg bg-white/5 hover:bg-[#54b144] transition">
                <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/>
                </svg>
              </a>

              <a class="flex items-center justify-center size-10 rounded-lg bg-white/5 hover:bg-[#54b144] transition">
                <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10 15l5-3-5-3v6Z"/>
                </svg>
              </a>

            </div>

            <!-- CONTACTO -->
            <div class="mt-6 rounded-xl bg-white/5 p-4 border border-white/10">
              <p class="text-xs text-white/60">Contacto</p>
              <p class="mt-1 text-sm font-medium">soporte@tbnliving.com</p>
            </div>

          </div>

        </div>
      </div>

      <!-- BOTTOM -->
      <div class="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">

        <p class="text-xs text-white/60">
          © {{ year }} TBN Living. Todos los derechos reservados.
        </p>

        <p class="text-xs text-white/50">
          Plataforma desarrollada con Vue 3 + Tailwind
        </p>

      </div>

    </div>
  </footer>
</template>
<script setup>
const year = new Date().getFullYear()
</script>

