<template>
  <div class="fixed bottom-5 right-5 z-[60]">
    <!-- Panel -->
    <Transition name="dock-fade">
      <div
        v-if="open"
        class="mb-3 w-[18.5rem] overflow-hidden rounded-[1.25rem] bg-white/90 p-3 shadow-soft ring-1 ring-black/10 backdrop-blur"
      >
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <div class="text-xs font-extrabold tracking-wide text-tbn-dark/70">ACCIONES RÁPIDAS</div>
            <div class="mt-1 text-sm font-extrabold text-tbn-dark">Portal TBN Living</div>
          </div>
          <button
            type="button"
            class="grid size-9 place-items-center rounded-xl bg-black/5 text-tbn-dark ring-1 ring-black/10 transition hover:bg-black/10"
            @click="open = false"
            aria-label="Cerrar"
          >
            <Icon name="x" class="size-4" />
          </button>
        </div>

        <div class="mt-3 grid grid-cols-2 gap-2">
          <button
            type="button"
            class="dock-btn"
            @click="goHash('#productos')"
          >
            <span class="dock-ico text-tbn-dark/80"><Icon name="bag" class="size-4" /></span>
            Productos
          </button>
          <button
            type="button"
            class="dock-btn"
            @click="goHash('#negocio')"
          >
            <span class="dock-ico text-tbn-dark/80"><Icon name="rocket" class="size-4" /></span>
            Negocio
          </button>
          <button
            type="button"
            class="dock-btn"
            @click="goHash('#recursos')"
          >
            <span class="dock-ico text-tbn-dark/80"><Icon name="book" class="size-4" /></span>
            Recursos
          </button>
          <button
            type="button"
            class="dock-btn"
            @click="goHash('#testimonios')"
          >
            <span class="dock-ico text-tbn-dark/80"><Icon name="trophy" class="size-4" /></span>
            Testimonios
          </button>
        </div>

        <div class="mt-3 flex items-center justify-between rounded-2xl bg-tbn-dark px-3 py-2 text-white ring-1 ring-black/10">
          <div class="text-xs">
            <div class="font-extrabold">Tip</div>
            <div class="text-white/80">Desliza y explora secciones.</div>
          </div>
          <button
            type="button"
            class="rounded-xl bg-white/10 px-3 py-2 text-xs font-extrabold ring-1 ring-white/15 transition hover:bg-white/15"
            @click="scrollTop"
          >
            <span class="inline-flex items-center gap-2">
              <Icon name="arrowUp" class="size-4" />
              Arriba
            </span>
          </button>
        </div>
      </div>
    </Transition>

    <!-- Main FAB -->
    <button
      type="button"
      class="group relative grid size-14 place-items-center rounded-[1.4rem] text-white shadow-soft ring-1 ring-white/20 transition hover:-translate-y-1 hover:brightness-95 hover:shadow-xl active:translate-y-0"
      style="background-color:#54b144;"
      @click="toggle"
      aria-label="Acciones rápidas"
    >
      <span class="dock-pulse absolute inset-0 rounded-[1.4rem]"></span>
      <span class="relative">
        <Icon v-if="open" name="x" class="size-6" />
        <Icon v-else name="menu" class="size-6" />
      </span>
      <span class="absolute -left-28 top-1/2 hidden -translate-y-1/2 rounded-2xl bg-white/90 px-3 py-2 text-xs font-extrabold text-tbn-dark shadow-soft ring-1 ring-black/10 backdrop-blur md:block">
        Acciones
      </span>
    </button>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Icon from './Icon.vue'

const open = ref(false)

function toggle() {
  open.value = !open.value
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  open.value = false
}

function goHash(hash) {
  if (!hash) return
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  open.value = false
}

function onKey(e) {
  if (e.key === 'Escape') open.value = false
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<style scoped>
.dock-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1rem;
  padding: 0.75rem 0.75rem;
  background: rgba(84, 177, 68, 0.08);
  color: rgba(34, 45, 37, 0.95);
  font-weight: 800;
  font-size: 0.8rem;
  line-height: 1;
  border: 1px solid rgba(84, 177, 68, 0.15);
  transition: transform 180ms ease, background 180ms ease;
}
.dock-btn:hover {
  transform: translateY(-2px);
  background: rgba(84, 177, 68, 0.12);
}
.dock-ico {
  width: 1.4rem;
  height: 1.4rem;
  display: grid;
  place-items: center;
  border-radius: 0.8rem;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.dock-fade-enter-active,
.dock-fade-leave-active {
  transition: opacity 160ms ease, transform 160ms ease;
}
.dock-fade-enter-from,
.dock-fade-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.98);
}

.dock-pulse {
  background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.35), transparent 60%);
  filter: blur(10px);
  opacity: 0;
  transition: opacity 220ms ease;
}
.group:hover .dock-pulse {
  opacity: 1;
}
</style>

