<script setup>
  import { computed, onMounted, ref } from 'vue'
  import { AppState } from './AppState.js'
  import { crystalsService } from './services/CrystalsService.js';
  import Shop from './components/Shop.vue'

  const crystals = computed(() => AppState.crystals);
  const autoToggle = ref(true);

  function clickCollect() {
    crystalsService.clickCollect();
  }

  function autoCollect() {
    if (autoToggle.value === false) return
    //console.log('Collecting if automatic upgrade was purchased')
    crystalsService.autoCollect();
  }

  onMounted(()=> {
    setInterval(autoCollect, 3000)
  });
</script>


<template>
  <main class="d-flex justify-content-center align-items-center bg-dark">
    <section class="container text-light">
      <div class="row justify-content-center">
        <div class="col-md-4 d-flex flex-column">
          <img @click="clickCollect()" class="selectable rounded crystal-design" src="https://cdn.britannica.com/36/38436-050-25A14701/Rock-crystal-region-Dauphine-France.jpg" alt="Crystal">
          <h4 class="text-center">{{ crystals }}</h4>
        </div>
      </div>
    </section>
    <!-- <button @click="autoToggle = !autoToggle">flip {{ autoToggle }}</button> -->
  </main>

  <footer class="bg-secondary text-light p-3">
    <Shop />
  </footer>
</template>


<style lang="scss">
@import "./assets/scss/main.scss";

  .crystal-design {
    height: 18.1rem;
    aspect-ratio: 1/1;
  }

  main {
    background-image: url(https://png.pngtree.com/background/20230616/original/pngtree-background-of-blue-crystals-a-3d-rendered-abstract-creation-picture-image_3618259.jpg);
    background-position: center;
    background-size: cover;
  }
</style>