<template>
  <div class="filter-container">
    <div :class="['filter', {'no-right-gradient': hideRightGradient}]">
      <div class="filter__overlay">
      </div>
      <ul class="filter__list">
        <li
          v-for="(product, i) in products"
          :key="i"
          @click="onClick(i)"
          :class="{ active: i === products.indexOf(selected) }"
        >
          <button class="filter__btn">{{ product.text }}</button>
          <span class="filter__num">{{ product.count }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ScrollBooster from "scrollbooster";

export default {
  name: "FilterList",
  data: () => ({
    selected: null,
    x: 0,
    sb: null,
    breakpoint: 800,
    DOM: {
      viewport: null,
      content: null,
      list: null
    }
  }),
  computed: {
    products() {
      const { products } = this.$store.getters;
      const filtered = [];

      // Собираем все теги без повторений
      products.forEach(product => {
        product.tags.forEach(tag => {
          if (filtered.indexOf(tag) === -1) filtered.push(tag);
        });
      });

      // Считаем кол-во товаров с определенным тегом
      // Например: 4 популярных, 2 супа, 3 снэка
      const list = filtered.map(tag => {
        let count = 0;

        products.forEach(product => {
          if (product.tags.indexOf(tag) !== -1) {
            count += 1;
          }
        });

        return { text: tag, count };
      });

      return list;
    },
    maxScrollLeft() {
      if (this.DOM.list) {
        return Math.floor(
          this.DOM.list.scrollWidth -
            this.DOM.list.getBoundingClientRect().width
        );
      }
    },
    hideRightGradient() {
      return this.x >= this.maxScrollLeft;
    }
  },
  methods: {
    onClick(i) {
      this.selected = this.products[i];
      this.$emit("filter", this.selected);
    },
    initScrollBooster() {
      this.sb = new ScrollBooster({
        viewport: this.DOM.viewport,
        content: this.DOM.content,
        friction: 0.1,
        mode: "x",
        onUpdate: ({ position }) => {
          if (window.innerWidth > this.breakpoint) {
            this.DOM.content.style.transform = `translateX(${-position.x}px)`;
            this.x = position.x;
          } else {
            this.DOM.content.style = "";
          }
        }
      });
    }
  },
  mounted() {
    // Initialize Scroll Booster
    this.DOM.viewport = this.$el;
    this.DOM.content = this.$el.querySelector(".filter");
    this.DOM.list = this.$el.querySelector(".filter__list");

    this.initScrollBooster();
  },
  created() {
    this.selected = this.products[0];
    this.$emit("filter", this.selected);
  }
};
</script>

<style lang="sass" scoped>
.filter-container
  @media (min-width: 801px)
    position: relative
    &::before
      content: ''
      z-index: 1
      position: absolute
      bottom: 0
      left: -50vw
      right: 0

      width: 200vw
      height: 1px
      background: #E8EAED

.filter
  +tt(reg)
  color: $b
  font-size: 16px

  margin-bottom: 60px
  overflow: hidden
  position: relative

  @media (max-width: 800px)
    z-index: 3
    position: fixed
    bottom: 0
    left: 0
    right: 0
    top: 0

    margin-bottom: 0
    width: 100vw
    height: 100vh
    display: flex
    justify-content: flex-end
    align-items: flex-end

    transition: $trs-forhims-6
    pointer-events: none
    visibility: hidden

.filter.active
  pointer-events: auto
  visibility: visible

  .filter__list,
  &::before
    transform: translate(0, 0)

  .filter__overlay
    opacity: 1
.filter
  // Белый градиент справа на десктопе
  &::after
    content: ''
    pointer-events: none
    position: absolute
    bottom: 0
    top: 0
    right: 0

    display: none
    width: 176px
    height: 100%

    transition: $trs-forhims-6
    background: linear-gradient(270.19deg, #FFFFFF 9.25%, rgba(255, 255, 255, 0) 110%)
    @media (min-width: 801px)
      display: block
  
  // Белый градиент снизу на мобиле
  &::before
    content: ''
    position: absolute
    bottom: 0
    right: 0
    left: 0
    width: 100%
    height: 180px
    background: linear-gradient(359.18deg, #FFFFFF 19.3%, rgba(255, 255, 255, 0) 80%)
    pointer-events: none
    z-index: 2

    transition: $trs-forhims-6
    transform: translateY(360px)

    display: none
    @media (max-width: 800px)
      display: block

  &.no-gradient::before
    opacity: 0
  &.no-right-gradient::after
    opacity: 0

.filter__overlay
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  width: 100%
  height: 100%
  background: rgba(#000, 0.2)

  transition: $trs-forhims-6
  opacity: 0    

  display: none
  @media (max-width: 800px)
    display: block

.filter__list
  padding-top: 32px
  display: flex

  cursor: move

  @media (max-width: 800px)
    cursor: auto
    background: #fff
    border: 0

    padding: 48px 56px
    width: 100%
    height: 360px
    flex-direction: column
    align-items: flex-start
    justify-content: flex-start
    flex-wrap: nowrap

    transition: $trs-forhims-6
    transform: translate(0, 105%)

    +scrollbar

.filter__list li
  font-size: 16px
  position: relative
  margin-bottom: 32px
  margin-right: 40px

  @media (min-width: 2200px)
    margin-right: 3%

  transition: 0.2s ease-out
  &:hover,
  &.active
    .filter__btn
      color: $r

    &::before
      transform: translateX(-50%) scaleX(1)

    .filter__num
      opacity: 1
      color: $r

  &::before
    content: ''
    width: 30px
    height: 2px
    background: $r
    position: absolute
    bottom: -32px
    left: 50%
    transform: translateX(-50%) scaleX(0)
    transform-origin: 50% 50%
    transition: 0.2s ease-out

  @media (max-width: 800px)
    &::before
      display: none

    &:last-child
      margin-bottom: 0

    &.active,
    &:hover
      color: $b

      .tabs__num
        color: rgba($b, 0.3)


.filter__btn
  position: relative
  transition: 0.2s ease-out
  color: $b
    
.filter__num
  position: absolute
  top: 0
  right: 0
  transform: translate(150%, -30%)
  font-size: 9px
  color: rgba($b, 0.3)
  transition: 0.2s ease-out

  @media (min-width: 2200px)
    font-size: 13px

</style>

