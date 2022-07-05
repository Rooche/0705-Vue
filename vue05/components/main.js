let template = `
  <div>
    <my-header :cartItemCount="cartItemCount"></my-header>
    <main>
      <div class="row product" v-for="product in products">
        <div class="col-md-4">
          <!--상품 이미지 출력-->
          <figure>
            <img :src="product.image" width="200px">
          </figure>
        </div>
      <div class="col col-expand">
      <!--상품관련 정보 출력-->
        <router-link tag="h1" :to="{name : 'id', params : {id : product.id}}">
            {{ product.title }}
        </router-link>
          <p v-html="product.description"></p>
          <p class="price">{{ product.price | formatPrice }}</p>
      </div>
        <button v-on:click="addToCart(product)" class="btn btn-primary btn-lg" :disabled="!canAddToCart(product)">장바구니 담기</button>
        <span class="inventory-message" v-if="(product.stock - cartCount(product.id)) == 0"> 품절 !</span>
        <span class="inventory-message" v-else-if="(product.stock - cartCount(product.id)) > 5">{{ product.stock - cartCount(product.id) }} <!--특정 하나만 보여주는게 아니라 새로 cartCount로 수정함-->
        남았습니다!!</span>
        <span class="inventory-message" v-else> 지금 구매하세요 !</span>
        <div class="rating">
        <span v-for="n in 5" :class="{'rating-active' : checkRating(n, product)}">☆</span>
      </div>
      </div><!-- end v-for -->
    </main>
  </div>`

import myHeader from './header.js'

export default {
  name: 'iMain',
  template: template,
  data: function () {
    return {
      products: [],
      cart: []
    }
  },
  computed: {
    cartItemCount: function () {
      return this.cart.length;
    }
  },
  components : {
    myHeader
  },
  methods: {
    addToCart: function (product) {
      this.cart.push(product.id);
    },
    checkRating: function (n, product) {
      return (product.rating - n) >= 0;
    },
    canAddToCart: function (product) {
      return this.cartCount(product.id) < product.stock;
    },
    cartCount: function (productId) {
      let count = 0;
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i] == productId) {
          count++;
        }
      }
      return count;
    }
  },
  filters: {
    formatPrice: function (price) {
      if (!parseInt(price)) { return ''; }
      if (price > 99999) {
        var priceString = (price / 100).toFixed(2)
        var priceArray = priceString.split('').reverse();
        var index = 3;
        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, ',');
          index += 4;
        }
        return '$' + priceArray.reverse().join('');
      } else {
        return '$' + (price / 100).toFixed(2);
      }
    }
  },
  created: function () {
    fetch('/vue05/products.json')
      .then(reponse => { return reponse.json(); })
      .then(data => {
        this.products = data.products;
      }).catch(err => console.log(err));
  }
}