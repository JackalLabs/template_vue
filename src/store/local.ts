import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLocalStore = defineStore('local', () => {
  const selectedWallet = ref('')

  function readSelectedWallet() {
    selectedWallet.value = readLocalStorage('selectedWallet') || ''
  }
  function saveSelectedWallet(source: any) {
    writeLocalStorage('selectedWallet', source)
  }

  function readLocalStorage(tag: any) {
    return localStorage.getItem(tag)
  }

  function writeLocalStorage(tag:any, value:any) {
    localStorage.setItem(tag, value)
  }

  //Modal popup
  const modalOpen = ref(0)
  const selectedName = ref('')
  const registeredRecently = ref('xXxSupahSleuthxXx')
  const loggedIn = ref(false)
  const callback = ref('/')
  const windowWidth = ref(0)

  function closeModal() {
    modalOpen.value = 0
    selectedName.value = ''
  }

  return {
    selectedWallet,
    readSelectedWallet,
    saveSelectedWallet,

    modalOpen,
    closeModal,
    selectedName,
    registeredRecently,
    loggedIn,
    callback,
    windowWidth
  }
})
