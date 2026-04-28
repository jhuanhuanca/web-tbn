<template>
  <section id="inicio" class="relative isolate overflow-hidden bg-tbn-dark">
    <!-- Fondo aislado SOLO para el hero -->
    <div class="absolute inset-0 -z-10">
      <img :src="bgUrl" alt="Familia feliz y unida" class="h-full w-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-b from-[#222d25]/88 via-[#222d25]/68 to-[#ffffff]/0"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-[#222d25]/35 via-transparent to-transparent"></div>
      <div class="pointer-events-none absolute -bottom-24 -right-24 size-[34rem] rounded-full bg-[#54b144]/25 blur-3xl"></div>
      <div class="pointer-events-none absolute -top-24 -left-24 size-[30rem] rounded-full bg-white/10 blur-3xl"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24">
      <div class="grid items-center gap-10 lg:grid-cols-2">
        <div class="text-white tbn-fade-up">
          <div class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-extrabold ring-1 ring-white/15">
            <span class="size-2 rounded-full bg-[#54b144]"></span>
            Empresa MLM • bienestar • comunidad
            <span class="ml-1 rounded-full bg-[#54b144]/20 px-2 py-0.5 text-[11px] font-extrabold ring-1 ring-[#54b144]/25">
              Nuevo portal
            </span>
          </div>

          <h1 class="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Crece con <span class="text-[#54b144]">TBN Living</span>:
            bienestar, equipo y un plan real
          </h1>
          <p class="mt-4 max-w-xl text-base text-white/90 sm:text-lg">
            Un modelo de marketing de redes con herramientas, capacitación y duplicación. Vende productos premium,
            desarrolla líderes y construye ingresos con estructura.
          </p>

          <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#negocio"
              class="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#54b144] px-6 py-3 text-sm font-extrabold text-white shadow-soft ring-1 ring-[#54b144]/30 transition hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0 sm:text-base"
            >
              Conoce el plan
              <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h12M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#productos"
              class="inline-flex items-center justify-center rounded-2xl bg-white/10 px-6 py-3 text-sm font-extrabold text-white ring-1 ring-[#54b144]/20 transition hover:bg-white/15 sm:text-base"
            >
              Ver catálogo
            </a>
          </div>

          <div class="mt-8 flex flex-wrap gap-2">
            <span class="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-3 py-2 text-xs font-extrabold ring-1 ring-white/15 backdrop-blur">
              <span class="size-2 rounded-full bg-[#54b144]"></span>
              Duplicación guiada
            </span>
            <span class="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-3 py-2 text-xs font-extrabold ring-1 ring-white/15 backdrop-blur">
              <span class="size-2 rounded-full bg-[#54b144]"></span>
              Comisiones + bonos
            </span>
            <span class="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-3 py-2 text-xs font-extrabold ring-1 ring-white/15 backdrop-blur">
              <span class="size-2 rounded-full bg-[#54b144]"></span>
              Comunidad y soporte
            </span>
          </div>
        </div>

        <div class="lg:justify-self-end">
          <div
            class="relative overflow-hidden rounded-3xl bg-white/10 p-4 shadow-soft ring-1 ring-[#54b144]/20 backdrop-blur tbn-fade-up"
          >
            <div class="grid gap-4">
              <div class="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <div class="text-sm font-semibold text-white/90">Resumen MLM</div>
                    <div class="mt-1 text-2xl font-extrabold text-white">Tu tablero</div>
                  </div>
                  <div class="rounded-xl bg-[#54b144]/20 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/10">
                    En vivo (demo)
                  </div>
                </div>
                <div class="mt-5 grid grid-cols-3 gap-3">
                  <div class="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                    <div class="text-xs text-white/75">Clientes</div>
                    <div class="mt-1 text-lg font-extrabold text-white">128</div>
                  </div>
                  <div class="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                    <div class="text-xs text-white/75">Equipo</div>
                    <div class="mt-1 text-lg font-extrabold text-white">24</div>
                  </div>
                  <div class="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                    <div class="text-xs text-white/75">Rango</div>
                    <div class="mt-1 text-lg font-extrabold text-white">Plata</div>
                  </div>
                </div>
              </div>

              <div class="grid gap-3 sm:grid-cols-2">
                <div class="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                  <div class="text-xs text-white/75">Entrenamiento</div>
                  <div class="mt-1 text-base font-semibold text-white">Presentación + cierre</div>
                  <div class="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-white/90">
                    <span class="size-2 rounded-full bg-[#54b144]"></span>
                    Hoy • 7:00 PM
                  </div>
                </div>
                <div class="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                  <div class="text-xs text-white/75">Duplicación</div>
                  <div class="mt-1 text-base font-semibold text-white">Guía 3 pasos</div>
                  <div class="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-white/90">
                    <span class="size-2 rounded-full bg-[#54b144]"></span>
                    Disponible
                  </div>
                </div>
              </div>
            </div>

            <div class="pointer-events-none absolute -bottom-10 -right-10 size-64 rounded-full bg-[#54b144]/35 blur-3xl"></div>
            <div class="pointer-events-none absolute -left-10 -top-10 size-56 rounded-full bg-white/10 blur-3xl"></div>
          </div>
        </div>
      </div>

    </div>
    <!-- Separador: garantiza que el hero no "se mezcle" visualmente con las siguientes secciones -->
    <div class="h-10 bg-gradient-to-b from-transparent to-[#f5f5f5]"></div>
  </section>
</template>

<script setup>
const bgUrl =
  'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/426328333_365064312979320_6656758101006943842_n.png?_nc_cat=102&ccb=1-7&_nc_sid=2a1932&_nc_ohc=s_pXraSTnOIQ7kNvwHOJrx8&_nc_oc=Adr7NxUpCtnVc-ns4k-ogddFH7ZcVyhcU0QCmC3cqOZmD-ZTqLOq1xKMBRMtvsNOBd8f_Zf_wBX5pnYZTjTVe6d-&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=ZjSZfuKmqUKK9Pk-DKg3kQ&_nc_ss=7b2a8&oh=00_Af0MmRckr3Te3c8a0Eo-a5wvGWaFjfR4ZuPaPgyYkb2XZQ&oe=69F6630E'
</script>
