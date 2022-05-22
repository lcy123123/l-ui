<template>
  <div class='l-input  l-input--suffix'>
    <!-- input组件 -->
    <input
      class='l-input__inner'
      :class="{ 'is-disabled': disabled }"
      :type="showPassword?(changeType?'text':'password'):type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    />
    <span class="l-input__suffix" v-if="clearable||showPassword">
      <i class="el-input__icon el-icon-circle-close" v-if="clearable&&value" @click="clear"></i>
      <i class="el-input__icon el-icon-view el-input__clear" v-if="showPassword&&value" @click="handlePassword"></i>
    </span>
  </div>
</template>
<script>
export default {
  name: 'LInput',
  props: {
    type: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      changeType: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePassword () {
      this.changeType = !this.changeType
    }
  }
}
</script>
<style>
.l-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}
.l-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
/* 禁用样式 */
.is-disabled {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}
.l-input--suffix {
  padding-right: 30px;
}
.l-input__suffix {
    position: absolute;
    right: 50px;
}

.l-input--suffix .l-input__inner {
    padding-right: 30px;
}
</style>
