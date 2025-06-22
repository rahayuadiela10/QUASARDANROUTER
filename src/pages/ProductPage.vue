<template>
  <q-page class="products-page q-pa-md">
    <section class="page-intro-section text-center q-py-xl bg-primary text-white">
      <h1 class="page-title animated-fade-in-up">Katalog Pakaian Terbaru</h1>
      <p class="text-h6 text-weight-light animated-fade-in q-mt-md">
        Jelajahi koleksi terlengkap dari fashion pria, wanita, hingga aksesoris.
      </p>
      <q-btn
        label="Dapatkan Inspirasi Gaya"
        color="white"
        text-color="primary"
        size="lg"
        class="q-mt-lg animated-btn btn-slide-in"
        @click="showRecommendationDialog = true"
      />
    </section>

    <section class="featured-items-page-section q-py-xl">
      <h2 class="section-heading text-center q-mb-xl animated-fade-in">Pilihan Koleksi Kami</h2>
      <div class="q-col-gutter-lg row justify-center">
        <div class="col-xs-12 col-sm-6 col-md-4">
          <q-card class="featured-item-card animated-zoom-in" flat bordered>
            <q-img src="/images/baju-pria-formal.png" alt="Baju Pria Formal" ratio="16/9">
              <div class="absolute-bottom text-h5 text-weight-bold item-title-overlay">Baju Pria Formal</div>
            </q-img>
            <q-card-section class="bg-dark-bg text-text-light q-py-md">
              <div class="text-subtitle1 text-weight-medium">Kemeja | Jas | Celana Bahan</div>
              <div class="text-caption text-grey-5">Tampil elegan dan profesional di setiap kesempatan.</div>
            </q-card-section>
            <q-card-actions align="right" class="bg-dark-bg">
              <q-btn flat label="Lihat Koleksi" color="secondary" icon-right="arrow_forward" />
            </q-card-actions>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
          <q-card class="featured-item-card animated-zoom-in" flat bordered>
            <q-img src="/images/baju-wanita-casual.png" alt="Baju Wanita Casual" ratio="16/9">
              <div class="absolute-bottom text-h5 text-weight-bold item-title-overlay">Baju Wanita Casual</div>
            </q-img>
            <q-card-section class="bg-dark-bg text-text-light q-py-md">
              <div class="text-subtitle1 text-weight-medium">Kaos | Jeans | Outerwear</div>
              <div class="text-caption text-grey-5">Gaya santai namun tetap trendi untuk aktivitas sehari-hari.</div>
            </q-card-section>
            <q-card-actions align="right" class="bg-dark-bg">
              <q-btn flat label="Lihat Koleksi" color="secondary" icon-right="arrow_forward" />
            </q-card-actions>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
          <q-card class="featured-item-card animated-zoom-in" flat bordered>
            <q-img src="/images/sepatu-fashion.png" alt="Sepatu Fashion" ratio="16/9">
              <div class="absolute-bottom text-h5 text-weight-bold item-title-overlay">Sepatu Fashion</div>
            </q-img>
            <q-card-section class="bg-dark-bg text-text-light q-py-md">
              <div class="text-subtitle1 text-weight-medium">Sneakers | Heels | Loafers</div>
              <div class="text-caption text-grey-5">Lengkapi gaya Anda dari ujung kepala hingga ujung kaki.</div>
            </q-card-section>
            <q-card-actions align="right" class="bg-dark-bg">
              <q-btn flat label="Lihat Koleksi" color="secondary" icon-right="arrow_forward" />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </section>

    <section class="filter-sort-section q-py-md q-mx-auto" style="max-width: 1200px;">
        <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-sm-6 col-md-4">
                <q-select filled v-model="filterCategory" :options="categoryOptions" label="Filter Kategori" clearable bg-color="white" />
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <q-select filled v-model="sortBy" :options="sortOptions" label="Urutkan Berdasarkan" bg-color="white" />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4">
                 <q-input filled v-model="searchQuery" label="Cari Pakaian" clearable bg-color="white">
                     <template v-slot:append>
                         <q-icon name="search" />
                     </template>
                 </q-input>
            </div>
        </div>
    </section>

    <section class="all-items-section q-py-xl">
      <h2 class="section-heading text-center q-mb-xl animated-fade-in">Koleksi Lengkap Pakaian</h2>
      <div class="product-grid">
        <ProductCard
          v-for="item in filteredSortedItems"
          :key="item.id"
          :image="item.image"
          :name="item.name"
          :product-id="item.id"
          :price="item.price"
        />
      </div>
    </section>

    <q-dialog v-model="showRecommendationDialog">
      <q-card>
        <q-card-section class="row items-center q-pb-none bg-primary text-white">
          <div class="text-h6">Dapatkan Inspirasi Gaya!</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-md">
          <p>
            Beritahu kami gaya atau jenis pakaian kesukaan Anda, dan kami akan memberikan inspirasi untuk Anda!
          </p>
          <q-input filled v-model="favoriteStyle" label="Gaya Kesukaan Anda (misal: Casual, Formal)" class="q-mb-md" />
          <q-btn label="Dapatkan Inspirasi" color="primary" @click="getInspiration" />
        </q-card-section>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import ProductCard from 'components/ProductCard.vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'ProductPage',
  components: {
    ProductCard
  },
  setup() {
    const $q = useQuasar();

    // Data Pakaian Lengkap
    const allItems = [
      { id: 'kemeja-denim', name: 'Kemeja Denim Pria', image: '/images/kemeja-denim.png', price: 250000, category: 'Pria' },
      { id: 'dress-floral', name: 'Dress Floral Wanita', image: '/images/dress-floral.png', price: 380000, category: 'Wanita' },
      { id: 'jaket-kulit', name: 'Jaket Kulit Pria', image: '/images/jaket-kulit.png', price: 750000, category: 'Pria' },
      { id: 'celana-jeans', name: 'Celana Jeans Wanita', image: '/images/celana-jeans.png', price: 320000, category: 'Wanita' },
      { id: 't-shirt-basic', name: 'T-Shirt Basic Unisex', image: '/images/t-shirt-basic.png', price: 120000, category: 'Unisex' },
      { id: 'blouse-satin', name: 'Blouse Satin Wanita', image: '/images/blouse-satin.png', price: 290000, category: 'Wanita' },
      { id: 'rok-midi', name: 'Rok Midi Plisket', image: '/images/rok-midi.png', price: 210000, category: 'Wanita' },
      { id: 'sepatu-sneakers', name: 'Sepatu Sneakers Casual', image: '/images/sepatu-sneakers.png', price: 450000, category: 'Aksesoris' },
      { id: 'tas-slempang', name: 'Tas Slempang Kulit', image: '/images/tas-slempang.png', price: 550000, category: 'Aksesoris' },
      { id: 'kemeja-batik', name: 'Kemeja Batik Modern', image: '/images/kemeja-batik.png', price: 350000, category: 'Pria' },
      { id: 'cardigan-rajut', name: 'Cardigan Rajut Wanita', image: '/images/cardigan-rajut.png', price: 270000, category: 'Wanita' },
      { id: 'topi-baseball', name: 'Topi Baseball Trendy', image: '/images/topi-baseball.png', price: 85000, category: 'Aksesoris' },
    ];

    // Filter dan Sort
    const filterCategory = ref(null);
    const sortBy = ref('name-asc');
    const searchQuery = ref('');

    const categoryOptions = ['Pria', 'Wanita', 'Unisex', 'Aksesoris'];
    const sortOptions = [
      { label: 'Nama (A-Z)', value: 'name-asc' },
      { label: 'Nama (Z-A)', value: 'name-desc' },
      { label: 'Harga Termurah', value: 'price-asc' },
      { label: 'Harga Termahal', value: 'price-desc' },
    ];

    const filteredSortedItems = computed(() => {
      let items = [...allItems];

      // Filter berdasarkan kategori
      if (filterCategory.value) {
        items = items.filter(item => item.category === filterCategory.value);
      }

      // Filter berdasarkan pencarian
      if (searchQuery.value) {
          const query = searchQuery.value.toLowerCase();
          items = items.filter(item =>
              item.name.toLowerCase().includes(query) ||
              item.category.toLowerCase().includes(query)
          );
      }

      // Urutkan
      items.sort((a, b) => {
        if (sortBy.value === 'name-asc') {
          return a.name.localeCompare(b.name);
        } else if (sortBy.value === 'name-desc') {
          return b.name.localeCompare(a.name);
        } else if (sortBy.value === 'price-asc') {
          return a.price - b.price;
        } else if (sortBy.value === 'price-desc') {
          return b.price - a.price;
        }
        return 0;
      });

      return items;
    });

    // Dialog Inspirasi Gaya
    const showRecommendationDialog = ref(false);
    const favoriteStyle = ref('');

    const getInspiration = () => {
        if (favoriteStyle.value) {
            $q.notify({
                color: 'positive',
                icon: 'auto_fix_high', // Ikon untuk fashion
                message: `Kami akan mencari inspirasi gaya berdasarkan "${favoriteStyle.value}" untuk Anda!`,
                position: 'top',
                timeout: 3000
            });
            showRecommendationDialog.value = false;
            favoriteStyle.value = '';
        } else {
            $q.notify({
                color: 'negative',
                icon: 'warning',
                message: 'Mohon isi jenis gaya kesukaan Anda.',
                position: 'top',
                timeout: 2000
            });
        }
    };

    return {
      allItems,
      filteredSortedItems,
      filterCategory, // Ganti nama filter
      sortBy,
      searchQuery,
      categoryOptions, // Ganti nama options
      sortOptions,
      showRecommendationDialog,
      favoriteStyle, // Ganti nama variabel
      getInspiration // Ganti nama fungsi
    };
  }
});
</script>

<style lang="scss" scoped>
.products-page {
  background-color: #f8f8f8;
}

/* Header Halaman Pakaian */
.page-intro-section {
  background: linear-gradient(to right, $primary, $accent); // Menggunakan primary dan accent
  color: white;
  padding: 100px 20px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.4);
  
  .page-title {
    font-size: 4em;
    font-weight: 900;
    text-shadow: 3px 3px 8px rgba(0,0,0,0.5);
    line-height: 1.1;
  }
  p {
    font-size: 1.3em;
    opacity: 0.9;
  }
  .animated-btn {
    background: linear-gradient(to right, $secondary, lighten($secondary, 10%)) !important; // Tombol dengan secondary
    color: white !important;
    border-radius: 50px;
    padding: 15px 35px;
    font-weight: bold;
    letter-spacing: 1px;
    transition: all 0.4s ease-out;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);

    &:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: 0 8px 20px rgba(0,0,0,0.4);
      background: linear-gradient(to right, darken($secondary, 5%), $secondary) !important;
    }
  }
}

// Animasi Fade In (untuk teks hero)
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animated-fade-in {
  animation: fadeIn 1s ease-out forwards;
}
.animated-fade-in-up {
    animation: fadeIn 1.2s ease-out forwards;
    animation-delay: 0.2s;
    opacity: 0;
}
.btn-slide-in {
    animation: slideInFromBottom 0.8s ease-out forwards;
    animation-delay: 0.5s;
    opacity: 0;
}
@keyframes slideInFromBottom {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Bagian Pakaian Unggulan di Halaman Produk */
.featured-items-page-section {
  background-color: $card-bg;
  padding: 80px 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  margin-top: -30px;
  position: relative;
  z-index: 1;
}

.section-heading {
  font-size: 3.5em;
  color: $text-dark;
  margin-bottom: 60px;
  font-weight: 800;
  text-align: center;
}

.featured-item-card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  border: none;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
  }

  .q-img {
    height: 250px;
    object-fit: cover;
  }

  .item-title-overlay {
    background-color: rgba($text-dark, 0.8);
    padding: 15px;
    font-size: 1.8em;
  }

  .q-card-section {
    padding: 20px;
  }
  .text-h6 {
    font-size: 1.5em;
    margin-bottom: 8px;
  }
  .text-subtitle1 {
    font-size: 1.1em;
  }
  .text-caption {
    font-size: 0.9em;
    min-height: 40px;
  }

  .q-card-actions {
    padding: 15px 20px;
  }
  .q-card-actions .q-btn {
    font-weight: bold;
    color: $secondary !important; // Tombol aksi warna secondary
    transition: all 0.3s ease;
    &:hover {
        background-color: rgba($secondary, 0.1);
        transform: translateX(5px);
    }
  }
}

/* Bagian Filter dan Sorting */
.filter-sort-section {
    background-color: #f0f0f0;
    padding: 30px 20px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    margin-top: 50px;
    .q-select, .q-input {
        .q-field__control {
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
            &:hover {
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            }
        }
        .q-field__label {
            color: $text-dark; // Label filter warna gelap
        }
    }
}

/* Grid Utama Semua Pakaian */
.all-items-section {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  justify-items: center;
}

/* Responsif */
@media (max-width: 1200px) {
  .page-intro-section .page-title {
    font-size: 3.5em;
  }
  .section-heading {
    font-size: 3em;
  }
}

@media (max-width: 1024px) {
  .page-intro-section {
    padding: 80px 15px;
  }
  .page-intro-section .page-title {
    font-size: 3em;
  }
  .page-intro-section p {
    font-size: 1.1em;
  }
  .featured-items-page-section, .all-items-section {
    padding: 60px 15px;
  }
  .section-heading {
    font-size: 2.5em;
    margin-bottom: 40px;
  }
  .featured-item-card .q-img {
      height: 200px;
  }
}

@media (max-width: 768px) {
  .page-intro-section {
    padding: 60px 15px;
  }
  .page-intro-section .page-title {
    font-size: 2.5em;
  }
  .page-intro-section p {
    font-size: 0.95em;
  }
  .featured-items-page-section, .all-items-section {
    padding: 40px 15px;
  }
  .section-heading {
    font-size: 2em;
    margin-bottom: 30px;
  }
  .featured-item-card .q-img {
      height: 180px;
  }
  .featured-item-card .item-title-overlay {
      font-size: 1.5em;
  }
}

@media (max-width: 480px) {
  .page-intro-section .page-title {
    font-size: 2em;
    letter-spacing: -0.5px;
  }
  .page-intro-section p {
    font-size: 0.9em;
  }
  .animated-btn {
    padding: 10px 25px;
    font-size: 0.8em;
  }
  .section-heading {
    font-size: 1.5em;
  }
  .featured-item-card .q-img {
      height: 150px;
  }
  .featured-item-card .item-title-overlay {
      font-size: 1.2em;
  }
}
</style>