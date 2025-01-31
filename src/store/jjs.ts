import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  ClientHandler,
  IClientHandler,
  IRnsHandler,
  IStorageHandler,
  TWalletExtensionNames
} from '@jackallabs/jackal.js'
import { TSelectedWallet } from '@/types/misc'

import { mainnet } from '@/store/configs'

export const useJackalStore = defineStore('jackal', () => {
  const address = ref('')
  const primaryName = ref('')
  const allMyNames = ref<any>([])
  const client = ref<IClientHandler | null>(null)
  const storage = ref<IStorageHandler | null>(null)
  const rns = ref<IRnsHandler | null>(null)

  async function refreshPrimaryName() {
    if (rns.value) {
      const res = await rns.value
        .getPrimaryName(address.value)
        .catch(() => console.log('no primary name'))
      if (res != undefined) {
        primaryName.value = res.name
      }
    }

    setTimeout(refreshPrimaryName, 1500)
  }

  async function init(wallet: TSelectedWallet): Promise<void> {
    if (
      client.value?.getJackalAddress() !=
      'jkl1gpa2xcwmppykt4tcz3mp74u7hucvqj9v6jyuey'
    ) {
      return
    } else {
      const details: any = {
        ...mainnet,
        selectedWallet: wallet as TWalletExtensionNames
      }

      try {
        client.value = await ClientHandler.connect(details)
      } catch (err) {
        return
      }

      address.value = client.value.getJackalAddress()

      try {
        rns.value = await client.value.createRnsHandler()
      } catch (err: any) {
        return err
      }
      // get primary name
      refreshPrimaryName()

      try {
        storage.value = await client.value.createStorageHandler()
      } catch (err: any) {
        return err
      }
    }
  }

  async function upgradeStorageHandler() {
    if (storage.value) {
      await storage.value.upgradeSigner()
    } else {
      console.warn('storage handler is not ready')
    }
  }

  return {
    address,
    primaryName,
    allMyNames,
    rns,
    client,

    init,
    upgradeStorageHandler
  }
})
