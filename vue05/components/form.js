let template = `
  <div>
  <my-header :cartItemCount="cartItemCount"></my-header>
    <div class="row">
      <div class="col-md-10 col-md-offset1">
      <div class="panel panel-info">
        <div class="panel-heading">애완용품 체크아웃</div>
        <div class="panel-body">

          <div class="form-group">
            <div class="col-md-12">
              <h4><strong>정보를 입력하세요</strong></h4>
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-6">
              <strong>이름: </strong>
              <input class="form-control" v-model.trim="order.firstName">
            </div>
            <div class="col-md-6">
              <strong>성: </strong>
              <input class="form-control" v-model.trim="order.lasttName">
            </div>
          </div>


          <div class="form-grop">
            <div class="col-md-12">
              <strong>주소:</strong>
            </div>
            <div class="col-md-12">
              <input class="form-control" v-model.trim="order.address">
            </div>
          </div>

        <div class="form-group">
            <div class="col-md-12">
              <strong>도시</strong>
            </div>
            <div class="col-md-12">
              <input class="form-control" v-model.trim="order.city">
            </div>
        </div>

          <div class="form-group">
            <div class="col-md-2">
              <strong>주소:</strong>
              <select class="form-control" v-model="order.states">
                <option disabled value="">주</option>
                <option v-for="(state, key) in states" :value="state">{{ key }}</option> <!--바인드를 하는데 밸류속성임-->
              </select>
            </div>

          </div>
          <div class="form-group">
            <div class="col-md-6 col-md-offset-4">
              <strong>우편번호:</strong>
              <input class="form-control" type="number" v-model.number="order.zip"> <!--.number 수식어는 v-model 지시자 값을 숫자로 자동 타입변환할때 쓴다.-->
            </div>
          </div>

          <div class="form-group">
            <div class="col-md-6 boxes">
              <input type="checkbox" id="gift" value="true" :true-value="order.sendGift" :false-value="order.dontSendGift" v-model="order.gift">
              <!--체크박스는 true와 false값을 가지기에 이런식으로 처리가 가능하다.-->
              <label for="gift">선물보내기?</label>
            </div>
          </div>

          <div class="form-group">
            <div class="col-md-6 boxes">
              <input type="radio" id="home" v-model="order.method" :value="order.home">
              <label for="home">자택</label>
              <input type="radio" id="business" v-model="order.method" :value="order.business">
              <label for="business">직장</label>
            </div>
          </div>

          <div class="form-group">
            <div class="col-md-6 "></div>
            <button type="submit" class="btn btn-primary submit" @click="submitForm()">주문하기</button>
          </div>
          <div class="col-md-12 verify">
            <pre>
              이름 : {{ order.firstName }}
              성 : {{ order.lasttName }}
              주소 : {{ order.address }}
              도시 : {{ order.city }}
              우편번호 : {{ order.zip }}
              주 : {{ order.states }}
              배송지 : {{ order.method }}
              선물 : {{ order.gift }}
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
<div>`

import myHeader from './header.js'

export default {
  name:'form',
  template : template,
  props:['cartItemCount'],
  data: function() { 
    return {
      order: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        state: '',
        method: '자택 주소',
        business: '직장 주소',
        home: '자택주소',
        gift: '선물로 보내기',
        sendGift: '선물로 보내기',
        dontSendGift: '선물로 보내지 않기',
      },
      states: {
        AL: '알라바마',
        AK: '알래스카',
        AR: '애리조나',
        CA: '캘리포니아',
        NV: '네바다',
        KR: '한국',
      }
    }
  },
  components : {
    myHeader
  },
  methods : {
    submitForm(){
      alert('제출완료');
    }
  }
}