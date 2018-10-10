<template>
    <div class="sms-container">
      <h2 class="createSms-title">Type Phone Numbers</h2>
    <b-form-textarea type="number" class="message-container" id="textarea1"
                     v-model="phoneNumber"
                     placeholder="Copy an paste numbers here"
                     :rows="8"
                     :max-rows="10">
    </b-form-textarea>
    <div class="button-container">
        <b-button @click="sendSms" class="addNumber-submit" variant="success" size="lg">Next</b-button>
    </div>
  </div>
</template>
<script>
import store from "../store"
export default {
    data () {
        return {
            phoneNumber : "",
            phoneArray : []
        }
    },
    methods : {
        sendSms () {
            for(let i = 0; i < this.phoneNumber.length; i++) {
                var nationalFormat = true
                switch(this.phoneNumber[i]){
                    case "+":
                        nationalFormat = false
                        this.computePhoneNumber(i, nationalFormat)
                       break;
                    case "0":
                        nationalFormat = true
                        this.computePhoneNumber(i, nationalFormat)
                        break;
                    case " ":
                        break;
                    default :
                        nationalFormat = true
                        this.computePhoneNumber(i, nationalFormat)
                        break;
                }
            }
            store.commit("addNumber", this.phoneNumber)
            this.$router.push("/thanks")
        },
        
        computePhoneNumber(cursor , nationalFormat){
            var phoneNumber = ""
            if(nationalFormat){
                for(let i = cursor; i <= cursor + 10; i++){
                    if(!this.phoneNumber[i]) break
                    phoneNumber += this.phoneNumber[i]
                }
            } else {
                for(let i = cursor; i <= cursor + 14; i++){
                    if(!this.phoneNumber[i]) break
                    phoneNumber += this.phoneNumber[i]
                }
            }
            this.phoneArray.push(phoneNumber)
        }
    }
}
</script>
