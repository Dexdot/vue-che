<template>
  <div class="catalog">
    <FilterList></FilterList>
  </div>
</template>

<script>
import FilterList from "./FilterList";

export default {
  name: "PageCatalog",
  components: {
    FilterList
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
.catalog
  padding-left: $container-padding
  padding-right: 4vw


</style>

