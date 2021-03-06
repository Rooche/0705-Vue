let template = `
              <header>
                <div class="navbar navbar-default">
                  <div class="navbar-header">
                    <h1><router-link v-bind:to="{name : 'iMain'}">{{ sitename }}</router-link></h1>
                  </div>
                  <div class="nav navbar-nav navbar-right cart">
                    <router-link active-class="active" tag="button" class="btn btn-default btn-lg" :to="{name : 'form'}">
                     <span class="glypicon glypicon-shopping-cart">{{ cartItemCount }}</span>
                     <span>đ´ě˛´íŹěě</span>
                    </router-link>
                  </div>
                </div>
              </header>`

export default {
  name: 'my-header',
  template: template,
  data: function () {
    return {
      sitename: 'Vue.js ě ěěŠíěľ'
    }
  },
  props: ['cartItemCount']
}