<template>
  <div class="nb-gallery" :style="S.root">
    <div v-if="options.label || options.description" :style="S.head">
      <span :style="S.label">
        <span v-if="options.required" style="color: #ef4444">*</span>
        {{ options.label }}
        <span :style="S.count">{{ countLabel }}</span>
      </span>
      <PruviousIconHelp v-if="options.description" v-pruvious-tooltip="description" :style="S.help" />
    </div>

    <div :style="S.actions">
      <label class="button button-white button-small" :style="[S.upload, disabled || uploading ? S.disabled : null]">
        <PruviousIconUpload :style="S.btnIcon" />
        Wgraj zdjęcia z komputera
        <input
          ref="fileInput"
          type="file"
          accept="image/*"
          multiple
          :style="S.fileInput"
          :disabled="disabled || uploading"
          @change="onFilesChosen"
        />
      </label>
      <button type="button" class="button button-white button-small" :disabled="disabled || uploading" @click="pickFromLibrary">
        Dodaj z biblioteki mediów
      </button>
      <button
        v-if="items.length"
        type="button"
        class="button button-white-red button-small"
        :disabled="disabled || uploading"
        @click="clearAll"
      >
        {{ confirmClear ? 'Na pewno usunąć wszystkie?' : 'Usuń wszystkie' }}
      </button>
    </div>

    <p v-if="uploading" :style="[S.hint, S.progress]">Wgrywanie zdjęć… {{ uploadDone }}/{{ uploadTotal }}</p>
    <p v-else-if="items.length > 1" :style="S.hint">Przeciągnij zdjęcie, aby zmienić kolejność. Pierwsze zdjęcie jest pierwsze na stronie.</p>
    <p v-else-if="!items.length" :style="S.hint">Brak zdjęć. Możesz zaznaczyć wiele plików naraz.</p>

    <div ref="gridEl" :style="S.grid">
      <div v-for="(item, i) in items" :key="item.uploadId + '-' + i" class="nb-gallery-tile" :style="S.tile" :data-index="i" :title="`Zdjęcie ${i + 1} — przeciągnij, aby przestawić`">
        <img v-if="thumbs[item.uploadId]" :src="thumbs[item.uploadId]" alt="" draggable="false" :style="S.img" />
        <span v-else :style="S.missing">…</span>
        <span :style="S.pos">{{ i + 1 }}</span>
        <button
          v-if="!disabled"
          type="button"
          class="nb-gallery-remove nb-no-drag"
          :style="S.remove"
          title="Usuń z galerii (zdjęcie zostaje w mediach)"
          @click="remove(i)"
        >
          ×
        </button>
      </div>
    </div>

    <PruviousInputError :errors="errors" :fieldKey="fieldKey" />
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useRuntimeConfig, watch } from '#imports'
import Sortable from 'sortablejs'
import { openMediaLibraryPopup } from '~~/node_modules/pruvious/dist/runtime/composables/dashboard/media'
import { pruviousToasterShow } from '~~/node_modules/pruvious/dist/runtime/composables/dashboard/toaster'
import { pruviousFetch } from '~~/node_modules/pruvious/dist/runtime/utils/fetch'

type Item = { uploadId: number; alt: string }

const props = defineProps<{
  modelValue: Item[] | null
  options: { label?: string; description?: string | string[]; required?: boolean; directory?: string }
  fieldKey?: string
  errors?: Record<string, string>
  disabled?: boolean
}>()
const emit = defineEmits<{ 'update:modelValue': [Item[]] }>()

const runtimeConfig = useRuntimeConfig()

// Wygląd wpisany w elementy: Pruvious nie wczytuje <style> z komponentów pól.
// Małe, subtelne kafelki (72 px), żeby galeria nie rozciągała formularza.
const S = {
  root: { display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' },
  head: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' },
  label: { fontSize: '0.8125rem', fontWeight: 500, color: '#111827' },
  count: { marginLeft: '0.25rem', color: '#9ca3af', fontWeight: 400 },
  help: { width: '1rem', height: '1rem', color: '#9ca3af', flexShrink: 0 },
  actions: { display: 'flex', flexWrap: 'wrap', gap: '0.4rem' },
  upload: { position: 'relative', cursor: 'pointer', overflow: 'hidden' },
  disabled: { opacity: 0.5, pointerEvents: 'none' },
  btnIcon: { width: '0.9rem', height: '0.9rem', marginRight: '0.35rem' },
  fileInput: { position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%' },
  hint: { margin: 0, fontSize: '0.75rem', color: '#9ca3af' },
  progress: { color: '#a9541f', fontWeight: 600 },
  grid: { display: 'flex', flexWrap: 'wrap', gap: '0.375rem' },
  tile: {
    position: 'relative', width: '72px', height: '72px', flexShrink: 0, overflow: 'hidden',
    border: '1px solid #e5e7eb', borderRadius: '0.375rem', background: '#f3f4f6', cursor: 'grab', userSelect: 'none',
  },
  img: { display: 'block', width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' },
  missing: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#9ca3af' },
  pos: {
    position: 'absolute', left: '3px', bottom: '3px', padding: '0 5px', borderRadius: '999px',
    background: 'rgba(17, 24, 39, 0.6)', color: '#fff', fontSize: '10px', fontWeight: 600, lineHeight: '15px',
  },
  remove: {
    position: 'absolute', top: '3px', right: '3px', width: '18px', height: '18px', border: 'none', borderRadius: '50%',
    background: 'rgba(17, 24, 39, 0.6)', color: '#fff', fontSize: '13px', lineHeight: '18px', cursor: 'pointer', padding: 0,
  },
} as const
const items = computed<Item[]>(() => (Array.isArray(props.modelValue) ? props.modelValue : []))
const description = computed(() => [props.options.description ?? []].flat().join('\n'))
const countLabel = computed(() => {
  const n = items.value.length
  const last = n % 10
  const lastTwo = n % 100
  const word = n === 1 ? 'zdjęcie' : last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14) ? 'zdjęcia' : 'zdjęć'
  return `(${n} ${word})`
})

// Miniatury: adresy plików dla wszystkich zdjęć w galerii.
const thumbs = ref<Record<number, string>>({})
async function loadThumbs() {
  const missing = items.value.map((i) => i.uploadId).filter((id) => !thumbs.value[id])
  for (let start = 0; start < missing.length; start += 100) {
    const ids = missing.slice(start, start + 100)
    const response = await pruviousFetch('collections/uploads', {
      query: { where: `id[in][${ids.join(',')}]`, select: 'id,directory,filename', perPage: 100 },
    } as any)
    if (response.success) {
      for (const upload of (response.data as any).records) {
        thumbs.value[upload.id] = runtimeConfig.public.pruvious.uploadsBase + upload.directory + upload.filename
      }
    }
  }
}
watch(items, loadThumbs, { immediate: true })

function update(next: Item[]) {
  emit('update:modelValue', next)
}

function remove(index: number) {
  update(items.value.filter((_, i) => i !== index))
}

const confirmClear = ref(false)
function clearAll() {
  if (!confirmClear.value) {
    confirmClear.value = true
    setTimeout(() => (confirmClear.value = false), 4000)
    return
  }
  confirmClear.value = false
  update([])
}

function pickFromLibrary() {
  openMediaLibraryPopup({
    pickCallback: (upload: any) => {
      if (!upload?.id) return
      update([...items.value, { uploadId: upload.id, alt: '' }])
    },
  } as any)
}

// Wgrywanie wielu plików naraz — po kolei, żeby było widać postęp.
const fileInput = ref<HTMLInputElement | null>(null)
const uploading = ref(false)
const uploadDone = ref(0)
const uploadTotal = ref(0)
async function onFilesChosen(event: Event) {
  const files = Array.from((event.target as HTMLInputElement).files ?? [])
  if (!files.length) return
  uploading.value = true
  uploadDone.value = 0
  uploadTotal.value = files.length
  const added: Item[] = []
  for (const file of files) {
    const body = new FormData()
    body.append('$file', file)
    body.append('directory', props.options.directory || 'galerie/')
    const response = await pruviousFetch('collections/uploads', { method: 'post', body } as any)
    if (response.success && (response.data as any)?.id) {
      const upload = response.data as any
      thumbs.value[upload.id] = runtimeConfig.public.pruvious.uploadsBase + upload.directory + upload.filename
      added.push({ uploadId: upload.id, alt: '' })
    } else {
      const reason = typeof response.error === 'object' ? Object.values(response.error ?? {}).join(' ') : response.error
      pruviousToasterShow({ message: `**${file.name}:** ${reason || 'nie udało się wgrać'}`, type: 'error' })
    }
    uploadDone.value++
  }
  update([...items.value, ...added])
  uploading.value = false
  if (fileInput.value) fileInput.value.value = ''
  if (added.length) pruviousToasterShow({ message: `Dodano ${added.length} zdjęć do galerii. Pamiętaj, aby zapisać.` })
}

// Zmiana kolejności przeciąganiem — jak w listach.
const gridEl = ref<HTMLElement | null>(null)
let sortable: Sortable | null = null
onMounted(async () => {
  await nextTick()
  if (!gridEl.value) return
  sortable = Sortable.create(gridEl.value, {
    animation: 150,
    filter: '.nb-no-drag',
    preventOnFilter: false,
    forceFallback: true,
    fallbackTolerance: 5,
    disabled: !!props.disabled,
    onEnd: (event) => {
      const { oldIndex, newIndex, item, from } = event
      if (oldIndex === undefined || newIndex === undefined || oldIndex === newIndex) return
      // Sortable przesunął element w DOM — cofamy to i pozwalamy Vue przerysować listę.
      from.removeChild(item)
      from.insertBefore(item, from.children[oldIndex] ?? null)
      const next = [...items.value]
      const [moved] = next.splice(oldIndex, 1)
      next.splice(newIndex, 0, moved!)
      update(next)
    },
  })
})
onBeforeUnmount(() => sortable?.destroy())
</script>

<!-- Wygląd galerii: w app/dashboard/Base.vue (Pruvious nie wczytuje <style> z komponentów pól). -->
