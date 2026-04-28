<template>
  <div>
    <header
      class="sticky top-0 z-50 border-b border-white/10 backdrop-blur transition-all duration-300"
      :class="headerShadowClass"
      :style="headerStyle"
    >
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <!-- LOGO -->
        <RouterLink to="/" class="group inline-flex items-center gap-2">
        <div
          class="grid size-9 place-items-center rounded-xl bg-white/10 text-white shadow-soft ring-1 ring-white/10 transition-all duration-300 group-hover:-translate-y-1"
        >
          <img
            :src="tbnLogo"
            alt="TBN Living"
            class="h-7 w-7 object-contain"
            loading="eager"
            decoding="async"
          />
        </div>
        <div class="leading-tight">
          <div class="text-sm font-extrabold text-white">TBN Living</div>
          <div class="text-xs font-semibold text-white/70">Bienestar & negocio</div>
        </div>
      </RouterLink>

      <!-- NAV DESKTOP -->
      <nav class="hidden items-center gap-1 md:flex">
        <div class="relative" @mouseenter="openMenu = 'comprar'" @mouseleave="openMenu = null">
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-extrabold transition-all duration-300"
            :class="openMenu === 'comprar' ? 'text-tbn-light bg-white/10' : 'text-white/90 hover:bg-white/10'"
          >
            Comprar
            <Icon name="chevronDown" class="size-4 opacity-80" />
          </button>

          <div
            v-show="openMenu === 'comprar'"
            class="absolute left-0 top-[calc(100%+10px)] w-[28rem] overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/10"
          >
            <div class="grid gap-3 p-4 sm:grid-cols-2">
              <RouterLink to="/productos" class="mm-item" @click="openMenu = null">
                <span class="mm-ico text-tbn-dark/80"><Icon name="bag" class="size-5" /></span>
                <span>
                  <span class="mm-title">Todos los productos</span>
                  <span class="mm-desc">Explora el catálogo completo.</span>
                </span>
              </RouterLink>
              <a href="#productos" class="mm-item" @click.prevent="goHash('#productos'); openMenu = null">
                <span class="mm-ico text-tbn-dark/80"><Icon name="sparkles" class="size-5" /></span>
                <span>
                  <span class="mm-title">Recomendados</span>
                  <span class="mm-desc">Lo más buscado esta semana.</span>
                </span>
              </a>
              <a href="#recursos" class="mm-item" @click.prevent="goHash('#recursos'); openMenu = null">
                <span class="mm-ico text-tbn-dark/80"><Icon name="book" class="size-5" /></span>
                <span>
                  <span class="mm-title">Formas de compra</span>
                  <span class="mm-desc">Guías y recursos (demo).</span>
                </span>
              </a>
              <button type="button" class="mm-item text-left" @click="openCart">
                <span class="mm-ico text-tbn-dark/80"><Icon name="cart" class="size-5" /></span>
                <span>
                  <span class="mm-title">Mi carrito</span>
                  <span class="mm-desc">Revisar y continuar.</span>
                </span>
              </button>
            </div>
            <div class="border-t border-black/5 bg-tbn-neutral px-4 py-3">
              <div class="flex items-center justify-between gap-3">
                <div class="text-xs font-extrabold text-tbn-dark/60">
                  Ubicación: <span class="text-tbn-dark">{{ locationLabel }}</span>
                </div>
                <button
                  type="button"
                  class="rounded-2xl bg-white px-3 py-2 text-xs font-extrabold text-tbn-dark ring-1 ring-black/10 transition hover:bg-slate-50"
                  @click="openLocation"
                >
                  Cambiar
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Inicio -->
        <RouterLink
          to="/"
          class="relative rounded-xl px-3 py-2 text-sm font-extrabold transition-all duration-300"
          :class="isActive('/') ? 'text-tbn-light' : 'text-white/90 hover:bg-white/10'"
        >
          Inicio
          <span class="absolute left-2 right-2 -bottom-1 h-[2px] rounded-full bg-tbn-light transition-all duration-300"
            :class="isActive('/') ? 'opacity-100' : 'opacity-0'"
          ></span>
        </RouterLink>

        <!-- Productos -->
        <RouterLink
          to="/productos"
          class="relative rounded-xl px-3 py-2 text-sm font-extrabold transition-all duration-300"
          :class="isActive('/productos') ? 'text-tbn-light' : 'text-white/90 hover:bg-white/10'"
        >
          Productos
          <span class="absolute left-2 right-2 -bottom-1 h-[2px] rounded-full bg-tbn-light transition-all duration-300"
            :class="isActive('/productos') ? 'opacity-100' : 'opacity-0'"
          ></span>
        </RouterLink>

        <!-- Negocio (submenu) -->
        <div class="relative" @mouseenter="openMenu = 'negocio'" @mouseleave="openMenu = null">
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-extrabold transition-all duration-300"
            :class="openMenu === 'negocio' ? 'text-tbn-light bg-white/10' : 'text-white/90 hover:bg-white/10'"
          >
            Negocio
            <Icon name="chevronDown" class="size-4 opacity-80" />
          </button>

          <div
            v-show="openMenu === 'negocio'"
            class="absolute left-0 top-[calc(100%+10px)] w-[28rem] overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/10"
          >
            <div class="grid gap-3 p-4 sm:grid-cols-2">
              <RouterLink to="/negocio" class="mm-item" @click="openMenu = null">
                <span class="mm-ico text-tbn-dark/80"><Icon name="rocket" class="size-5" /></span>
                <span>
                  <span class="mm-title">Negocio</span>
                  <span class="mm-desc">Visión, estrategia y crecimiento.</span>
                </span>
              </RouterLink>
              <RouterLink to="/negocio/crear-mi-negocio" class="mm-item" @click="openMenu = null">
                <span class="mm-ico text-tbn-dark/80"><Icon name="sparkles" class="size-5" /></span>
                <span>
                  <span class="mm-title">Crear mi negocio</span>
                  <span class="mm-desc">Onboarding y pasos iniciales.</span>
                </span>
              </RouterLink>
              <RouterLink to="/negocio/testimonios-distribuidores" class="mm-item" @click="openMenu = null">
                <span class="mm-ico text-tbn-dark/80"><Icon name="trophy" class="size-5" /></span>
                <span>
                  <span class="mm-title">Testimonios de distribuidores</span>
                  <span class="mm-desc">Historias reales (demo).</span>
                </span>
              </RouterLink>
              <a href="#recursos" class="mm-item" @click.prevent="goHash('#recursos'); openMenu = null">
                <span class="mm-ico text-tbn-dark/80"><Icon name="book" class="size-5" /></span>
                <span>
                  <span class="mm-title">Recursos</span>
                  <span class="mm-desc">Capacitación y herramientas.</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <!-- Recursos (submenu) -->
        <div class="relative" @mouseenter="openMenu = 'recursos'" @mouseleave="openMenu = null">
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-extrabold transition-all duration-300"
            :class="openMenu === 'recursos' ? 'text-tbn-light bg-white/10' : 'text-white/90 hover:bg-white/10'"
          >
            Recursos
            <Icon name="chevronDown" class="size-4 opacity-80" />
          </button>

          <div
            v-show="openMenu === 'recursos'"
            class="absolute left-0 top-[calc(100%+10px)] w-[32rem] overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/10"
          >
            <div class="grid gap-3 p-4 sm:grid-cols-2">
              <RouterLink to="/recursos" class="mm-item" @click="openMenu = null">
                <span class="mm-ico text-tbn-dark/80"><Icon name="book" class="size-5" /></span>
                <span>
                  <span class="mm-title">Recursos</span>
                  <span class="mm-desc">Capacitación y comunidad.</span>
                </span>
              </RouterLink>
              <RouterLink to="/recursos/fortalecer-mi-negocio" class="mm-item" @click="openMenu = null">
                <span class="mm-ico text-tbn-dark/80"><Icon name="sparkles" class="size-5" /></span>
                <span>
                  <span class="mm-title">Fortalecer mi negocio</span>
                  <span class="mm-desc">Hábitos y métricas.</span>
                </span>
              </RouterLink>
              <RouterLink to="/recursos/eventos" class="mm-item" @click="openMenu = null">
                <span class="mm-ico text-tbn-dark/80"><Icon name="chevronDown" class="size-5 rotate-[-90deg]" /></span>
                <span>
                  <span class="mm-title">Eventos</span>
                  <span class="mm-desc">Calendario (demo).</span>
                </span>
              </RouterLink>
              <RouterLink to="/recursos/reconocimientos" class="mm-item" @click="openMenu = null">
                <span class="mm-ico text-tbn-dark/80"><Icon name="trophy" class="size-5" /></span>
                <span>
                  <span class="mm-title">Reconocimientos</span>
                  <span class="mm-desc">Rankings (demo).</span>
                </span>
              </RouterLink>
              <RouterLink to="/recursos/campanas-e-incentivos" class="mm-item" @click="openMenu = null">
                <span class="mm-ico text-tbn-dark/80"><Icon name="sparkles" class="size-5" /></span>
                <span>
                  <span class="mm-title">Campañas e incentivos</span>
                  <span class="mm-desc">Metas y premios.</span>
                </span>
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- Testimonios -->
        <RouterLink
          to="/testimonios"
          class="relative rounded-xl px-3 py-2 text-sm font-extrabold transition-all duration-300"
          :class="isActive('/testimonios') ? 'text-tbn-light' : 'text-white/90 hover:bg-white/10'"
        >
          Testimonios
          <span class="absolute left-2 right-2 -bottom-1 h-[2px] rounded-full bg-tbn-light transition-all duration-300"
            :class="isActive('/testimonios') ? 'opacity-100' : 'opacity-0'"
          ></span>
        </RouterLink>
      </nav>

      <!-- ACTIONS DESKTOP -->
      <div class="hidden items-center gap-3 md:flex">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-extrabold text-white/90 transition-all duration-300 hover:bg-white/10"
          @click="searchOpen = true"
        >
          Buscar
        </button>
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-extrabold text-white/90 transition-all duration-300 hover:bg-white/10"
          @click="openLocation"
        >
          {{ locationShort }}
        </button>
        <RouterLink
          to="/negocio"
          class="inline-flex items-center gap-2 rounded-xl bg-tbn-light px-5 py-2 text-sm font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:brightness-95 active:translate-y-0"
        >
          Únete
        </RouterLink>
      </div>

      <!-- MOBILE BUTTON -->
      <button
        class="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-white ring-1 ring-white/15 transition hover:bg-white/10"
        @click="toggleMenu"
      >
        <svg v-if="!mobileOpen" viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg v-else viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>

    <!-- OVERLAY -->
    <div
      v-show="mobileOpen"
      class="fixed inset-0 z-40 bg-black/40 md:hidden"
      @click="mobileOpen = false"
    ></div>

    <!-- MOBILE MENU -->
    <div
      class="fixed top-16 left-0 right-0 z-[60] border-t border-white/10 transform transition-all duration-300 md:hidden shadow-2xl ring-1 ring-white/10 backdrop-blur-none bg-[rgba(34,45,37,0.98)]"
      :class="mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0 pointer-events-none'"
    >
      <div class="mx-auto max-w-7xl px-4 py-4">
        <div class="grid gap-2 max-h-[calc(100dvh-5rem)] overflow-auto pr-1">
          <button
            type="button"
            class="rounded-xl px-3 py-2 text-left text-sm font-extrabold text-white/90 transition hover:bg-white/10"
            @click="searchOpen = true; mobileOpen = false"
          >
            Buscar
          </button>
          <button
            type="button"
            class="rounded-xl px-3 py-2 text-left text-sm font-extrabold text-white/90 transition hover:bg-white/10"
            @click="openLocation(); mobileOpen = false"
          >
            Ubicación: {{ locationLabel }}
          </button>
          <RouterLink
            v-for="item in navMobile"
            :key="item.to"
            :to="item.to"
            class="rounded-xl px-3 py-2 text-sm font-extrabold text-white/90 transition hover:bg-white/10"
            @click="mobileOpen = false"
          >
            {{ item.label }}
          </RouterLink>

          <div class="mt-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              class="col-span-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-extrabold text-white text-center ring-1 ring-white/10"
              @click="openCart(); mobileOpen = false"
            >
              Mi carrito
            </button>
            <RouterLink
              to="/negocio"
              class="col-span-2 rounded-xl bg-tbn-light px-4 py-2 text-sm font-semibold text-white text-center"
              @click="mobileOpen = false"
            >
              Únete
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    </header>

    <LocationModal
      :open="locationOpen"
      :value="location"
      @close="locationOpen = false"
      @save="saveLocation"
    />
    <SearchModal
      :open="searchOpen"
      @close="searchOpen = false"
      @go="goHash"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useCart } from '../stores/cart'
import LocationModal from './LocationModal.vue'
import SearchModal from './SearchModal.vue'
import Icon from './Icon.vue'
import tbnLogo from '../assets/img/tbnlogo.png'

const mobileOpen = ref(false)
const scrollY = ref(0)
const heroHeight = ref(0)
const route = useRoute()
const cart = useCart()

const openMenu = ref(null)
const locationOpen = ref(false)
const searchOpen = ref(false)

const location = ref(loadLocation())

const navMobile = computed(() => [
  { label: 'Inicio', to: '/' },
  { label: 'Productos', to: '/productos' },
  { label: 'Negocio', to: '/negocio' },
  { label: 'Crear mi negocio', to: '/negocio/crear-mi-negocio' },
  { label: 'Testimonios de distribuidores', to: '/negocio/testimonios-distribuidores' },
  { label: 'Recursos', to: '/recursos' },
  { label: 'Fortalecer mi negocio', to: '/recursos/fortalecer-mi-negocio' },
  { label: 'Eventos', to: '/recursos/eventos' },
  { label: 'Reconocimientos', to: '/recursos/reconocimientos' },
  { label: 'Campañas e incentivos', to: '/recursos/campanas-e-incentivos' },
  { label: 'Testimonios', to: '/testimonios' },
])

// detectar ruta activa
const isActive = (path) => route.path === path

// toggle menú
const toggleMenu = () => {
  mobileOpen.value = !mobileOpen.value
}

function openCart() {
  cart.toggle(true)
  openMenu.value = null
}

function goHash(hash) {
  if (!hash) return
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function openLocation() {
  locationOpen.value = true
  openMenu.value = null
}

function loadLocation() {
  try {
    const raw = localStorage.getItem('tbn_location')
    if (!raw) return { country: 'MX', zip: '' }
    const parsed = JSON.parse(raw)
    return { country: parsed?.country || 'MX', zip: parsed?.zip || '' }
  } catch {
    return { country: 'MX', zip: '' }
  }
}

function saveLocation(v) {
  location.value = { country: v?.country || 'MX', zip: v?.zip || '' }
  try {
    localStorage.setItem('tbn_location', JSON.stringify(location.value))
  } catch {}
  locationOpen.value = false
}

const locationShort = computed(() => (location.value?.zip ? `CP ${location.value.zip}` : 'Ubicación'))
const locationLabel = computed(() => {
  const map = { MX: 'México', CO: 'Colombia', PE: 'Perú', CL: 'Chile', US: 'Estados Unidos' }
  const c = map[location.value?.country] || location.value?.country || 'MX'
  return location.value?.zip ? `${c} • CP ${location.value.zip}` : c
})

// efecto scroll
const handleScroll = () => {
  scrollY.value = window.scrollY || 0
}

function measureHero() {
  const el = document.querySelector('#inicio')
  if (!el) {
    heroHeight.value = 0
    return
  }
  const rect = el.getBoundingClientRect()
  // getBoundingClientRect es relativo al viewport; altura sí sirve.
  heroHeight.value = Math.max(0, Math.round(rect.height || 0))
}

// Transición: oscuro → transparente dentro del hero → oscuro al salir del hero
const headerChromeClass = computed(() => {
  const y = scrollY.value
  const h = heroHeight.value

  // Si no hay hero (otras rutas), siempre sólido.
  if (!h) return { alpha: 0.95, solid: true }

  // Mientras estás dentro del hero:
  // 0..220px: de 0.95 a 0.0 (oscuro → transparente)
  const fadeDistance = 220
  if (y <= fadeDistance) {
    const t = Math.max(0, Math.min(1, y / fadeDistance))
    // Nunca dejamos el fondo en 0, para que el texto no se pierda.
    const minAlpha = 0.22
    const alpha = Math.max(minAlpha, 0.95 * (1 - t))
    return { alpha, solid: false }
  }

  // Aún dentro del hero: mantenemos un tinte oscuro mínimo (no full transparente)
  const heroEnd = Math.max(0, h - 80)
  if (y < heroEnd) {
    return { alpha: 0.22, solid: false }
  }

  // Fuera del hero: sólido.
  return { alpha: 0.95, solid: true }
})

const headerStyle = computed(() => {
  // Importante: Tailwind NO puede compilar clases arbitrarias dinámicas.
  // Por eso controlamos el rgba por style inline (siempre aplica).
  const alpha = headerChromeClass.value.alpha
  return {
    backgroundColor: `rgba(34,45,37,${alpha})`,
  }
})

const headerShadowClass = computed(() => {
  return headerChromeClass.value.solid ? 'shadow-xl' : 'shadow-none'
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', measureHero)
  handleScroll()
  measureHero()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', measureHero)
})
</script>

<style scoped>
.mm-item {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  border-radius: 1.25rem;
  padding: 0.95rem;
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: transform 160ms ease, background 160ms ease;
}
.mm-item:hover {
  transform: translateY(-2px);
  background: rgba(84, 177, 68, 0.07);
}
.mm-ico {
  width: 2.25rem;
  height: 2.25rem;
  display: grid;
  place-items: center;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.06);
}
.mm-title {
  display: block;
  font-size: 0.9rem;
  font-weight: 900;
  color: rgba(34, 45, 37, 0.95);
}
.mm-desc {
  display: block;
  margin-top: 0.1rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: rgba(34, 45, 37, 0.6);
}
</style>