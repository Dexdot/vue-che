<template>
  <transition
    @beforeEnter="beforeEnter"
    @enter="enter"
    :css="false"
    @leave="leave"
  >
    <div class="product">
      <div class="product__overlay"></div>

      <div class="product__inner">
        <div class="product__img-wrap">
          <div
            class="product__img"
            :style="{ backgroundImage: `url(${product.src})` }"
          ></div>
        </div>

        <!-- product__container -->
        <div class="product__container">
          <a
            class="product__close"
            @click="$router.go(-1)"
          >
            <img
              src="./Cart/close.svg"
              alt="Закрыть"
            >
          </a>

          <!-- product__content -->
          <div class="product__content">
            <div class="product__head">
              <h2 class="product__title">{{ product.name }}</h2>
              <span class="product__weight">{{ product.weight }}</span>
            </div>

            <template v-if="product.description">
              <small class="product__label">Описание</small>
              <p class="product__text product__text--description">
                {{ product.description }}
              </p>
            </template>

            <template v-if="product.composition">
              <small class="product__label">Состав</small>
              <p class="product__text product__text--composition">
                {{ product.composition }}
              </p>
            </template>

            <small class="product__label">Пищевая ценность</small>

            <ul class="product__table">
              <li class="product__col">
                <b>{{ product.calories }}</b> <small>ккал</small>
              </li>
              <li class="product__col">
                <b>{{ product.squirrels }}</b> <small>белки</small>
              </li>
              <li class="product__col">
                <b>{{ product.fats }}</b> <small>жиры</small>
              </li>
              <li class="product__col">
                <b>{{ product.carbohydrates }}</b> <small>углеводы</small>
              </li>
            </ul>
          </div>
          <!-- ./product__content -->
        </div>
        <!-- ./product__container -->
      </div>

      <form class="product__banner">
        <div class="product__amount">
          <button
            class="product__amount-btn"
            type="button"
            @click="amount++"
          >
            +
          </button>
          <span>{{ amount }}</span>
          <button
            class="product__amount-btn"
            type="button"
            @click="amount > 1 && amount--"
          >
            -
          </button>
        </div>

        <div class="product__banner-text">
          <span>{{ product.price }}</span>
          <button type="submit">Добавить</button>
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
import { TweenMax, TimelineMax, Power2 } from "gsap";

export default {
  name: "PageProduct",
  data: () => ({
    amount: 1,
    product: {}
  }),
  methods: {
    beforeEnter(el) {
      document.querySelector(".header").classList.remove("hidden");

      TweenMax.set(
        [
          ...el.querySelectorAll(
            ".product__amount, .product__banner-text, .product__overlay"
          )
        ],
        { opacity: 0 }
      );

      TweenMax.set(el.querySelector(".product__img"), {
        opacity: 0,
        scale: 1.03,
        y: "20%",
        transformOrigin: "50% 50%"
      });

      TweenMax.set(
        [
          ...el.querySelectorAll(
            ".product__close, .product__head, .product__text, .product__label, .product__table"
          )
        ],
        { opacity: 0, y: "40px" }
      );

      TweenMax.set(
        [...el.querySelectorAll(".product__inner, .product__banner")],
        { y: "100%" }
      );
    },
    enter(el, done) {
      const inner = el.querySelectorAll(".product__inner");
      const overlay = el.querySelectorAll(".product__overlay");
      const img = el.querySelectorAll(".product__img");
      const stagger = el.querySelectorAll(
        ".product__close, .product__head, .product__label, .product__text, .product__table"
      );
      const banner = el.querySelectorAll(".product__banner");
      const bannerInner = el.querySelectorAll(
        ".product__amount, .product__banner-text"
      );

      const tl = new TimelineMax({
        onComplete: done
      });

      const ease = Power2.easeInOut;

      tl.fromTo(inner, 0.6, { y: "100%" }, { y: "0%", ease })
        .fromTo(overlay, 0.4, { opacity: 0 }, { opacity: 0.2 }, "-=0.3")
        .fromTo(
          img,
          0.6,
          { opacity: 0, scale: 1.03, y: "20%" },
          { opacity: 1, scale: 1, y: "0%" },
          "-=0.2"
        )
        .staggerFromTo(
          stagger,
          0.6,
          { opacity: 0, y: "40px" },
          { opacity: 1, y: "0%" },
          0.05,
          "-=0.6"
        )
        .fromTo(banner, 0.6, { y: "100%" }, { y: "0%", ease }, "-=0.8")
        .staggerFromTo(
          bannerInner,
          0.4,
          { opacity: 0, ease },
          { opacity: 1, ease },
          0.03,
          "-=0.4"
        );
    },
    leave(el, done) {
      const inner = el.querySelectorAll(".product__inner");
      const overlay = el.querySelectorAll(".product__overlay");
      const img = el.querySelectorAll(".product__img");
      const stagger = el.querySelectorAll(
        ".product__close, .product__head, .product__label, .product__text, .product__table"
      );
      const banner = el.querySelectorAll(".product__banner");
      const bannerInner = el.querySelectorAll(
        ".product__amount, .product__banner-text"
      );

      const tl = new TimelineMax({
        onComplete: done
      });

      const ease = Power2.easeInOut;

      tl.to(bannerInner, 0.2, { opacity: 0, ease })
        .to(banner, 0.4, { y: "100%", ease })
        .staggerTo(stagger, 0.4, { opacity: 0, y: "-40px" }, 0.05, "-=0.6")
        .to(img, 0.2, { opacity: 0, y: "20%", scale: 1.03 }, "-=0.6")
        .to(overlay, 0.2, { opacity: 0 }, "-=0.8")
        .to(inner, 0.4, { y: "100%", ease }, "-=0.4");
    }
  },
  created() {
    const { id, amount } = this.$route.params;

    // Задаем кол-во
    if (amount) this.amount = amount;

    // Находим товар с данным ID
    this.$store.getters.products.forEach(product => {
      if (product.id === id) {
        this.product = product;
      }
    });
  }
};
</script>

<style lang="sass" scoped>
.product
  position: fixed
  z-index: 3
  top: 73px
  left: 0

  overflow: hidden
  width: 100vw
  height: 100vh
  display: flex
  align-items: flex-end
  justify-content: center

  &__overlay
    z-index: -1
    position: absolute
    top: 0
    right: 0
    left: 0
    bottom: 0
    background: #000
    cursor: pointer
    opacity: 0.2

  &__inner
    width: 100%
    height: 100%
    display: flex
    flex-direction: row
    align-items: stretch
    justify-content: space-between

    @media (max-width: 800px)
      flex-direction: column
      justify-content: flex-start
      height: 100%

      +scrollbar
      position: relative

.product
  &__img-wrap
    width: 75%
    height: 100%
    display: flex
    align-items: center
    justify-content: center
    background: #fff

    @media (max-width: 1440px)
      width: 70%
    @media (max-width: 1100px)
      width: 65%
    @media (max-width: 900px)
      width: 60%
    @media (max-width: 800px)
      display: block
      width: 100%
      height: auto
      padding-top: 80px
      padding-bottom: 24px

  &__img
    background-repeat: no-repeat
    background-size: cover
    background-position: center center

    width: 60%
    padding-bottom: 44.25%

    @media (max-width: 800px)
      display: block
      margin: 0 auto
    @media (max-width: 500px)
      width: 90%
      padding-bottom: 68.25%

.product
  &__container
    padding-top: 6%
    padding-bottom: calc(168px + 73px)
    width: 25%
    height: 100%
    display: flex
    flex-direction: column

    background: #F8F9FA
    position: relative

    @media (max-width: 1440px)
      width: 30%
    @media (max-width: 1430px)
      padding-bottom: calc(144px + 73px)
    @media (max-width: 1100px)
      width: 35%
    @media (max-width: 900px)
      width: 40%
    @media (max-width: 800px)
      position: static
      padding-top: 40px
      width: 100%
      display: block
    @media (max-width: 500px)
      padding-bottom: calc(56px + 73px)

  &__content
    background: #F8F9FA
    +scrollbar
    max-height: 100%
    padding: 0 75px

    @media (max-width: 1800px)
      padding: 0 56px
    @media (max-width: 1600px)
      padding: 0 32px
    @media (max-width: 800px)
      padding: 0 $container-padding-mob
      max-height: unset
      overflow: unset
    
.product
  &__close
    position: absolute
    top: 30px
    right: 30px
    
    width: 28px
    height: 28px
    cursor: pointer

    @media (max-width: 1600px)
      right: 32px
      top: 32px
    @media (max-width: 800px)
      width: 80px
      height: 80px
      background: #F9F9FA
      top: 0
      right: 0

    img
      @media (max-width: 800px)
        width: 20px
        height: 20px
.product
  &__head
    margin-bottom: 40px
    @media (max-width: 800px)
      margin-bottom: 32px

  &__title
    display: inline
    max-width: 10em
    margin-right: 8px

    +tt(bold)
    +ff('font-size', (500px: 24px, 1920px: 30px, 2550px: 42px))
    letter-spacing: 0.01em

.product
  &__weight
    display: inline
    white-space: pre
    color: #C9C9C9

  &__label
    font-size: 15px
    line-height: 1.4
    color: rgba($b, 0.4)
    display: block
    margin-bottom: 16px
    
    @media (min-width: 2200px)
      font-size: 19px

  &__text
    +tt(reg)
    font-size: 15px
    line-height: 1.4
    margin-bottom: 40px
    max-width: 19em
    
    @media (min-width: 2200px)
      font-size: 19px
    @media (max-width: 800px)
      max-width: 80%
      margin-bottom: 32px
  
.product
  &__table
    display: flex
    align-items: stretch
    margin-bottom: 16px

    @media (max-width: 1430px)
      flex-wrap: wrap
  
  &__col
    margin-right: 40px
    &:last-child
      margin-right: 0
      margin-bottom: 0

    @media (max-width: 1430px)
      margin-right: 24px
      margin-bottom: 24px

    b
      +tt(bold)
      display: block
      font-size: 18px
      margin-bottom: 4px

      @media (min-width: 2200px)
        font-size: 22px
      @media (max-width: 1430px)
        margin-bottom: 0

    small
      font-size: 12px
      color: rgba($b, 0.4)

      @media (min-width: 2200px)
        font-size: 16px

.product__banner
  position: fixed
  bottom: 0
  right: 0

  width: 25%

  @media (max-width: 1440px)
    width: 30%
  @media (max-width: 1100px)
    width: 35%
  @media (max-width: 900px)
    width: 40%
  @media (max-width: 800px)
    width: 100%
.product__banner
  background: $r
  color: #ffffff
  +tt(bold)

  display: flex
  flex-direction: row
  align-items: stretch
  margin-top: auto
  min-height: 168px

  @media (max-width: 1430px)
    min-height: 144px
    
  @media (max-width: 500px)
    min-height: 56px
    height: 56px
    
.product__banner-text
  width: 100%
  display: flex
  flex-direction: row
  align-items: center
  justify-content: center

  & > span
    font-size: 18px
    margin-right: 80px
    display: block
    position: relative

    @media (min-width: 2200px)
      font-size: 20px
    @media (max-width: 500px)
      display: none !important

    &::before
      content: ''
      position: absolute
      top: 50%
      right: -40px
      transform: translate(0, -50%)
      width: 1px
      height: 25px
      opacity: 0.4
      background: #fff

  button
    font-size: 16px
    
    @media (min-width: 2200px)
      font-size: 18px
    @media (max-width: 500px)
      +tt(bold)
      font-size: 12px
      letter-spacing: 0.06em
      text-transform: uppercase

.product__amount
  width: 104px
  padding-top: 24px
  padding-bottom: 24px
  display: flex
  flex-direction: column
  align-items: center

  background: #B81111
  font-size: 12px
  
  @media (min-width: 2200px)
    font-size: 18px
  @media (max-width: 500px)
    flex-direction: row-reverse
    padding: 0
    width: auto

  span
    padding: 0
    border: 0
    color: #fff
    text-align: center
    width: 16px
    pointer-events: none

  &-btn
    min-width: 32px
    min-height: 32px
    width: 32px
    height: 32px

    @media (max-width: 500px)
      font-size: 18px

    &:first-child
      margin-bottom: 20px

      @media (max-width: 1430px)
        margin-bottom: 8px
      @media (max-width: 500px)
        margin: 0 25px

    &:last-child
      margin-top: 20px

      @media (max-width: 1430px)
        margin-top: 8px
      @media (max-width: 500px)
        margin: 0 25px

</style>


