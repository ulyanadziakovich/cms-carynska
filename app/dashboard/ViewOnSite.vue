<template>
  <a v-if="href" :href="href" target="_blank" rel="noopener" class="button button-white" title="Otwiera tę stronę w nowej karcie (zapisz zmiany przed podglądem)">
    <PruviousIconExternalLink class="cs-view-icon" />
    Zobacz na stronie
  </a>
</template>

<script setup lang="ts">
// Przycisk „Zobacz na stronie” — otwiera podstronę, której dotyczy formularz.
import { computed, useRoute, useRuntimeConfig } from '#imports'
import formUrls from '../config/formUrls.json'

const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const href = computed(() => {
  const collection = String(route.path).split('/collections/')[1]?.split('/')[0] ?? ''
  const path = (formUrls as Record<string, string | null>)[collection]
  return path ? String(runtimeConfig.public.siteUrl).replace(/\/$/, '') + path : ''
})
</script>

<style scoped>
.cs-view-icon { width: 1rem; height: 1rem; margin-right: 0.35rem; }
</style>
