<template>
  <button @click="attempt">Listen</button>
  <router-view />
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { IbcSigningStargateClient, IIbcSigningStargateClient, TMergedSigner } from '@jackallabs/banshee'

  const banshee = ref<IIbcSigningStargateClient | null>(null)

  onMounted(async () => {
    if (!window.keplr) {
      throw new Error(' No keplr')
    }
    const signer = (await window.keplr.getOfflineSignerAuto(
      'jackal-1',
    )) as TMergedSigner

    banshee.value = await IbcSigningStargateClient.connectWithSigner(
      'http://localhost:8080',
      signer,
    )
  })

  function attempt() {
    if (banshee.value) {
      banshee.value.test('ws://localhost:59799')
    } else {
      console.warn('No banshee')
    }
  }
</script>

<style lang="scss">
@import '@/assets/css/style.css';

</style>
