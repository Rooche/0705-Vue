import form from './components/form.js'
import main from './components/main.js'
import product from './components/product.js'
import editProduct from './components/editProduct.js'

export default new VueRouter({
  mode : 'history', //router는 hash mode와 history mode가 있다.
  routes : [
    {
      path : '/',
      name : 'iMain',
      component : main,
      props : true // $router.params -> props, 외부에서 값을 받아올때 지정하는 속성.
    },
    {
      path : '/form',
      name : 'form',
      component : form,
      props : true
    },
    {
      path : '/product/:id', // 슬러쉬가 없으면 상대적인 URL에 붙는것.
      name : 'id',
      component : product,
      props : true,
      children : [
        {
          path : 'edit', //-> /product/1/edit
          name : 'edit',
          component : editProduct,
          props : true
          
        }
      ]
    },
    {
      path : '*',
      redirect : '/'
    }
  ]
})