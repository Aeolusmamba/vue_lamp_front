<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"></el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
.el-input__wrapper.el-input__wrapper.el-input__wrapper{
  background-color: transparent;
  border: none;
  box-shadow: none;
}
.el-container{
  height: 100vh;
}
</style>
