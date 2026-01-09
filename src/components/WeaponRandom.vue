<script setup lang="ts">
import { ref } from 'vue'
import { useWeapons } from '@/composables/weapons'

defineProps<{ weaponGroups: Array<Array<string>> }>()
const slideNumber = ref<number>(0)

const { getWeaponImagePath } = useWeapons()
</script>

<template>
  <q-carousel
    v-model="slideNumber"
    class="weapon-carousel"
    animated
    infinite
    transition-next="slide-down"
    :autoplay="2000"
  >
    <q-carousel-slide
      v-for="(weaponGroup, index) in weaponGroups"
      :key="index"
      :name="index"
      class="column no-wrap justify-center"
    >
      <div class="row items-center no-wrap">
        <q-img v-for="weapon in weaponGroup" :key="weapon" :src="getWeaponImagePath(weapon)" />
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<style scoped>
.weapon-carousel {
  background: linear-gradient(to right, #1e4b73, 60%, #cc9900);
  max-height: 200px;
}
</style>
