<template>
  <q-card class="product-card" flat square>
    <div class="image-container">
      <q-img :src="image" :alt="name" class="product-image" />
      <div class="hover-overlay">
        <q-icon name="visibility" size="md" color="white" class="overlay-icon" @click.stop="viewDetails" />
      </div>
    </div>

    <q-card-section class="q-pt-md q-pb-sm text-center">
      <div class="text-h6 text-weight-bold text-dark-text product-name">{{ name }}</div> <div class="text-subtitle1 text-grey-7 q-mt-xs">Kategori Pakaian</div> <div class="text-h6 text-accent-main q-mt-sm product-price"> Rp {{ price.toLocaleString('id-ID') }}
      </div>
    </q-card-section>

    <q-card-actions align="center" class="q-pb-md">
      <q-btn
        label="Beli Sekarang"
        icon="shopping_cart"
        color="secondary"
        text-color="white"
        class="add-to-cart-btn animated-btn"
        @click="addToCart"
      />
      <q-btn
        label="Detail"
        color="primary"
        text-color="white"
        class="view-details-btn animated-btn q-ml-sm"
        outline
        @click="viewDetails"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'ProductCard',
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    productId: {
      type: [String, Number],
      default: null
    },
    price: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const router = useRouter()

    const viewDetails = () => {
      if (props.productId) {
        router.push(`/item-detail/${props.productId}`) // Diubah ke /item-detail
      } else {
        console.log(`Melihat detail untuk ${props.name}`);
      }
    }

    const addToCart = () => {
      console.log(`Menambahkan ${props.name} ke keranjang!`);
      alert(`${props.name} ditambahkan ke keranjang!`);
    }

    return {
      viewDetails,
      addToCart
    }
  }
})
</script>

<style lang="scss" scoped>
.product-card {
  background-color: $card-bg;
  border: 1px solid $border-light;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  width: 100%;
  max-width: 350px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
    border-color: $secondary; // Border oranye saat hover

    .hover-overlay {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .image-container {
    position: relative;
    height: 200px;
    background-color: #f0f0f0;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    overflow: hidden;
  }

  .product-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 10px;
    transition: transform 0.3s ease;

    .product-card:hover & {
      transform: scale(1.08);
    }
  }

  .hover-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($secondary, 0.7); // Overlay oranye transparan saat hover
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.3s ease;
    transform: translateY(100%);
  }

  .overlay-icon {
    font-size: 3em !important;
    cursor: pointer;
    background-color: rgba(0,0,0,0.3);
    border-radius: 50%;
    padding: 10px;
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.1);
    }
  }

  .product-name {
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3em;
    color: $text-dark; // Nama produk warna gelap
  }

  .product-price {
    font-size: 1.4em;
    font-weight: bold;
    color: $accent-main !important; // Harga menggunakan accent-main (oranye)
    margin-bottom: 10px;
  }

  .q-card-actions {
    padding-top: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .add-to-cart-btn, .view-details-btn {
    width: calc(50% - 15px);
    // Gaya tombol "Beli Sekarang" (gradasi primary-secondary)
    background: linear-gradient(to right, $primary, $secondary) !important; // Gradasi biru-oranye
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    transition: all 0.3s ease;

    &.q-btn--outline {
        // Gaya tombol "Detail" (outline dengan warna primary)
        background: none !important;
        color: $primary !important; // Warna teks primary
        border-color: $primary !important; // Warna border primary
        box-shadow: none;
        &:hover {
            background-color: rgba($primary, 0.1) !important;
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(0,0,0,0.2);
        }
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(0,0,0,0.3);
      opacity: 0.9;
    }
  }

  @media (max-width: 480px) {
    .add-to-cart-btn, .view-details-btn {
      width: calc(100% - 20px);
      margin: 5px 0;
    }
  }
}
</style>