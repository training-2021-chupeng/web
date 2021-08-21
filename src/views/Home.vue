<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>{{ msg }}</div>
    <div>{{ msg }}</div>
    <div>{{ msg }}</div>
    <div>{{ msg }}</div>
    <div>{{ msg }}</div>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
import demoService from '../global/service/demoService'

export default {
  name: 'Home',
  data () {
    return {
      msg: ''
    }
  },
  created () {
    demoService.test()
        .then((msg) => {
          this.msg = msg

        }).finally(() => {
    })
  },
  methods: {
    hello () {
      console.log('test')
    }
  }
}
</script>
