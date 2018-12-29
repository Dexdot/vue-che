<template>
  <ul class="catalog-list">
    <li
      v-for="product in products"
      :key="product.id"
      class="catalog-list__item"
    >
      <ProductCard :product="product"></ProductCard>
    </li>
  </ul>
</template>

<script>
import ProductCard from "../ProductCard";

export default {
  name: "CatalogList",
  components: {
    ProductCard
  },
  data: () => ({
    products: []
  }),
  created() {
    this.products = this.$store.getters.products;
  }
};
</script>


<style lang="sass" scoped>
.catalog-list
  display: flex
  flex-direction: row
  align-items: stretch
  flex-wrap: wrap
  padding-bottom: 104px
  margin-left: -64px

  @media (max-width: 1800px)
    margin-left: -40px
  @media (max-width: 500px)
    padding-bottom: 136px
    margin-left: 0
    flex-direction: column

.catalog-list__item
  width: calc(25% - 64px)
  margin-top: 80px
  margin-left: 64px

  @media (max-width: 1800px)
    width: calc(25% - 40px)
    margin-left: 40px
  @media (max-width: 1600px)
    width: calc(33% - 40px)
  @media (max-width: 800px)
    width: calc(50% - 40px)
  @media (max-width: 500px)
    width: 100%
    margin-left: 0

  // .product
  //   height: 100%
      
</style>
