<template>
  <div v-title data-title="为您拨打电话">
      <div class="tips">
          正在为您拨打电话~
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
    },
    mounted() {
        setTimeout(() => {
            window.location.href = 'tel://' + this.$route.query.phone
        }, 1000);
    }
}
</script>

<style lang="less" scoped>
.tips{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>