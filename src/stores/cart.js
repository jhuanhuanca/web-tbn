import { computed, reactive } from 'vue'

const state = reactive({
  open: false,
  items: [],
})

function normalizeProduct(p) {
  if (!p || typeof p !== 'object') return null
  if (p.id == null) return null
  return {
    id: p.id,
    name: String(p.name || 'Producto'),
    price: Number(p.price || 0),
    image: p.image || null,
    tag: p.tag || null,
  }
}

function add(product, qty = 1) {
  const p = normalizeProduct(product)
  if (!p) return

  const q = Math.max(1, Number(qty || 1))
  const existing = state.items.find((i) => i.id === p.id)
  if (existing) {
    existing.qty += q
  } else {
    state.items.push({ ...p, qty: q })
  }
}

function remove(id) {
  const idx = state.items.findIndex((i) => i.id === id)
  if (idx >= 0) state.items.splice(idx, 1)
}

function setQty(id, qty) {
  const item = state.items.find((i) => i.id === id)
  if (!item) return
  const q = Number(qty)
  if (!Number.isFinite(q) || q <= 0) {
    remove(id)
    return
  }
  item.qty = Math.round(q)
}

function clear() {
  state.items.splice(0, state.items.length)
}

function toggle(open) {
  if (typeof open === 'boolean') state.open = open
  else state.open = !state.open
}

const count = computed(() => state.items.reduce((acc, i) => acc + (Number(i.qty) || 0), 0))
const subtotal = computed(() =>
  state.items.reduce((acc, i) => acc + (Number(i.price) || 0) * (Number(i.qty) || 0), 0)
)

export function useCart() {
  return {
    state,
    count,
    subtotal,
    add,
    remove,
    setQty,
    clear,
    toggle,
  }
}

