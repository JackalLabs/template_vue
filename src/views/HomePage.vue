<template>
  <PopupModal />
  <div class="flex-col">
    <h1>Jackal Template</h1>
    <div>
      <button @click="openModal" class="btn">OPEN MODAL</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import PopupModal from '@/components/PopupModal.vue'
  import { useLocalStore } from '@/store/local'
  import { onMounted } from 'vue'
  import { toast } from 'vue3-toastify'

  const local = useLocalStore()
  function openModal() {
    local.modalOpen = 1
  }
  onMounted(() => {
    toast.success('welcome!')
  })
</script>

<style lang="scss"></style>
