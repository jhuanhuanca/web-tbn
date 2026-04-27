<template>
  <div>
    <Transition name="loc-fade">
      <div v-if="open" class="fixed inset-0 z-[90] bg-black/40 backdrop-blur-[1px]" @click="$emit('close')"></div>
    </Transition>

    <Transition name="loc-pop">
      <div v-if="open" class="fixed inset-0 z-[100] grid place-items-center p-4" role="dialog" aria-modal="true">
        <div class="w-full max-w-xl overflow-hidden rounded-[1.6rem] bg-white shadow-2xl ring-1 ring-black/10">
          <div class="flex items-start justify-between gap-4 border-b border-black/5 px-6 py-5">
            <div>
              <div class="text-xs font-extrabold tracking-wide text-tbn-dark/60">UBICACIÓN</div>
              <div class="mt-1 text-xl font-extrabold text-tbn-dark">Elige tu ubicación</div>
              <p class="mt-1 text-sm text-tbn-dark/70">
                Esto sirve para personalizar la experiencia (demo).
              </p>
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

          <div class="px-6 py-5">
            <div class="grid gap-4 sm:grid-cols-2">
              <label class="grid gap-2">
                <span class="text-xs font-extrabold text-tbn-dark/60">País</span>
                <select
                  v-model="draft.country"
                  class="h-12 rounded-2xl bg-white px-4 text-sm font-semibold text-tbn-dark ring-1 ring-black/10 outline-none transition focus:ring-2 focus:ring-tbn-light"
                >
                  <option v-for="c in countries" :key="c.code" :value="c.code">{{ c.label }}</option>
                </select>
              </label>

              <label class="grid gap-2">
                <span class="text-xs font-extrabold text-tbn-dark/60">Código postal</span>
                <input
                  v-model="draft.zip"
                  inputmode="numeric"
                  class="h-12 rounded-2xl bg-white px-4 text-sm font-semibold text-tbn-dark ring-1 ring-black/10 outline-none transition focus:ring-2 focus:ring-tbn-light"
                  placeholder="Ej. 44100"
                />
              </label>
            </div>

            <div class="mt-5 rounded-3xl bg-tbn-neutral p-4 ring-1 ring-black/5">
              <div class="text-xs font-extrabold text-tbn-dark/60">Vista previa</div>
              <div class="mt-2 text-sm font-extrabold text-tbn-dark">
                {{ countryLabel }} <span class="text-tbn-dark/60">•</span> {{ zipLabel }}
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2 border-t border-black/5 px-6 py-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              class="inline-flex h-12 items-center justify-center rounded-2xl bg-black/5 px-5 text-sm font-extrabold text-tbn-dark ring-1 ring-black/10 transition hover:bg-black/10"
              @click="$emit('close')"
            >
              Cancelar
            </button>
            <button
              type="button"
              class="inline-flex h-12 items-center justify-center rounded-2xl bg-tbn-light px-6 text-sm font-extrabold text-white shadow-soft ring-1 ring-black/10 transition hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0"
              @click="save"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { computed, reactive, watch } from 'vue'
import Icon from './Icon.vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  value: { type: Object, default: () => ({ country: 'MX', zip: '' }) },
})
const emit = defineEmits(['close', 'save'])

const countries = [
  { code: 'MX', label: 'México' },
  { code: 'CO', label: 'Colombia' },
  { code: 'PE', label: 'Perú' },
  { code: 'CL', label: 'Chile' },
  { code: 'US', label: 'Estados Unidos' },
]

const draft = reactive({ country: 'MX', zip: '' })

watch(
  () => props.open,
  (v) => {
    if (!v) return
    draft.country = props.value?.country || 'MX'
    draft.zip = props.value?.zip || ''
  },
  { immediate: true }
)

const countryLabel = computed(() => countries.find((c) => c.code === draft.country)?.label || draft.country)
const zipLabel = computed(() => (draft.zip ? `CP ${draft.zip}` : 'Sin CP'))

function save() {
  emit('save', { country: draft.country, zip: String(draft.zip || '').trim() })
}
</script>

<style scoped>
.loc-fade-enter-active,
.loc-fade-leave-active {
  transition: opacity 160ms ease;
}
.loc-fade-enter-from,
.loc-fade-leave-to {
  opacity: 0;
}

.loc-pop-enter-active,
.loc-pop-leave-active {
  transition: transform 180ms ease, opacity 180ms ease;
}
.loc-pop-enter-from,
.loc-pop-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.98);
}
</style>

