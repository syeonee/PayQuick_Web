<template>
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
    <v-card>
      <v-card-title>
        상품 결제 내역
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="payInfos"
        :search="search"
      ></v-data-table>
    </v-card>
    </v-main>
</template>
<script>
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
      this.$http.get(`/api/pay/${id}`)
      .then((response) => {
          this.payInfos = response.data
      })
      .catch((err) => {
          console.log(err)
      })
	
  },
  props: {
  },
  data: function () {
    var id = this.$route.params.id
    return {
      user: {
      },
      payInfos: [],
      search: '',
      headers: [
        {
          text: '결제번호',
          align: 'start',
          value: 'payNum',
        },
        { text: '결제일시', value: 'payDate' },
        { text: '상품명', value: 'prodName' },
        { text: '상품가격', value: 'prodPrice' },
        { text: '구매자(ID)', value: 'cusId' },
      ],
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
   
  }
}
</script>

