<template>
  <div>
    <transition name='l-transition'>
      <div class='l-Dialog' v-show="visible">
        <div
          class='l-dialog__wrapper'
          style="z-index: 2009"
          @click.self="handleCli"
        >
          <div class='l-dialog' :style="{ width: width, marginTop: top }">
            <!-- 头部标题 -->
            <div class="l-dialog__header">
              <slot name="title">
                <span class="l-dialog__title">{{ title }}</span>
              </slot>
              <l-button
                aria-label="Close"
                class="l-dialog__headerbtn"
                @click="handleCli"
              >
                <i class="el-dialog__close el-icon el-icon-close"></i>
              </l-button>
            </div>
            <!-- 主体区域 -->
            <div class="l-dialog__body">
              <!-- 定义插槽 -->
              <slot></slot>
            </div>
            <!-- 底部 -->
            <div class="l-dialog__footer" v-if="$slots.footer">
              <!-- 插槽 -->
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
        <!-- 遮罩层 -->
        <div class="v-modal" tabindex="0" style="z-index: 2008"></div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'LDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {
    handleCli () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style>
/* 进入的整个过程 */
.l-transition-enter-active{
    animation: fade .5s;
}
/* 离开的整个过程 */
.l-transition-leave-active{
    animation: fade .5s reverse;
}
@keyframes fade{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;

    }
}
.l-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
}
.l-dialog {
  position: relative;
  margin: 0 auto 50px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  width: 50%;
}
.l-dialog__header {
  padding: 20px 20px 10px;
}
.l-dialog__title {
  line-height: 24px;
  font-size: 18px;
  color: #303133;
}
.l-dialog__headerbtn {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
}
.l-dialog__body {
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
}
.l-dialog__footer {
  padding: 10px 20px 20px;
  text-align: right;
  box-sizing: border-box;
}
.dialog-footer {
  padding: 10px 20px 20px;
  text-align: right;
  box-sizing: border-box;
}
.el-dialog__headerbtn .el-dialog__close {
  color: #909399;
}
</style>
