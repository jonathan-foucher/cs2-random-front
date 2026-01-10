import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', () => {
  const playerNames = ref<Array<string>>([])

  const getPlayerName = (id: number): string => playerNames.value[id] ?? `Player ${id}`

  const editPlayerName = (id: number, name: string): void => {
    playerNames.value[id] = name
  }

  return {
    getPlayerName,
    editPlayerName,
  }
})
