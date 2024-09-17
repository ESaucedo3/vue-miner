<script setup>
  import { computed } from 'vue'
  import { AppState } from '../AppState.js'
  import { crystalsService } from '@/services/CrystalsService.js';

  const clickUpgrades = AppState.clickUpgrades;
  const automaticUpgrades = AppState.automaticUpgrades;
  const crystals = computed(() => AppState.crystals)

  function purchaseTool(upgrade) {
    crystalsService.purchaseTool(upgrade);
  }
</script>

<template>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-10">
        <div class="row mb-2">
          <div class="col-md-6 d-flex justify-content-around">
            <div v-for="upgrade in clickUpgrades" :key="upgrade.name">
              <p class="m-0"> {{upgrade.name}} +{{upgrade.multiplier}}</p>
              <button @click="purchaseTool(upgrade)" :disabled="crystals < upgrade.price" class="btn btn-light rounded" type="button">{{ upgrade.price }}💎</button>
            </div>
          </div>
          <div class="col-md-6 d-flex justify-content-around">
            <div class="align-self-center" v-for="upgrade in clickUpgrades" :key="upgrade.name">
              <p class="m-0">{{ upgrade.quantity }} {{ upgrade.name }} <i class="fa-solid fa-arrow-right" style="color: #74C0FC;"></i> {{ upgrade.quantity * upgrade.multiplier }}</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 d-flex justify-content-around">
            <div v-for="upgrade in automaticUpgrades" :key="upgrade.name">
              <p class="m-0">{{upgrade.name}} +{{upgrade.multiplier}}</p>
              <button @click="purchaseTool(upgrade)" :disabled="crystals < upgrade.price" class="btn btn-light rounded" type="button">{{ upgrade.price }}💎</button>
            </div>
          </div>
          <div class="col-md-6 d-flex justify-content-around">
            <div v-for="upgrade in automaticUpgrades" :key="upgrade.name">
              <p class="m-0">{{ upgrade.quantity }} {{ upgrade.name }} <i class="fa-solid fa-arrow-right" style="color: #74C0FC;"></i> {{ upgrade.quantity * upgrade.multiplier }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
</template>

<style lang="scss">

</style>