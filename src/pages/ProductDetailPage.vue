<template>
  <q-page class="product-detail-page q-pa-md text-center">
    <h2 class="text-h4 q-mb-lg text-dark-bg">Detail Pakaian: {{ itemId ? itemId.replace(/-/g, ' ').toUpperCase() : 'Item Tidak Ditemukan' }}</h2>
    <q-img
      :src="item ? item.image : ''"
      :alt="item ? item.name : 'Item Image'"
      style="max-width: 400px; height: auto; margin-bottom: 20px; border-radius: 8px;"
      v-if="item"
    />
    <p class="text-body1 text-grey-8 q-mb-md" v-if="item">
      Ini adalah deskripsi detail untuk {{ item.name }}.
      {{ item ? item.description : '' }}
      Anda bisa menambahkan spesifikasi, ulasan, harga, dan tombol "Tambah ke Keranjang" di sini.
    </p>
    <q-btn label="Kembali ke Daftar Pakaian" color="secondary" to="/pakaian" class="q-mt-md" />
  </q-page>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
// import { useRoute } from 'vue-router'; // HAPUS ATAU KOMENTARI BARIS INI

export default defineComponent({
  name: 'ProductDetailPage',
  props: ['id'], // This prop will receive the 'id' from the route parameter
  setup(props) {
    // HAPUS BARIS INI: const route = useRoute();
    const item = ref(null);

    const allItems = [
      // Data Pakaian Lengkap (sesuaikan dengan allItems di ProductPage.vue)
      { id: 'kemeja-denim', name: 'Kemeja Denim Pria', image: '/images/kemeja-denim.png', price: 250000, category: 'Pria', description: 'Kemeja denim pria dengan desain modern, nyaman dipakai sehari-hari.' },
      { id: 'dress-floral', name: 'Dress Floral Wanita', image: '/images/dress-floral.png', price: 380000, category: 'Wanita', description: 'Dress floral cantik, cocok untuk musim panas atau acara santai.' },
      { id: 'jaket-kulit', name: 'Jaket Kulit Pria', image: '/images/jaket-kulit.png', price: 750000, category: 'Pria', description: 'Jaket kulit asli, memberikan kesan maskulin dan stylish.' },
      { id: 'celana-jeans', name: 'Celana Jeans Wanita', image: '/images/celana-jeans.png', price: 320000, category: 'Wanita', description: 'Celana jeans wanita slim fit, nyaman dan modis.' },
      { id: 't-shirt-basic', name: 'T-Shirt Basic Unisex', image: '/images/t-shirt-basic.png', price: 120000, category: 'Unisex', description: 'Kaos basic unisex, bahan katun adem, tersedia berbagai warna.' },
      { id: 'blouse-satin', name: 'Blouse Satin Wanita', image: '/images/blouse-satin.png', price: 290000, category: 'Wanita', description: 'Blouse satin lembut, cocok untuk tampilan formal atau kasual.' },
      { id: 'rok-midi', name: 'Rok Midi Plisket', image: '/images/rok-midi.png', price: 210000, category: 'Wanita', description: 'Rok midi plisket, nyaman dan flowy, cocok untuk berbagai bentuk tubuh.' },
      { id: 'sepatu-sneakers', name: 'Sepatu Sneakers Casual', image: '/images/sepatu-sneakers.png', price: 450000, category: 'Aksesoris', description: 'Sneakers casual, ringan dan stylish, cocok untuk menemani aktivitas Anda.' },
      { id: 'tas-slempang', name: 'Tas Slempang Kulit', image: '/images/tas-slempang.png', price: 550000, category: 'Aksesoris', description: 'Tas slempang kulit asli, desain elegan, praktis untuk menyimpan barang.' },
      { id: 'kemeja-batik', name: 'Kemeja Batik Modern', image: '/images/kemeja-batik.png', price: 350000, category: 'Pria', description: 'Kemeja batik dengan motif modern, cocok untuk acara formal maupun semi-formal.' },
      { id: 'cardigan-rajut', name: 'Cardigan Rajut Wanita', image: '/images/cardigan-rajut.png', price: 270000, category: 'Wanita', description: 'Cardigan rajut lembut, nyaman dipakai saat cuaca dingin.' },
      { id: 'topi-baseball', name: 'Topi Baseball Trendy', image: '/images/topi-baseball.png', price: 85000, category: 'Aksesoris', description: 'Topi baseball dengan desain trendy, melindungi dari panas dan menambah gaya.' },
    ];

    const fetchItem = (itemId) => {
      item.value = allItems.find(p => p.id === itemId) || null;
    };

    watch(() => props.id, (newId) => {
      fetchItem(newId);
    }, { immediate: true });

    return {
      item,
      itemId: props.id
    };
  }
});
</script>

<style lang="scss" scoped>
.product-detail-page {
  max-width: 800px;
  margin: 40px auto;
  padding: 40px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  .text-dark-bg {
      color: $text-dark;
  }
}
</style>