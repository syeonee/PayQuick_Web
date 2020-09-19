<template>
  <v-app id="inspire">
    <v-main>
    <v-navigation-drawer
      v-model="drawer"
      color='secondary'
      permanent
      app
      clipped
    >
      <v-list
        dense
        nav
        class="py-0"
      >
        <v-list-item two-line >
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{user.shopName}}</v-list-item-title>
            <v-list-item-subtitle>{{user.userName}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="item in items"
          :key="item.title"
	  :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-card class="pa-5">
	<v-layout wrap row justify-center>
	<v-flex xs12 sm6 md3 class="pb-2 ma-6">
            <count-card
              title="일 매출"
              :number="daySale[0]"
              tIcon="mdi-calculator"
              tIconColor="warning"
              bIcon="mdi-update"
              bIconColor="success"
              :bText="c_sale"
            ></count-card>
	</v-flex>
        <v-flex xs12 sm6 md3 class="pb-2 ma-6">
            <count-card
              title="일 판매량"
              :number="dayCount[0]"
              tIcon="mdi-counter"
              tIconColor="warning"
              bIcon="mdi-update"
              bIconColor="success"
              :bText="c_count"
            ></count-card>
        </v-flex>
        <v-flex xs12 sm6 md3 class="pb-2 ma-6">
            <count-card
              title="월 매출"
              :number="monthSale[0]"
              tIcon="mdi-calculator"
              tIconColor="warning"
              bIcon="mdi-update"
              bIconColor="success"
              :bText="c_mon"
            ></count-card>
        </v-flex>
        <v-flex xs12 sm4 class="pb-2 ma-6">
          <chart-card
            title="주간 판매량 현황"
            :data="count"
            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
          ></chart-card>
        </v-flex>
        <v-flex xs12 sm4 class="pb-2 ma-6">
          <chart-card
            title="주간 매출액 현황"
            :data="sale"
            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
          ></chart-card>
        </v-flex>
	</v-layout>
    </v-card>
    </v-main>
  </v-app>
</template>
<script>
    import countCard from '@/components/dashboard/countCard'
    import chartCard from '@/components/dashboard/chartCard'
  export default {
    created () {
	var id = this.$route.params.id
    	this.$http.get(`/api/users/info/${id}`)
    	.then((response) => {
      	    this.user = response.data
    	})
	.catch((err) => {
            console.log(err)
        })
	this.$http.get(`/api/home/daysale/${id}`)
        .then((response) => {
            this.daySale = response.data
	    this.c_sale = parseInt(this.daySale[0])-parseInt(this.daySale[1])
        })
        .catch((err) => {
            console.log(err)
        })
        this.$http.get(`/api/home/monthsale/${id}`)
        .then((response) => {
            this.monthSale = response.data
	    this.c_mon = parseInt(this.monthSale[0])-parseInt(this.monthSale[1])
        })
        .catch((err) => {
            console.log(err)
        })
        this.$http.get(`/api/home/daycount/${id}`)
        .then((response) => {
            this.dayCount = response.data
	    this.c_count = parseInt(this.dayCount[0])-parseInt(this.dayCount[1])
        })
        .catch((err) => {
            console.log(err)
        })
        this.$http.get(`/api/home/sale/${id}`)
        .then((response) => {
            this.sale = response.data
        })
        .catch((err) => {
            console.log(err)
        })
        this.$http.get(`/api/home/count/${id}`)
        .then((response) => {
            this.count = response.data
        })
        .catch((err) => {
            console.log(err)
        })
    },
    components: {
        countCard,
	chartCard
    },
    props: {
    },
    data: function () {
      var id = this.$route.params.id
      var c_sale,c_mon,c_count;
      return {
        user: {
        },
        daySale: {
        },
        monthSale: {
        },
        dayCount: {
        },
        sale: {
        },
        count: {
        },
	c_sale:{
	},
	c_mon:{
	},
	c_count:{
	},
        drawer: null,
        items: [
          { icon: 'mdi-home-account', text: 'Home' , link: `/home/${id}`},
          { icon: 'mdi-credit-card-outline', text: '상품 결제 내역' , link: `/pay/${id}`},
          { icon: 'mdi-calendar-multiple-check', text: '매출 관리' , link: `/total/${id}`},
          { icon: 'mdi-hanger', text: '재고 관리' , link: `/stock/${id}`}
        ]
      }
    },
    methods: {
      login: function (event) {
        this.$http.post('/api/users/login', {
        user: this.user
        })
        .then(
          (res) => {
          alert(res.data.message)
          this.$router.push({ name: 'home', params: { id: this.user.userid }})
          }
        )
        .catch((err) => {
          alert(err)
        })
      }
    }
}
</script>
