let template = `
<div>
 <my-header></my-header>
 <h1> id {{ $route.params.id }} 입니다.</h1>
 <div class="row">
  <div class="col-md-5 col-md-=offset-0">
   <figure>
    <img class="product" v-bind:src="product.image">
   </figure>
  </div>
  <div class="col-md-6 col-md-offset-0 description">
   <h1>{{product.title}}</h1>
   <p v-html="product.description"></p>
   <p class="price">{{product.price}}</p>
   <button @click="edit">상품수정</button>
   <router-view></router-view>
 </div>
</div>`


import myHeader from './header.js'
export default {
 template : template,
 components : {
  myHeader
 },
 data : function(){
  return {
   product : {}
  }
 },
 methods : {
  edit : function(){
   this.$router.push({name: 'edit'});
  }
 },
 created : function(){
  fetch('/vue05/products.json')
  .then(response => response.json())
  .then(data =>{
   this.product = data.products.filter(data=> data.id == this.$route.params.id)[0]; //filter는 값이 하나여도 배열로 들어옴
  })
 }
}