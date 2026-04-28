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
      'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/660526145_924169603735452_5713837928092603804_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=cjuzreiAoOQQ7kNvwE-gDpg&_nc_oc=AdruF4Irp1ZpZS8BJ8Ta1Z39f8N3Pepn1dHIBzLjyO9LYmmOo7cceybml9IR8ury3srkB75gmrErL3YF8niP3vf3&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=xVJLm46FpcbtnKHwIdaGLg&_nc_ss=7b2a8&oh=00_Af2OBtuGWAhzQwvGY1TvSlx3SZ9wHjCncXky3ftQi6Fwhw&oe=69F67F32',
  },
  {
    id: 2,
    name: 'Balance Pro',
    description: 'Fórmula de apoyo para energía y enfoque en el día a día.',
    price: 49.0,
    tag: 'Energía',
    image:
      'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/654320580_914704151348664_9014460518251410841_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=CCe8L-PGtKQQ7kNvwHyOleA&_nc_oc=AdqaW2m9KBWlL4GBt29Rq_qPgF2BCJMNlxSiD68j-w6ohj2c9BcCZqEjSedn3w4NLvWdIVTwK9kjrK9OeXxZ-PII&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=-Me7jV21U0nBmmuDmwuhBQ&_nc_ss=7b2a8&oh=00_Af3wcrMBSX44-ZKax9uI2N5IZ4vBSyKZb8NXk-fkhohbtw&oe=69F678EA',
  },
  {
    id: 3,
    name: 'Glow Skin',
    description: 'Cuidado personal con textura ligera y sensación premium.',
    price: 29.5,
    tag: 'Cuidado',
    image:
      'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/479700572_605113625641053_7204665803851158579_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=Txbu4xRCLz8Q7kNvwFdKVZm&_nc_oc=AdonRHyEY2V0lXKE9rbkyA_al9kz65EYEVfyBNn3JHKLsEtLXb5um-VJZaIl8LjJHbdOSelCYpCT2wnMALzuRPQm&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=NR-Ox0s560yhWGmvp-T-eQ&_nc_ss=7b2a8&oh=00_Af2Q598DupNSDRcPlUbyrqfHwhy5Q60FEEjC-p8tWeL5mg&oe=69F6711E',
  },
  {
    id: 4,
    name: 'Omega Plus',
    description: 'Acompaña tu estilo de vida activo con soporte nutricional.',
    price: 55.0,
    tag: 'Nutrición',
    image:
      'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/479496776_605113405641075_8323063722078201306_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=qI-kj4_3PO8Q7kNvwHKU1wG&_nc_oc=Adr1VfCBMVFtju7dm4Xhuj4bMmgwIHrpw0owQehv5NdIRMnag8v8ggRaRAqI9FVcj-jv0siz6mKH74gkb0KxBbW0&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=eiCk3XbE8sKTTjroq0BcfQ&_nc_ss=7b2a8&oh=00_Af1_KGiNc1MZxUHJD3kD7B5lEl-GPQb99dgfwq7TEF5T-Q&oe=69F66514',
  },
  {
    id: 5,
    name: 'Daily Fit',
    description: 'Ideal para hábitos consistentes y una vida saludable.',
    price: 42.0,
    tag: 'Rutina',
    image:
      'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/480179544_605113565641059_1874153336082848445_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=juAFvThtNbsQ7kNvwGgvWqu&_nc_oc=AdoWzIXmlge5Qx4N5sWyQ-dCK_Rty7KKZmWNBBcc2QWTNCmzV9z7ojis6SnSRDe-VHyZu4o2QgTom380WI4D9JbE&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=BHvygCtjJ0JVSKj0Vw81Xw&_nc_ss=7b2a8&oh=00_Af1CYJSH6LXKturtppT7tjPCTOgZ0xO5v5RG6bB1u3sMoA&oe=69F65198',
  },
  {
    id: 6,
    name: 'Hydra Boost',
    description: 'Refrescante, práctico y pensado para acompañarte siempre.',
    price: 19.9,
    tag: 'Hidratación',
    image:
      'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/480271736_605113475641068_4586085088636365968_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=yjDRBmFg8msQ7kNvwEMmurZ&_nc_oc=AdrXJZmMAUzTshpWD90AXDVxL-e57KM_FUIMneYsDKvv3bq1vfXlMvtpKcfPRSzyPgnPtdnlvwOx4hwq_fiU9TM7&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=jYoQX_39U_D2_Ip-uj7acQ&_nc_ss=7b2a8&oh=00_Af109XGPn1MHUB_ywGDpxg-uK2tbFVN0KaVj6uy1odz29g&oe=69F67365',
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

