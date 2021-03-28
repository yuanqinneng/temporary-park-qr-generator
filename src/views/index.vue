<template>
<div v-title data-title="临时停车二维码生成器">
    <div class="head">配置二维码</div>
    <a-form :form="form" :wrapper-col="{ span: 20, offset:2 }">
        <a-form-item>
            <a-input type="number" v-model="form.phone" :maxLength="11" placeholder="请输入您的手机号">
                <a-icon slot="prefix" type="phone"/>
            </a-input>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 5 }">
        <a-button type="primary" @click.stop="setQrcode" block>
            生成二维码
        </a-button>
        </a-form-item>
    </a-form>
    <p class="tips" v-show="isShowQr">
        扫描该二维码会自动拨打您的电话号码哦~保存该二维码，打印出来就好了哦~
    </p>
    <vue-qr
      v-show="isShowQr" 
      :text="downloadData.url" 
      :margin="0" 
      colorDark="#1dc178" 
      colorLight="#fff" 
      :size="500">
    </vue-qr>

</div>
</template>

<script>
import VueQr from 'vue-qr'

export default {
    components:{
        VueQr
    },
    data() {
        return {
            isShowQr: false,
            formLayout: 'horizontal',
            form: { phone: '' },
            downloadData: {
                url: 'thtp://192.168.1.104:8083',
                icon: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4277010421,1238629898&fm=11&gp=0.jpg'
            }
        };
    },
    methods: {
        setQrcode() {
            if(!this.isPhone(this.form.phone)){  
                this.$message.error({
                    content:'请输入正确的手机号！',
                    duration:3
                });
                return
            }
            this.downloadData.url = window.location.href + 'myqr?phone=' + this.form.phone
            this.isShowQr = true
            console.log(this.downloadData.url);
            console.log(window.location.href);
            
            // this.$router.push({ path:'/myqr', query:{ phone: this.form.phone }});
        },
        isPhone(phones) {
            var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
            if (!myreg.test(phones)) {
                console.log('手机号格式不正确')
                return false;
            } else {
                console.log('手机号格式正确')
                return true;
            }
        }
    },
    mounted() {
    }
};
</script>
<style lang="less" scoped>
.head{
    box-sizing: content-box;
    font-weight: bold;
    text-align: center;
    padding: 25px 0;
    width: 375px;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
}
.tips{
    font-size: 12px;
    color: #999;
    padding: 20px 50px;
}
</style>