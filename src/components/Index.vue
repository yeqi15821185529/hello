<template>
	<div>
		<el-container>
       <el-header style="background-color: yellow" width="200px">
        <left></left>
      </el-header>
       <el-container>
         <el-aside width="200px" style="background-color: red">
          <header-top></header-top>
          </el-aside>
         <el-main style="background-color: blue">
          <main-list></main-list>
        </el-main>
       </el-container>
    </el-container>
	</div>
</template>

<script>
  import Left from './Left'
  import MainList from './Main'
  import HeaderTop from './Header'

	export default {
  name: '',
  data () {
    return {
     
    }
  },components:{
    Left,
    MainList,
    HeaderTop
  }
}
</script>

<style rel="stylesheet">

</style>