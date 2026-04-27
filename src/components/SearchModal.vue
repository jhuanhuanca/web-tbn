<template>
  <div>
    <Transition name="s-fade">
      <div v-if="open" class="fixed inset-0 z-[90] bg-black/40 backdrop-blur-[1px]" @click="$emit('close')"></div>
    </Transition>

    <Transition name="s-pop">
      <div v-if="open" class="fixed inset-0 z-[100] grid place-items-start p-4 pt-24" role="dialog" aria-modal="true">
        <div class="mx-auto w-full max-w-3xl overflow-hidden rounded-[1.6rem] bg-white shadow-2xl ring-1 ring-black/10">
          <div class="flex items-center gap-3 border-b border-black/5 px-5 py-4">
            <div class="grid size-11 place-items-center rounded-2xl bg-tbn-neutral ring-1 ring-black/5 text-tbn-dark">
              <Icon name="search" class="size-6" />
            </div>
            <div class="min-w-0 flex-1">
              <input
                ref="inputEl"
                v-model="q"
                class="h-12 w-full rounded-2xl bg-white px-4 text-sm font-extrabold text-tbn-dark ring-1 ring-black/10 outline-none transition focus:ring-2 focus:ring-tbn-light"
                placeholder="Buscar productos, recursos, secciones…"
                @keydown.esc="$emit('close')"
              />
              <div class="mt-1 text-xs font-semibold text-tbn-dark/60">Enter para ir • Esc para cerrar</div>
            </div>
            <button
              type="button"
              class="grid size-10 place-items-center rounded-2xl bg-black/5 text-tbn-dark ring-1 ring-black/10 transition hover:bg-black/10"
              @click="$emit('close')"
              aria-label="Cerrar"
            >
              <Icon name="x" class="size-5" />
            </button>
          </div>

          <div class="px-5 py-4">
            <div class="text-xs font-extrabold tracking-wide text-tbn-dark/60">SUGERENCIAS</div>
            <div class="mt-3 grid gap-2 sm:grid-cols-2">
              <button type="button" class="s-item" @click="go('#productos')">
                <Icon name="bag" class="size-5 text-tbn-dark/80" />
                Productos
              </button>
              <button type="button" class="s-item" @click="go('#negocio')">
                <Icon name="rocket" class="size-5 text-tbn-dark/80" />
                Negocio
              </button>
              <button type="button" class="s-item" @click="go('#recursos')">
                <Icon name="book" class="size-5 text-tbn-dark/80" />
                Recursos
              </button>
              <button type="button" class="s-item" @click="go('#testimonios')">
                <Icon name="trophy" class="size-5 text-tbn-dark/80" />
                Testimonios
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'
import Icon from './Icon.vue'

const props = defineProps({ open: { type: Boolean, default: false } })
const emit = defineEmits(['close', 'go'])

const q = ref('')
const inputEl = ref(null)

watch(
  () => props.open,
  async (v) => {
    if (!v) return
    q.value = ''
    await nextTick()
    inputEl.value?.focus?.()
  }
)

function go(hash) {
  emit('go', hash)
  emit('close')
}

onMounted(() => {})
</script>

<style scoped>
.s-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1rem;
  padding: 0.9rem 0.9rem;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.08);
  font-weight: 900;
  color: rgba(34, 45, 37, 0.95);
  transition: transform 160ms ease, background 160ms ease;
}
.s-item:hover {
  transform: translateY(-2px);
  background: rgba(84, 177, 68, 0.08);
}

.s-fade-enter-active,
.s-fade-leave-active {
  transition: opacity 160ms ease;
}
.s-fade-enter-from,
.s-fade-leave-to {
  opacity: 0;
}

.s-pop-enter-active,
.s-pop-leave-active {
  transition: transform 180ms ease, opacity 180ms ease;
}
.s-pop-enter-from,
.s-pop-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.98);
}
</style>

