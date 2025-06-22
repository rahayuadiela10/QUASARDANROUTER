<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="custom-header">
      <q-toolbar>
        <q-toolbar-title>
          <router-link to="/" class="logo-link">Fashion Store</router-link> </q-toolbar-title>

        <q-space />

        <q-tabs align="right" class="custom-tabs">
          <q-route-tab to="/" label="HOME" exact />
          <q-route-tab to="/pakaian" label="PAKAIAN" /> <q-route-tab to="/kontak" label="KONTAK" /> </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout'
})
</script>

<style lang="scss">
.custom-header {
  background: linear-gradient(to right, $dark-bg, $light-bg); // Gradasi gelap baru
  color: $text-light;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  padding: 0 15px;
}

.logo-link {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  font-size: 1.8em;
  letter-spacing: 1px;
}

.custom-tabs .q-tab {
  color: $text-light;
  font-weight: bold;
  padding: 0 18px;
  min-width: unset;
  transition: all 0.3s ease;
}

.custom-tabs .q-tab:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.custom-tabs .q-tab--active {
  color: $secondary !important; // Aksen oranye untuk aktif
  font-weight: bold;
}

.custom-tabs .q-tab__indicator {
    background-color: $secondary; // Aksen oranye
    height: 4px;
}
</style>