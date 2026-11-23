<script setup>
import { ref } from 'vue'

const props = defineProps({
  isOpen: Boolean
})
const emit = defineEmits(['close'])

const closePopup = () => {
  emit('close')
}
</script>

<template>
  <div v-if="isOpen" class="modal-backdrop" @click.self="closePopup">
    <div class="modal-content">
      <button class="close-btn" @click="closePopup" aria-label="Close modal">&times;</button>
      <h2 class="title">Aidez FICHES ❤️</h2>
      <p>Fiches me prend beaucoup de temps, et la plupart de mes fiches sont faites pour vous !</p>
      <p>Un peu d'aide de votre part ne serait pas de refus :)</p>
      <div class="donation-actions">
        <!-- Replace with your actual donation links -->
        <a href="https://github.com/sponsors/Funasitien" target="_blank" class="donate-btn github">
          GitHub Sponsors
        </a>
        <a href="https://ko-fi.com/Funasitien" target="_blank" class="donate-btn kofi">
          Ko-Fi
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
    font-size: 1.6rem;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(6px);
}

.modal-content {
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  padding: 2rem;
  border-radius: var(--editor-radius, 8px);
  width: 90%;
  max-width: 400px;
  box-shadow: var(--primary-shadow);
  position: relative;
  text-align: center;
}

.modal-content h2 {
  color: var(--vp-c-text-1);
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-bottom: 0.75rem;
}

.modal-content p {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  line-height: 1.5;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--vp-c-text-3);
  transition: color 0.15s ease;
}

.close-btn:hover {
  color: var(--vp-c-text-1);
}

.donation-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 1.75rem;
}

.donate-btn {
  padding: 10px 16px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.donate-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Uses your brand and secondary accent variables */
.donate-btn.github {
  background-color: var(--vp-c-brand-1);
  color: var(--vp-c-bg-alt);
}

.donate-btn.kofi {
  background-color: var(--vp-c-brand-2);
  color: #fff;
}
</style>
