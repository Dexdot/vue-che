<template>
  <div class="catalog-container">
    <div class="catalog">
      <Cart />
      <CategoryList @change="onCategoryChange"></CategoryList>
      <div class="catalog__header">
        <h2 class="catalog__title">
          {{ category.text }}
          <span> {{ category.count }} </span>
        </h2>
        <ElSelect
          v-model="filter"
          placeholder="По цене"
        >
          <ElOption
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </ElOption>
        </ElSelect>
      </div>
      <CatalogList
        :category="category"
        :filter="filter"
      ></CatalogList>
    </div>
  </div>
</template>

<script>
import Cart from "../Cart/Cart";

import CatalogList from "./CatalogList";
import CategoryList from "../CategoryList";

import { Select, Option } from "element-ui";

export default {
  name: "Catalog",
  components: {
    ElSelect: Select,
    ElOption: Option,
    CategoryList,
    CatalogList,
    Cart
  },
  data: () => ({
    products: [],
    category: { text: "", count: 0 },
    filter: "",
    options: [
      {
        label: "По возрастанию",
        value: "asc"
      },
      {
        label: "По убыванию",
        value: "desc"
      }
    ]
  }),
  methods: {
    onCategoryChange(selected) {
      this.category = selected;
    }
  },
  created() {
    this.products = this.$store.getters.products;
  }
};
</script>

<style lang="sass" scoped>
.catalog-container
  padding-right: 326px

  @media (min-width: 2200px)
    padding-right: 400px
  @media (max-width: 1100px)
    padding-right: 0

.catalog
  overflow-x: hidden
  padding-left: $container-padding
  
  padding-right: 4vw
  @media (max-width: 1100px)
    padding-right: $container-padding
  @media (max-width: 800px)
    padding-left: $container-padding-mob
    padding-right: $container-padding-mob

.catalog__header
  display: flex
  flex-direction: row
  align-items: center
  justify-content: space-between

  @media (max-width: 800px)
    padding-top: 8px

.catalog__title
  color: $b
  +tt(bold)
  +ff('font-size', (1280px: 26px, 1440px: 32px, 1920px: 42px, 2550px: 56px))
  letter-spacing: 0.01em

  position: relative

  @media (max-width: 800px)
    margin-top: 56px
    align-self: flex-start
  @media (max-width: 360px)
    font-size: 24px
  
  span
    position: absolute
    top: 0
    right: 0
    transform: translate(150%, 20%)

    font-size: 18px
    letter-spacing: 0.01em
    color: rgba($b, 0.2)

    @media (max-width: 360px)
      font-size: 14px

</style>

