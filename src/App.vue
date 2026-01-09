<script setup lang="ts">
import { ref } from 'vue'
import PlayerCard from '@/components/PlayerCard.vue'

const players = ref()
const nPlayers = ref(1)
const nPlayersOptions = [...Array(5).keys()].map((i) => i + 1)

const startRandomize = () => {
  for (const player of players.value) {
    player.startRandomize()
  }
}
</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page class="column main-page">
        <div class="row justify-center items-center">
          <q-btn color="amber-10" size="lg" icon-right="refresh" class="column q-my-xl q-mx-lg" @click="startRandomize">
            Launch
          </q-btn>
          <q-select filled v-model="nPlayers" :options="nPlayersOptions" bg-color="grey-5" class="column" />
        </div>
        <div class="row justify-around items-center">
          <PlayerCard v-for="index in nPlayers" :key="index" ref="players" :player-name="`Player ${index}`" />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.main-page {
  background: #2d2d2d;
}
</style>
