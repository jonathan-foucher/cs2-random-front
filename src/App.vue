<script setup lang="ts">
import PlayerCard from '@/components/PlayerCard.vue'
</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page class="row justify-around items-center">
        <PlayerCard v-for="index in 5" :key="index" :player-name="`Player ${index}`" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
