<template>
  <div class="connect">
    <div class="connect_con">
      <div class="connect_status">
        <div class="status_header">
          设备运行状态
        </div>
        <div :class="{
          'contaier':true,
          'connect_is_on': maStatus.connected,
        }">硬件已{{
          maStatus.connected ? '连接':"断开"
        }}</div>
        <div :class="{
          'contaier':true,
          'pop_btn':true,
          'pop_is_on': maStatus.opened,
        }">灯泡已{{
          maStatus.opened ? '连接':"断开"
        }}</div>
        <div :class="{
          'contaier':true,
          'active_time':true,
        }">今日开启次数{{
          maStatus.times
        }}</div>
      </div>
      <div class="connect_action">
        <div class="status_header">
          设备控制
        </div>
        <div class="contaier">
          远程控制模式
          <el-switch
            v-bind:value="maStatus.remote"
            @input="(e)=>modelOnHandle(e, 'remote')"
            active-color="#13ce66"
            inactive-color="#ccc"
            :disabled="!maStatus.connected"
          />
        </div>
        <div class="contaier">
          {{maStatus.opened?'关':'开'}}灯
          <el-switch
            v-bind:value="Boolean(maStatus.opened)"
            @input="(e)=>modelOnHandle(e, 'opened')"
            active-color="#13ce66"
            inactive-color="#ccc"
            :disabled="!maStatus.connected || !maStatus.remote"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { connectStatus, connectAction } from '../../api/connent.ts'
import { onMounted, ref } from 'vue'
/*eslint-disable*/
const modelOnHandle = async (e , type)=>{
  let command = 0
  if(type === 'remote'){
    if(e){
      command = 1
      maStatus.value.remote = true
    }else{
      command = 0
      maStatus.value.remote = false
    }
  }else if(type === 'opened'){
    if(e){
      command = 3
    }else{
      command = 2
    }
  }
  const res = await connectAction(command)
  if(res){
    const keys = Object.keys(res)
    for(let key  of keys){
      maStatus.value[key] = res[key]
    }
  }
}
const maStatus = ref({
        connected: false,     //硬件是否连接
        opened: false,
        times: 0,
        remote: false
      })
onMounted(async () => {
      const status = await connectStatus()
      const keys = Object.keys(status)
      for(let key  of keys){
         maStatus.value[key] = status[key]
      }
    })
</script>

<style lang="scss" scoped>
.connect{
  width: 600px;
  height: 500px;
  padding: 80px 50px;
  margin: auto auto;
  .connect_con{
    display: flex;
    justify-content: space-between;
    .connect_status , .connect_action{
      width: 230px;
      height: auto;
      border: 1px solid black;
      .status_header{
        height: 50px;
        line-height: 50px;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        border-bottom: 2px solid black;
      }
      .contaier{
        width: 170px;
        margin: 15px 24px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        border: 1px solid #ccc;
      }
    }
    .connect_status{
      .connect_is_on{
        border: 1px solid skyblue;
      }
      .pop_btn{
        background-color: #ccc;
      }
      .pop_is_on{
        background-color: palevioletred;
      }
      .active_time{
        background-color: orangered;
      }
    }
    .connect_action{
      .contaier{
        text-align:justify ;
        border: 0px solid transparent;
      }
    }
  }
}
</style>
