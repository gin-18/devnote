<script setup lang="ts">
import { ref, onBeforeUnmount, onMounted, nextTick } from 'vue'

const parentRef = ref<HTMLElement | null>(null)
const childRef = ref<HTMLElement | null>(null)

const x = ref(0)
const y = ref(0)

let dragging = false
let pointerId: number | null = null
let offsetX = 0
let offsetY = 0

// 位置信息
const clientXInfo = ref()
const clientYInfo = ref()
const offsetXInfo = ref()
const offsetYInfo = ref()
const parentRectInfo = ref()
const childRectInfo = ref()

function clamp(v: number, a: number, b: number) {
  return Math.min(Math.max(v, a), b)
}

function onPointerDown(e: PointerEvent) {
  if (!parentRef.value || !childRef.value) return
  // only left button or primary pointer
  if (e.button && e.button !== 0) return

  dragging = true
  pointerId = e.pointerId

  const parentRect = parentRef.value.getBoundingClientRect()
  const childRect = childRef.value.getBoundingClientRect()

  offsetX = e.clientX - childRect.left
  offsetY = e.clientY - childRect.top

  clientXInfo.value = e.clientX
  clientYInfo.value = e.clientY
  offsetXInfo.value = e.offsetX
  offsetYInfo.value = e.offsetY
  parentRectInfo.value = parentRect
  childRectInfo.value = childRect

  // set pointer capture so we continue to receive events
  try {
    childRef.value.setPointerCapture(pointerId)
  } catch {}

  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
  window.addEventListener('pointercancel', onPointerUp)
}

function onPointerMove(e: PointerEvent) {
  if (!dragging || pointerId !== e.pointerId) return
  if (!parentRef.value || !childRef.value) return

  const parentRect = parentRef.value.getBoundingClientRect()
  const childRect = childRef.value.getBoundingClientRect()

  const relX = e.clientX - parentRect.left - offsetX
  const relY = e.clientY - parentRect.top - offsetY

  const maxX = parentRect.width - childRect.width
  const maxY = parentRect.height - childRect.height

  clientXInfo.value = e.clientX
  clientYInfo.value = e.clientY
  offsetXInfo.value = e.offsetX
  offsetYInfo.value = e.offsetY
  parentRectInfo.value = parentRect
  childRectInfo.value = childRect

  x.value = clamp(relX, 0, Math.max(0, maxX))
  y.value = clamp(relY, 0, Math.max(0, maxY))

  e.preventDefault()
}

function onPointerUp(e: PointerEvent) {
  if (!dragging) return
  dragging = false
  if (childRef.value && pointerId !== null) {
    try {
      childRef.value.releasePointerCapture(pointerId)
    } catch {}
  }
  pointerId = null
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
  window.removeEventListener('pointercancel', onPointerUp)
}

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
  window.removeEventListener('pointercancel', onPointerUp)
})

function centerChild() {
  if (!parentRef.value || !childRef.value) return
  const parentRect = parentRef.value.getBoundingClientRect()
  const childRect = childRef.value.getBoundingClientRect()
  const cx = (parentRect.width - childRect.width) / 2
  const cy = (parentRect.height - childRect.height) / 2
  x.value = clamp(cx, 0, Math.max(0, parentRect.width - childRect.width))
  y.value = clamp(cy, 0, Math.max(0, parentRect.height - childRect.height))
}

onMounted(() => {
  // wait for DOM to be painted so sizes are correct
  nextTick().then(() => centerChild())
})
</script>

<template>
  <div ref="parentRef" class="parent">
    <div ref="childRef" class="child" :style="{ left: x + 'px', top: y + 'px' }" @pointerdown="onPointerDown">
      drag me
    </div>
  </div>

  <div class="info-container">
    <div class="info-item">
      <span>e.clientX：{{ clientXInfo }}</span>
      <span>e.clientY：{{ clientYInfo }}</span>
    </div>
    <div class="info-item">
      <span>e.offsetX：{{ offsetXInfo }}</span>
      <span>e.offsetY：{{ offsetYInfo }}</span>
    </div>
    <div>parent rect：{{ parentRectInfo }}</div>
    <div>child rect：{{ childRectInfo }}</div>
  </div>
</template>

<style scoped>
.parent {
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 4px;
  background: #eba0ac;
  overflow: hidden;
}

.child {
  position: absolute;
  left: 0;
  top: 0;
  padding: 2px 4px;
  border-radius: 4px;
  color: #eff1f5;
  background: #1e66f5;
  cursor: grab;
  user-select: none;
  touch-action: none;
}

.child:active {
  cursor: grabbing;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-item {
  display: flex;
  justify-content: space-between;
}
</style>
