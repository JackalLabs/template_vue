<template>
  <!-- <div class="modal-background"> -->
  <div v-if="local.modalOpen > 0" class="modal-background">
    <div class="modal">
      <button id="closebtn" class="flex" @click="local.closeModal">
        <XIcon />
      </button>

      <!-- MODAL EXAMPLE-->
      <div
        id="example-modal"
        v-if="local.modalOpen == 1"
        class="flex-col each-modal"
      >
        <h1>Example Modal</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useLocalStore } from '@/store/local'
  import XIcon from '@/assets/svg/XIcon.vue'

  const local = useLocalStore()
</script>

<style>
  .modal-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100dvh;

    background-color: rgba(0, 0, 0, 0.5);

    z-index: 100;
  }

  .modal {
    min-width: 582px;
    min-height: 140px;
    max-height: 80dvh;
    max-width: 35dvw;
    background-color: #2c2d23;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    text-align: center;
    color: var(--clr-cream);

    padding-top: 2rem;
    padding-bottom: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;
  }
  .each-modal {
    max-height: 70dvh;
    gap: 1rem;
  }

  /* Close Btn */
  #closebtn {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    border: none;
    padding: 5px;
    height: min-content;
    background-color: var(--clr-cream);
  }
  #closebtn:hover {
    background-color: var(--clr-yellow);
  }
  #closebtn > svg {
    width: 1rem;
    height: 1rem;
  }

  #closebtn > svg > path {
    fill: var(--clr-off-black);
  }
  #closebtn > svg > path {
    fill: var(--clr-off-black);
  }
</style>
