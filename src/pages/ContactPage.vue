<template>
  <q-page class="contact-page q-pa-md">
    <div class="contact-header text-center q-mb-xl">
      <h2 class="page-title">Hubungi Kami</h2>
      <p class="text-body1 text-grey-8 q-mt-md">
        Punya pertanyaan, saran, atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami!
      </p>
    </div>

    <div class="contact-content q-mx-auto q-mb-xl">
      <q-card class="contact-card shadow-10 rounded-borders">
        <q-card-section class="bg-dark-gaming text-white text-h5 text-weight-bold">
          Kirimkan Pesan Anda
        </q-card-section>

        <q-card-section>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              v-model="form.name"
              label="Nama Lengkap *"
              hint="Nama Anda"
              lazy-rules
              :rules="[val => val && val.length > 0 || 'Mohon isi nama Anda']"
              bg-color="grey-2"
              color="primary"
            />

            <q-input
              filled
              v-model="form.email"
              label="Email Anda *"
              hint="example@domain.com"
              type="email"
              lazy-rules
              :rules="[val => val && val.length > 0 && /\S+@\S+\.\S+/.test(val) || 'Mohon isi email yang valid']"
              bg-color="grey-2"
              color="primary"
            />

            <q-input
              filled
              v-model="form.message"
              label="Pesan Anda *"
              type="textarea"
              rows="5"
              lazy-rules
              :rules="[val => val && val.length > 0 || 'Pesan tidak boleh kosong']"
              bg-color="grey-2"
              color="primary"
            />

            <div>
              <q-btn label="Kirim Pesan" type="submit" color="primary" class="q-mr-md animated-btn" />
              <q-btn label="Reset" type="reset" color="secondary" flat class="animated-btn" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>

    <div class="contact-info text-center q-mb-xl">
      <h3 class="text-h5 text-dark-gaming q-mb-md">Informasi Kontak Lainnya</h3>
      <p class="text-body1 text-grey-8">
        Email: <a href="mailto:info@gorgaming.com" class="text-accent-red">salsabila02018@gmail.com</a><br>
        Telepon: <a href="tel:+628123456789" class="text-accent-red">+62 857-6520-0160</a><br>
        Alamat: Jl. Raya Gaming No. 123, Kota Game, Indonesia
      </p>
      <div class="social-links q-mt-lg">
        <h3 class="text-h6 text-dark-gaming q-mb-md">Ikuti Kami!</h3>
        <q-btn flat round color="dark-gaming" icon="fab fa-facebook" href="#" target="_blank" class="q-mx-sm social-btn" />
        <q-btn flat round color="dark-gaming" icon="fab fa-instagram" href="#" target="_blank" class="q-mx-sm social-btn" />
        <q-btn flat round color="dark-gaming" icon="fab fa-twitter" href="#" target="_blank" class="q-mx-sm social-btn" />
        <q-btn flat round color="dark-gaming" icon="fab fa-youtube" href="#" target="_blank" class="q-mx-sm social-btn" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar'; // Import useQuasar untuk notifikasi

export default defineComponent({
  name: 'ContactPage',
  setup() {
    const $q = useQuasar(); // Inisialisasi Quasar instance

    const form = ref({
      name: '',
      email: '',
      message: ''
    });

    const onSubmit = () => {
      // Di sini Anda akan mengirim data formulir ke backend (misalnya, menggunakan Axios)
      // Untuk demo, kita hanya akan menampilkan notifikasi
      $q.notify({
        color: 'positive',
        icon: 'check_circle',
        message: 'Pesan Anda berhasil dikirim!',
        position: 'top',
        timeout: 2000
      });
      onReset(); // Reset formulir setelah sukses
    };

    const onReset = () => {
      form.value.name = '';
      form.value.email = '';
      form.value.message = '';
    };

    return {
      form,
      onSubmit,
      onReset
    };
  }
});
</script>

<style lang="scss" scoped>
.contact-page {
  max-width: 1000px; // Lebar maksimum halaman
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #f8f8f8; // Latar belakang halaman
}

.contact-header {
  margin-bottom: 50px;
  .page-title {
    font-size: 3em;
    color: $dark-gaming;
    font-weight: 700;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    margin-bottom: 10px;
  }
}

.contact-content {
  max-width: 700px; // Lebar maksimum formulir
  .contact-card {
    border-radius: 12px;
    overflow: hidden; // Memastikan border-radius diterapkan
    .q-card-section.bg-dark-gaming {
        background: linear-gradient(to right, $dark-gaming, $light-gaming); // Gradasi pada header card
        padding: 20px;
    }
  }
}

.contact-info {
  margin-top: 60px;
  h3 {
    font-size: 2em;
    color: $dark-gaming;
    font-weight: 600;
    margin-bottom: 20px;
  }
  p {
    line-height: 1.8;
  }
  a {
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: lighten($accent-red, 10%);
      text-decoration: underline;
    }
  }
}

.social-links .social-btn {
  font-size: 1.8em; // Ukuran ikon sosial media
  margin: 0 10px;
  color: $dark-gaming; // Warna ikon
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.1);
    color: $accent-red; // Ganti warna saat hover
  }
}

// Gaya tombol seperti di IndexPage
.animated-btn {
  border-radius: 8px; // Sudut sedikit melengkung
  padding: 10px 25px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.3);
  }

  &.q-btn--flat:hover { // Untuk tombol flat (Reset)
    background-color: rgba(0,0,0,0.05); // Latar belakang ringan saat hover
    box-shadow: none;
    transform: none;
  }
}

// Responsive adjustments
@media (max-width: 1024px) {
  .contact-header .page-title {
    font-size: 2.5em;
  }
}

@media (max-width: 768px) {
  .contact-page {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .contact-header .page-title {
    font-size: 2em;
  }
  .contact-content {
    max-width: 90%;
  }
  .contact-info h3 {
    font-size: 1.8em;
  }
}

@media (max-width: 480px) {
  .contact-header .page-title {
    font-size: 1.8em;
  }
  .contact-info h3 {
    font-size: 1.5em;
  }
  .social-links .social-btn {
    font-size: 1.5em;
    margin: 0 5px;
  }
}
</style>