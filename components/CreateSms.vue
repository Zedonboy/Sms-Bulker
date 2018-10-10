<template>
  <div class="sms-container">
      <h2 class="createSms-title">Type Sms Message</h2>
    <b-form-textarea class="message-container" id="textarea1"
                     v-model="text"
                     placeholder="Type Message"
                     :rows="8"
                     :max-rows="10">
    </b-form-textarea>
    <div class="button-container">
        <b-button @click="addMessage" class="addNumber-submit" variant="success" size="lg">Next</b-button>
    </div>
  </div>
</template>
<script>
import store from "../store"
export default {
    data () {
        return {
            text : ""
        }
    },
    methods : {
        addMessage () {
            if (this.text.length == 0) return
            store.commit("addMessage", this.text)
            this.$router.push("/add_numbers")
        }
    }
}
</script>
<style>
.message-container {
    grid-area: 2 / 2 / span 2 / 2
}
.createSms-title {
    color: aliceblue;
    grid-area: 1 / 2 / 1 / 2;
    text-align: center
}
.button-container {
    grid-area: 4 / 2 / 4 / 2;
    display: flex;
    align-items: center;
    justify-content: center
}
</style>
