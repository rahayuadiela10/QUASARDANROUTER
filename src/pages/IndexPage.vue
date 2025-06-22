<template>
  <q-page class="index-page">
    <section class="hero-section parallax-bg">
      <div class="hero-content">
        <h1 class="animated-fade-in-up">Temukan Gaya Anda: <br>Koleksi Fashion Terbaru di Sini!</h1>
        <p class="q-mt-md text-h6 text-weight-light animated-fade-in q-mb-lg">
          Dari kasual hingga formal, lengkapi penampilan Anda dengan pilihan baju terbaik.
        </p>
        <q-btn color="primary" label="Lihat Semua Pakaian" to="/pakaian" size="lg" class="animated-btn btn-pulse" />
      </div>
    </section>

    <section class="featured-categories-section q-py-xl">
      <h2 class="text-center text-dark-bg q-mb-xl animated-fade-in">Kategori Unggulan</h2>
      <div class="q-col-gutter-lg row justify-center">
        <div class="col-xs-12 col-sm-6 col-md-4">
          <q-card class="featured-category-card animated-zoom-in" flat bordered>
            <q-img src="/images/kategori-pria.png" alt="Kategori Pakaian Pria" ratio="16/9">
                <div class="absolute-bottom text-h5 text-weight-bold category-title-overlay">Pakaian Pria</div>
            </q-img>
            <q-card-section class="bg-dark-bg text-text-light q-py-md">
              <div class="text-subtitle1 text-weight-medium">Kemeja | Celana | Jaket</div>
              <div class="text-caption text-grey-5">Koleksi modern dan stylish untuk pria.</div>
            </q-card-section>
            <q-card-actions align="right" class="bg-dark-bg">
              <q-btn flat label="Jelajahi" color="secondary" icon-right="arrow_forward" />
            </q-card-actions>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
          <q-card class="featured-category-card animated-zoom-in" flat bordered>
            <q-img src="/images/kategori-wanita.png" alt="Kategori Pakaian Wanita" ratio="16/9">
                <div class="absolute-bottom text-h5 text-weight-bold category-title-overlay">Pakaian Wanita</div>
            </q-img>
            <q-card-section class="bg-dark-bg text-text-light q-py-md">
              <div class="text-subtitle1 text-weight-medium">Dress | Blouse | Rok</div>
              <div class="text-caption text-grey-5">Tampil anggun dan modis setiap saat.</div>
            </q-card-section>
            <q-card-actions align="right" class="bg-dark-bg">
              <q-btn flat label="Jelajahi" color="secondary" icon-right="arrow_forward" />
            </q-card-actions>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
          <q-card class="featured-category-card animated-zoom-in" flat bordered>
            <q-img src="/images/kategori-aksesoris.png" alt="Kategori Aksesoris Fashion" ratio="16/9">
                <div class="absolute-bottom text-h5 text-weight-bold category-title-overlay">Aksesoris Fashion</div>
            </q-img>
            <q-card-section class="bg-dark-bg text-text-light q-py-md">
              <div class="text-subtitle1 text-weight-medium">Tas | Topi | Perhiasan</div>
              <div class="text-caption text-grey-5">Sempurnakan gaya Anda dengan aksesoris pilihan.</div>
            </q-card-section>
            <q-card-actions align="right" class="bg-dark-bg">
              <q-btn flat label="Jelajahi" color="secondary" icon-right="arrow_forward" />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </section>

    <section class="carousel-section q-mt-xl q-mb-xl">
      <h2 class="text-center text-dark-bg q-mb-lg animated-fade-in">Produk Populer Saat Ini</h2>
      <q-carousel
        v-model="slide"
        animated
        control-type="flat"
        control-color="white"
        navigation
        infinite
        arrows
        :autoplay="4000"
        height="420px"
        transition-prev="slide-right"
        transition-next="slide-left"
        class="custom-carousel rounded-borders shadow-4"
      >
        <q-carousel-slide :name="1" img-src="/images/carousel-kemeja-pria.png"> <div class="absolute-bottom custom-caption-carousel text-center">
            <div class="text-h4 text-weight-bold">Kemeja Pria Slim Fit</div>
            <div class="text-subtitle1">Elegansi untuk Setiap Acara</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" img-src="/images/carousel-dress-wanita.png"> <div class="absolute-bottom custom-caption-carousel text-center">
            <div class="text-h4 text-weight-bold">Dress Musim Panas Cantik</div>
            <div class="text-subtitle1">Nyaman dan Menawan</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" img-src="/images/carousel-sneakers.png"> <div class="absolute-bottom custom-caption-carousel text-center">
            <div class="text-h4 text-weight-bold">Sneakers Casual Terbaru</div>
            <div class="text-subtitle1">Gaya dan Kenyamanan Maksimal</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </section>

    <section class="products-section">
      <h2 class="text-center text-dark-bg q-mb-lg animated-fade-in">Koleksi Pakaian Lengkap</h2>
      <div class="product-grid">
        <ProductCard
          v-for="item in clothes"
          :key="item.id"
          :image="item.image"
          :name="item.name"
          :product-id="item.id"
          :price="item.price"
        />
      </div>
    </section>

    <footer class="app-footer text-center q-py-lg q-mt-xl">
      <div class="container">
        <div class="footer-grid row justify-center q-col-gutter-lg">
          <div class="col-xs-12 col-sm-4 footer-col">
            <div class="text-h6 text-weight-bold q-mb-md">Fashion Store</div>
            <p class="text-light-grey">Destinasi utama Anda untuk fashion terbaru dan terlengkap. Tampil percaya diri setiap hari.</p>
          </div>
          <div class="col-xs-12 col-sm-4 footer-col">
            <div class="text-h6 text-weight-bold q-mb-md">Tautan Cepat</div>
            <q-list dense dark>
              <q-item clickable v-ripple to="/">
                <q-item-section>Home</q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/pakaian">
                <q-item-section>Pakaian</q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/kontak">
                <q-item-section>Kontak</q-item-section>
              </q-item>
              <q-item clickable v-ripple href="#">
                <q-item-section>Promo</q-item-section>
              </q-item>
            </q-list>
          </div>
          <div class="col-xs-12 col-sm-4 footer-col">
            <div class="text-h6 text-weight-bold q-mb-md">Ikuti Kami</div>
            <p class="q-mb-sm">Dapatkan inspirasi gaya setiap hari:</p>
            <div class="social-links q-mt-md">
              <q-btn flat round color="white" icon="fab fa-facebook" href="#" target="_blank" class="q-mx-sm social-btn" />
              <q-btn flat round color="white" icon="fab fa-instagram" href="#" target="_blank" class="q-mx-sm social-btn" />
              <q-btn flat round color="white" icon="fab fa-twitter" href="#" target="_blank" class="q-mx-sm social-btn" />
              <q-btn flat round color="white" icon="fab fa-youtube" href="#" target="_blank" class="q-mx-sm social-btn" />
            </div>
            <div class="newsletter q-mt-lg">
                <div class="text-h6 text-weight-bold q-mb-md">Newsletter</div>
                <p class="text-light-grey">Dapatkan info koleksi & diskon terbaru!</p>
                <q-input filled dense bg-color="white" v-model="emailNewsletter" placeholder="Email Anda" class="q-mt-sm">
                    <template v-slot:append>
                        <q-btn flat round icon="send" color="primary" @click="subscribeNewsletter" />
                    </template>
                </q-input>
            </div>
          </div>
        </div>
        <q-separator dark class="q-my-lg" />
        <p class="text-subtitle2">&copy; {{ new Date().getFullYear() }} Fashion Store. All rights reserved.</p>
      </div>
    </footer>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import ProductCard from 'components/ProductCard.vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'IndexPage',
  components: {
    ProductCard
  },
  setup() {
    const $q = useQuasar();

    // Data Pakaian
    const clothes = [
      { id: 'kemeja-denim', name: 'Kemeja Denim Pria', image: '/images/kemeja-denim.png', price: 250000 },
      { id: 'dress-floral', name: 'Dress Floral Wanita', image: '/images/dress-floral.png', price: 380000 },
      { id: 'jaket-kulit', name: 'Jaket Kulit Pria', image: '/images/jaket-kulit.png', price: 750000 },
      { id: 'celana-jeans', name: 'Celana Jeans Wanita', image: '/images/celana-jeans.png', price: 320000 },
      { id: 't-shirt-basic', name: 'T-Shirt Basic Unisex', image: '/images/t-shirt-basic.png', price: 120000 },
      { id: 'blouse-satin', name: 'Blouse Satin Wanita', image: '/images/blouse-satin.png', price: 290000 },
      // Tambahkan item pakaian lainnya di sini sesuai kebutuhan
      { id: 'rok-midi', name: 'Rok Midi Plisket', image: '/images/rok-midi.png', price: 210000 },
      { id: 'sepatu-sneakers', name: 'Sepatu Sneakers Casual', image: '/images/sepatu-sneakers.png', price: 450000 },
    ];

    const slide = ref(1); // Untuk carousel
    const emailNewsletter = ref('');

    const subscribeNewsletter = () => {
        if (emailNewsletter.value && /\S+@\S+\.\S+/.test(emailNewsletter.value)) {
            $q.notify({
                color: 'positive',
                icon: 'email',
                message: `Terima kasih! Anda berlangganan dengan ${emailNewsletter.value}`,
                position: 'top',
                timeout: 2500
            });
            emailNewsletter.value = '';
        } else {
            $q.notify({
                color: 'negative',
                icon: 'warning',
                message: 'Mohon masukkan email yang valid!',
                position: 'top',
                timeout: 2500
            });
        }
    };

    return {
      clothes, // Menggunakan 'clothes'
      slide,
      emailNewsletter,
      subscribeNewsletter
    };
  }
});
</script>

<style lang="scss">
.index-page {
  background-color: #f8f8f8;
}

/* Hero Section dengan Background Fashion */
.hero-section {
  text-align: center;
  padding: 120px 20px;
  background: linear-gradient(to right bottom, $primary 0%, $accent 100%); // Gradasi dari primary ke accent
  color: white;
  margin-bottom: 50px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.4);
  position: relative;
  overflow: hidden;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-image: url('/images/hero-fashion-bg.png'); // Gambar latar belakang fashion

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($dark-bg, 0.4); // Overlay lebih gelap dari $dark-bg
    z-index: 0;
  }
}

.hero-content {
  position: relative;
  z-index: 1;
}

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

.hero-section h1 {
  font-size: 4.5em;
  color: white;
  max-width: 1000px;
  margin: 0 auto 25px;
  font-weight: 900;
  text-shadow: 3px 3px 8px rgba(0,0,0,0.6);
  line-height: 1.1;
  letter-spacing: -1.5px;
}

.hero-section p {
  font-size: 1.5em;
  color: rgba(255,255,255,0.95);
  max-width: 800px;
  margin: 0 auto;
  font-weight: 300;
}

.animated-btn {
  background: linear-gradient(to right, $secondary, lighten($secondary, 10%)) !important; // Gradasi dari secondary
  color: white !important;
  border-radius: 50px;
  padding: 18px 40px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1.5px;
  transition: all 0.4s ease-out;
  box-shadow: 0 6px 20px rgba(0,0,0,0.4);

  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 12px 30px rgba(0,0,0,0.5);
    background: linear-gradient(to right, darken($secondary, 5%), $secondary) !important;
  }
}

.btn-pulse {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba($secondary, 0.7);
    }
    70% {
        box-shadow: 0 0 0 15px rgba(255, 255, 255, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
}

/* Featured Categories Section Baru */
.featured-categories-section {
  background-color: #f0f0f0;
  padding: 80px 20px;
  margin: 0 auto;
  box-shadow: inset 0 5px 15px rgba(0,0,0,0.05);
}

.featured-categories-section h2 {
  font-size: 3.5em;
  color: $text-dark; // Menggunakan warna teks gelap
  margin-bottom: 60px;
  font-weight: 800;
  text-align: center;
}

.featured-category-card {
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

  .category-title-overlay {
    background-color: rgba($text-dark, 0.8); // Latar belakang gelap transparan untuk judul
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
    color: $secondary !important; // Tombol aksi warna secondary (oranye)
    transition: all 0.3s ease;
    &:hover {
        background-color: rgba($secondary, 0.1);
        transform: translateX(5px);
    }
  }
}


/* Carousel Styling */
.carousel-section {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.custom-carousel {
  max-width: 100%;
  margin: 0 auto;
  background: linear-gradient(to right, $light-bg, $dark-bg); // Gradasi baru
  color: white;
  border-radius: 15px !important;
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
}

.custom-carousel .q-carousel__slide {
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.custom-caption-carousel {
  padding: 25px;
  background-color: rgba(0, 0, 0, .6);
  width: 100%;
}

.custom-caption-carousel .text-h4 {
  font-size: 2.8em;
  line-height: 1.2;
  font-weight: bold;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.6);
}

.custom-caption-carousel .text-subtitle1 {
  font-size: 1.3em;
}

/* Products Section & Grid */
.products-section {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.products-section h2 {
  font-size: 3.5em;
  color: $text-dark; // Warna judul gelap
  margin-bottom: 60px;
  font-weight: 800;
  text-align: center;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  justify-items: center;
}

/* Footer Styling yang Lebih Modern */
.app-footer {
  background: linear-gradient(to right, $dark-bg, $light-bg);
  color: $text-light;
  padding: 60px 20px;
  font-size: 0.95em;
  box-shadow: 0 -8px 25px rgba(0,0,0,0.3);

  .footer-grid {
    max-width: 1200px;
    margin: 0 auto;
  }

  .text-light-grey {
    color: rgba($text-light, 0.8);
    line-height: 1.7;
  }

  .text-h6 {
    color: $secondary; // Judul footer warna secondary (oranye)
    margin-bottom: 25px;
    font-size: 1.3em;
    letter-spacing: 0.5px;
  }

  .q-list {
    background-color: transparent;
    .q-item {
        min-height: 30px;
        padding-left: 0;
        color: rgba($text-light, 0.9);
        transition: color 0.3s ease, transform 0.3s ease;
        &:hover {
            color: $accent; // Aksen biru muda
            transform: translateX(5px);
        }
    }
    .q-item__section {
        font-weight: 500;
    }
  }

  .footer-link {
    color: $accent; // Warna link footer
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: lighten($accent, 10%);
      text-decoration: underline;
    }
  }

  .social-links .social-btn {
    font-size: 1.8em;
    margin: 0 10px;
    color: $text-light;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: translateY(-5px) scale(1.1);
      color: $secondary; // Ganti warna saat hover
    }
  }

  .newsletter {
      background-color: rgba(255,255,255,0.08);
      padding: 20px;
      border-radius: 10px;
      margin-top: 30px;
      .q-input {
          .q-field__control {
              border-radius: 8px;
          }
      }
      .q-btn {
          border-radius: 8px;
          margin-left: 10px;
          background-color: $secondary !important; // Tombol newsletter oranye
          color: white !important;
          &:hover {
              background-color: darken($secondary, 10%) !important;
          }
      }
  }

  .q-separator {
    background-color: rgba($text-light, 0.2);
  }
  .text-subtitle2 {
    color: rgba($text-light, 0.7);
    margin-top: 20px;
  }
}

// Responsive adjustments
@media (max-width: 1200px) {
  .hero-section h1 {
    font-size: 4em;
  }
  .featured-categories-section h2, .products-section h2, .carousel-section h2 {
    font-size: 3em;
  }
}

@media (max-width: 1024px) {
  .hero-section {
    padding: 100px 15px;
  }
  .hero-section h1 {
    font-size: 3.5em;
  }
  .hero-section p {
    font-size: 1.2em;
  }
  .featured-category-card .q-img {
      height: 200px;
  }
  .featured-categories-section h2, .products-section h2, .carousel-section h2 {
    font-size: 2.5em;
    margin-bottom: 40px;
  }
  .custom-carousel {
    height: 350px !important;
  }
  .custom-caption-carousel .text-h4 {
    font-size: 2em;
  }
  .custom-caption-carousel .text-subtitle1 {
    font-size: 1em;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 80px 15px;
  }
  .hero-section h1 {
    font-size: 2.8em;
    line-height: 1.2;
  }
  .hero-section p {
    font-size: 1em;
  }
  .animated-btn {
    padding: 12px 30px;
    font-size: 0.9em;
  }
  .featured-categories-section h2, .products-section h2, .carousel-section h2 {
    font-size: 2em;
    margin-bottom: 30px;
  }
  .featured-category-card .q-img {
      height: 180px;
  }
  .featured-category-card .category-title-overlay {
      font-size: 1.5em;
  }
  .q-carousel {
    height: 300px !important;
  }
  .custom-caption-carousel .text-h4 {
    font-size: 1.8em;
  }
  .custom-caption-carousel .text-subtitle1 {
    font-size: 0.9em;
  }
}

@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 2.2em;
    letter-spacing: -0.5px;
  }
  .hero-section p {
    font-size: 0.9em;
  }
  .animated-btn {
    padding: 10px 25px;
    font-size: 0.8em;
  }
  .featured-categories-section h2, .products-section h2, .carousel-section h2 {
    font-size: 1.5em;
  }
  .featured-category-card .q-img {
      height: 150px;
  }
  .featured-category-card .category-title-overlay {
      font-size: 1.2em;
  }
}
</style>