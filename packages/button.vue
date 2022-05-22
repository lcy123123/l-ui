<template>
    <button @click="handleCli" class="l-button" :class="[`l-button--${type}`,{'is-plain':plain},{'is-round':round},{'is-circle':circle},{'is-disabled':disabled}]" :disabled="disabled">
       <span><i :class="icon" v-if="icon"></i><slot></slot></span>   
       <!-- 将插槽放在span里面是为了控制样式 -->
        </button>
</template>
<script>

export default{
    name:'LButton',
    props: {
        //按钮类型
        type:{
            type:String,
            default:'default'
        },
        //是否是朴素按钮
        plain:{
            type:Boolean,
            default:false
        },
        //是否圆角
        round:{
            type:Boolean,
            default:false
        },
        //是否为圆形按钮
        circle:{
            type:Boolean,
            default:false
        },
        // 是否有图标
        icon:{
            type:String,
            default:''
        },
        disabled:{
            type:Boolean,
            default:false
        }

    },
    created () {
        // console.log(this.type,'==');
    },
    methods: {
        //按钮被点击公共方法
        handleCli(e){
            this.$emit('click', e)
        },
        
    }

}
</script>
<style>
.l-button{
display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}


.l-button:focus, .l-button:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}
.l-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
}
.l-button--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
}
.l-button--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
}
.l-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
}
.l-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
}
/* 朴素按钮 */
.l-button--primary.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
}
.l-button--success.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
}
.l-button--info.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
}
.l-button--warning.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
}
.l-button--danger.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
}
/* 圆角 */
.l-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
}
/* 圆形按钮 */
.l-button.is-circle {
    border-radius: 50%;
    padding: 12px;
}
/* 禁用 */
.l-button.is-disabled, .el-button.is-disabled:focus, .el-button.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
}
</style>