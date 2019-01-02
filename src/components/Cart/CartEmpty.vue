<template>
  <div class="cart__content cart__content--empty">
    <div class="cart__map-wrap">
      <button
        class="cart__close"
        type="button"
      >
        <img
          src="./close.svg"
          alt="Закрыть"
        >
      </button>
      <div class="cart__map">
        <GmapMap
          class="cart__map-node"
          :center="mapCenter"
          :zoom="13"
          :options="mapOptions"
        >
          <GmapMarker
            v-if="markers"
            v-for="(m, i) in markers"
            :key="i"
            :position="m.position"
          />
        </GmapMap>
      </div>
      <p class="cart__map-info">
        <b>Радиус доставки:</b> <br />
        <b>10 км от ресторана</b>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartEmpty",
  data: () => ({
    mapOptions: {
      styles: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5"
            }
          ]
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161"
            }
          ]
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#f5f5f5"
            }
          ]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#bdbdbd"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#dadada"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5"
            }
          ]
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#c9c9c9"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        }
      ],
      disableDefaultUI: true,
      zoomControl: false,
      scrollwheel: true
    },
    mapCenter: { lat: 59.901845781471003, lng: 30.316981919101998 },
    markers: [
      {
        position: { lat: 59.901845781471003, lng: 30.316981919101998 }
      }
    ]
  })
};
</script>

<style lang="sass" scoped>
.cart
  &__content
    margin-top: 73px
    padding-top: 32px

    @media (max-width: 800px)
      margin-top: 89px
    @media (max-width: 500px)
      margin-top: 0

    &--empty
      color: #fff
      text-align: center
      padding-top: 0
  
  &__close
    width: 80px
    height: 80px
    background: $r
    display: none
    align-items: center
    justify-content: center
    margin-left: auto

    position: absolute
    top: 0
    right: 0
    z-index: 1    

    @media (max-width: 1100px)
      display: flex

    img
      stroke: #fff
      width: 20px
      height: 20px

  &__map-wrap
    width: 100%
    height: calc(100vh - 73px)
    position: relative

    @media (max-width: 800px)
      height: 100vh
      
  &__map
    background: $b
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    width: 100%
    height: 100%

    &-node
      width: 100%
      height: 100%

  &__map-info
    z-index: 1
    position: absolute
    bottom: 0
    left: 0
    right: 0

    background: $r
    width: 100%
    padding: 44px 0

    letter-spacing: 0.01em
    line-height: 23px
    font-size: 16px

    b
      +tt(bold)

</style>
