<template>
  <div>
    <!-- overlay -->
    <Transition name="cart-fade">
      <div
        v-if="cart.state.open"
        class="fixed inset-0 z-[70] bg-black/40 backdrop-blur-[1px]"
        @click="cart.toggle(false)"
      ></div>
    </Transition>

    <!-- drawer -->
    <Transition name="cart-slide">
      <aside
        v-if="cart.state.open"
        class="fixed right-0 top-0 z-[80] h-dvh w-full max-w-[26rem] bg-white shadow-2xl ring-1 ring-black/10"
        role="dialog"
        aria-modal="true"
        aria-label="Carrito"
      >
        <div class="flex h-full flex-col">
          <div class="flex items-start justify-between gap-4 border-b border-black/5 px-5 py-4">
            <div class="min-w-0">
              <div class="text-xs font-extrabold tracking-wide text-tbn-dark/60">CARRITO</div>
              <div class="mt-1 text-xl font-extrabold text-tbn-dark">Tus productos</div>
              <div class="mt-1 text-xs font-semibold text-tbn-dark/60">
                {{ cart.count }} item<span v-if="cart.count !== 1">s</span>
              </div>
            </div>

            <button
              type="button"
              class="grid size-10 place-items-center rounded-2xl bg-black/5 text-tbn-dark ring-1 ring-black/10 transition hover:bg-black/10"
              @click="cart.toggle(false)"
              aria-label="Cerrar"
            >
              <Icon name="x" class="size-5" />
            </button>
          </div>

          <div class="flex-1 overflow-auto px-5 py-4">
            <div v-if="cart.state.items.length === 0" class="rounded-3xl bg-tbn-neutral p-6 ring-1 ring-black/5">
              <div class="text-sm font-extrabold text-tbn-dark">Tu carrito está vacío</div>
              <p class="mt-2 text-sm text-tbn-dark/70">
                Agrega productos para ver el resumen aquí.
              </p>
              <button
                type="button"
                class="mt-4 inline-flex items-center justify-center rounded-2xl bg-tbn-light px-5 py-3 text-sm font-extrabold text-white shadow-soft ring-1 ring-black/10 transition hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0"
                @click="goProducts"
              >
                Ver productos
              </button>
            </div>

            <div v-else class="grid gap-3">
              <div
                v-for="i in cart.state.items"
                :key="i.id"
                class="group flex gap-4 rounded-3xl bg-white p-4 ring-1 ring-black/5 transition hover:shadow-lg"
              >
                <div class="relative size-16 shrink-0 overflow-hidden rounded-2xl bg-tbn-neutral ring-1 ring-black/5">
                  <img v-if="i.image" :src="i.image" :alt="i.name" class="h-full w-full object-cover" loading="lazy" />
                </div>

                <div class="min-w-0 flex-1">
                  <div class="flex items-start justify-between gap-3">
                    <div class="min-w-0">
                      <div class="truncate text-sm font-extrabold text-tbn-dark">{{ i.name }}</div>
                      <div class="mt-1 flex flex-wrap items-center gap-2">
                        <span
                          v-if="i.tag"
                          class="inline-flex rounded-full bg-tbn-light/10 px-2 py-1 text-[11px] font-extrabold text-tbn-dark ring-1 ring-tbn-light/20"
                        >
                          {{ i.tag }}
                        </span>
                        <span class="text-xs font-semibold text-tbn-dark/60">{{ currency(i.price) }}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      class="grid size-9 shrink-0 place-items-center rounded-2xl bg-black/5 text-tbn-dark/80 ring-1 ring-black/10 transition hover:bg-black/10"
                      @click="cart.remove(i.id)"
                      aria-label="Eliminar"
                      title="Eliminar"
                    >
                      <Icon name="trash" class="size-5" />
                    </button>
                  </div>

                  <div class="mt-3 flex items-center justify-between gap-3">
                    <div class="inline-flex items-center gap-2 rounded-2xl bg-tbn-neutral p-1 ring-1 ring-black/5">
                      <button
                        type="button"
                        class="grid size-9 place-items-center rounded-xl bg-white text-tbn-dark ring-1 ring-black/5 transition hover:bg-slate-50"
                        @click="cart.setQty(i.id, i.qty - 1)"
                        aria-label="Disminuir"
                      >
                        −
                      </button>
                      <input
                        :value="i.qty"
                        inputmode="numeric"
                        class="h-9 w-12 rounded-xl bg-transparent text-center text-sm font-extrabold text-tbn-dark outline-none"
                        @input="onQtyInput(i.id, $event)"
                        aria-label="Cantidad"
                      />
                      <button
                        type="button"
                        class="grid size-9 place-items-center rounded-xl bg-white text-tbn-dark ring-1 ring-black/5 transition hover:bg-slate-50"
                        @click="cart.setQty(i.id, i.qty + 1)"
                        aria-label="Aumentar"
                      >
                        +
                      </button>
                    </div>

                    <div class="text-sm font-extrabold text-tbn-dark">
                      {{ currency(i.price * i.qty) }}
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="mt-2 inline-flex items-center justify-center rounded-2xl bg-black/5 px-5 py-3 text-sm font-extrabold text-tbn-dark ring-1 ring-black/10 transition hover:bg-black/10"
                @click="cart.clear()"
              >
                Vaciar carrito
              </button>
            </div>
          </div>

          <div class="border-t border-black/5 px-5 py-4">
            <div class="flex items-center justify-between text-sm">
              <span class="font-semibold text-tbn-dark/70">Subtotal</span>
              <span class="font-extrabold text-tbn-dark">{{ currency(cart.subtotal) }}</span>
            </div>
            <p class="mt-1 text-xs text-tbn-dark/60">
              Demo: aquí iría tu checkout real (envío, impuestos, pago).
            </p>

            <button
              type="button"
              class="mt-4 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-tbn-light px-6 text-sm font-extrabold text-white shadow-soft ring-1 ring-black/10 transition hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0 disabled:opacity-60 disabled:hover:translate-y-0"
              :disabled="cart.state.items.length === 0"
              @click="checkout"
            >
              Continuar
            </button>
          </div>
        </div>
      </aside>
    </Transition>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useCart } from '../stores/cart'
import Icon from './Icon.vue'

const router = useRouter()
const cart = useCart()

function currency(value) {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(Number(value || 0))
}

function onQtyInput(id, e) {
  const raw = String(e?.target?.value || '').replace(/[^\d]/g, '')
  cart.setQty(id, raw ? Number(raw) : 0)
}

function goProducts() {
  router.push('/productos')
  cart.toggle(false)
}

function checkout() {
  window.alert('Checkout demo: aquí conectarías pago real.')
}
</script>

<style scoped>
.cart-fade-enter-active,
.cart-fade-leave-active {
  transition: opacity 160ms ease;
}
.cart-fade-enter-from,
.cart-fade-leave-to {
  opacity: 0;
}

.cart-slide-enter-active,
.cart-slide-leave-active {
  transition: transform 220ms ease, opacity 220ms ease;
}
.cart-slide-enter-from,
.cart-slide-leave-to {
  opacity: 0;
  transform: translateX(14px);
}
</style>

