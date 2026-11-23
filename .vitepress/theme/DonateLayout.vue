<script setup>
import { ref, onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import PrimaryTheme from 'primary-vitepress'
import DonateModal from './components/DonateModal.vue'

// Fallback to VitePress standard layout if PrimaryTheme doesn't expose one
const Layout = PrimaryTheme.Layout || DefaultTheme.Layout

const showPopup = ref(false)

onMounted(() => {
  const hasSeenPopup = localStorage.getItem('donated_popup_seen')
  if (!hasSeenPopup) {
    setTimeout(() => {
      showPopup.value = true
    }, 3000)
  }
})

const handleClose = () => {
  showPopup.value = false
  localStorage.setItem('donated_popup_seen', 'true')
}
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <DonateModal :is-open="showPopup" @close="handleClose" />
    </template>
  </Layout>
</template>
