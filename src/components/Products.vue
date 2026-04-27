<template>
  <section id="productos" class="bg-[#f5f5f5]">
    <div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

      <!-- HEADER -->
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="text-4xl font-extrabold tracking-tight text-[#222d25]">
            Productos TBN Living
          </h2>
          <p class="mt-3 max-w-2xl text-base text-[#222d25]/70">
            Bienestar premium diseñado para transformar tu estilo de vida.
          </p>
        </div>

        <a
          href="#negocio"
          class="hidden sm:inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#222d25] shadow-md ring-1 ring-black/10 transition hover:shadow-lg"
        >
          Conoce el negocio
        </a>
      </div>

      <!-- GRID -->
      <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        <article
          v-for="p in products"
          :key="p.id"
          class="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >

          <!-- IMAGEN -->
          <div class="relative overflow-hidden">
            <img
              :src="p.image"
              :alt="p.name"
              class="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent"></div>

            <span
              class="absolute top-3 left-3 rounded-full bg-[#54b144] px-3 py-1 text-xs font-semibold text-white shadow"
            >
              {{ p.tag }}
            </span>
          </div>

          <!-- CONTENIDO -->
          <div class="p-6 flex flex-col justify-between h-[220px]">

            <div>
              <h3 class="text-xl font-bold text-[#222d25]">
                {{ p.name }}
              </h3>

              <p class="mt-2 text-sm text-[#222d25]/70 leading-relaxed">
                {{ p.description }}
              </p>
            </div>

            <!-- FOOTER CARD -->
            <div class="mt-5 flex items-center justify-between">

              <div>
                <p class="text-xs text-[#222d25]/50">Precio</p>
                <p class="text-xl font-extrabold text-[#54b144]">
                  {{ currency(p.price) }}
                </p>
              </div>

              <button
                @click="buy(p)"
                class="flex items-center gap-2 rounded-xl bg-[#54b144] px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#449a38] hover:shadow-lg active:scale-95"
              >
                Comprar
                <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 3h2l.5 3M7 13h10l4-8H6.5M7 13l-1.2 6h12.2M10 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                </svg>
              </button>

            </div>

          </div>
        </article>

      </div>

      <!-- BOTÓN MOBILE -->
      <div class="mt-12 sm:hidden">
        <a
          href="#negocio"
          class="flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#222d25] shadow-md ring-1 ring-black/10"
        >
          Conoce el negocio
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useCart } from '../stores/cart'

const cart = useCart()

const products = [
  {
    id: 1,
    name: 'Verde Vital',
    description: 'Bebida funcional con mezcla vegetal para tu rutina diaria.',
    price: 39.9,
    tag: 'Bienestar',
    image:
      'https://images.unsplash.com/photo-1542442828-287217bfb87f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 2,
    name: 'Balance Pro',
    description: 'Fórmula de apoyo para energía y enfoque en el día a día.',
    price: 49.0,
    tag: 'Energía',
    image:
      'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 3,
    name: 'Glow Skin',
    description: 'Cuidado personal con textura ligera y sensación premium.',
    price: 29.5,
    tag: 'Cuidado',
    image:
      'https://images.unsplash.com/photo-1556228724-4b4a9f3f6a9a?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 4,
    name: 'Omega Plus',
    description: 'Acompaña tu estilo de vida activo con soporte nutricional.',
    price: 55.0,
    tag: 'Nutrición',
    image:
      'https://images.unsplash.com/photo-1614851099511-773b36a26f49?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 5,
    name: 'Daily Fit',
    description: 'Ideal para hábitos consistentes y una vida saludable.',
    price: 42.0,
    tag: 'Rutina',
    image:
      'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 6,
    name: 'Hydra Boost',
    description: 'Refrescante, práctico y pensado para acompañarte siempre.',
    price: 19.9,
    tag: 'Hidratación',
    image:
      'https://images.unsplash.com/photo-1526401485004-2aa7f3f4f84b?auto=format&fit=crop&w=1600&q=80',
  },
]

function currency(value) {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value)
}

function buy(p) {
  cart.add(p, 1)
  cart.toggle(true)
}
</script>

