<template>
  <section id="testimonios" class="bg-tbn-neutral">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="text-3xl font-extrabold tracking-tight text-tbn-dark">Testimonios</h2>
          <p class="mt-2 max-w-2xl text-sm text-tbn-dark/70 sm:text-base">
            Historias de ejemplo que reflejan motivación, constancia y resultados.
          </p>
        </div>
        <div class="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
          <span class="size-2 rounded-full bg-tbn-light"></span>
          Comunidad TBN (demo)
        </div>
      </div>

      <div class="mt-10 grid gap-6 lg:grid-cols-3">
        <article
          v-for="t in testimonials"
          :key="t.name"
          class="group rounded-3xl bg-tbn-neutral p-7 ring-1 ring-black/5 transition hover:-translate-y-1 hover:bg-slate-100"
        >
          <div class="flex items-center gap-4">
            <img
              :src="t.photo"
              :alt="`Foto de ${t.name}`"
              class="size-12 rounded-2xl object-cover ring-1 ring-black/10"
              loading="lazy"
            />
            <div>
              <div class="text-sm font-extrabold text-tbn-dark">{{ t.name }}</div>
              <div class="text-xs font-semibold text-tbn-dark/60">{{ t.role }}</div>
            </div>
          </div>
          <p class="mt-5 text-sm leading-relaxed text-slate-700">
            “{{ t.text }}”
          </p>
          <div class="mt-6 flex items-center gap-1 text-tbn-light" aria-hidden="true">
            <svg v-for="i in 5" :key="i" viewBox="0 0 20 20" class="size-4" fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 0 0 .95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.454a1 1 0 0 0-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.539 1.118l-3.377-2.454a1 1 0 0 0-1.175 0l-3.377 2.454c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 0 0-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 0 0 .95-.69l1.286-3.97Z"
              />
            </svg>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Mariana López',
    role: 'Emprendedora',
    text: 'Me encantó la claridad del portal. En pocas semanas organicé mi rutina, aprendí a presentar mejor y empecé a ver avances reales.',
    photo:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Carlos Méndez',
    role: 'Líder de equipo',
    text: 'Las herramientas y capacitaciones me ayudaron a duplicar procesos. Ahora mi equipo tiene objetivos claros y seguimiento constante.',
    photo:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sofía Ramírez',
    role: 'Consultora',
    text: 'La comunidad fue clave: acompañamiento, disciplina y un estilo de vida más saludable. Todo en una experiencia moderna y rápida.',
    photo:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
  },
]
</script>

