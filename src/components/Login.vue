<template>
	<div style="margin: auto;width: 50%">
		<p style="font-size: 30px;color: blue">用户登录系统</p>
		手机号&nbsp<el-input v-model="phone" placeholder="请输入手机号" style="width: 30%"></el-input><br><br>
		密&nbsp&nbsp&nbsp码&nbsp<el-input v-model="password" placeholder="请输入密码" style="width: 30%"></el-input><br>
		<br>
		<el-button type="primary" @click="login()" round>登录</el-button>
        <!-- <el-button type="primary" round><router-link to="/regist">注册</router-link></el-button> -->
        <el-button type="primary" @click="regist()" round >注册</el-button>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				phone:'',
				password:''
			}
		},
		methods:{
				login(){
					this.$axios.get('http://localhost:8080/login?phone='+this.phone+'&password='+this.password).then(response => {
						if (response.data.code=="0000") {
							this.$message({
								message:response.data.msg,
								type: 'success'
							});
							this.$router.push({path:'/Index'})
						}else{
							this.$message.error(response.data.msg);
						}
					})
				},
				regist(){
					this.$router.push({path:'/register'})
				}
			}
	}
</script>
<style type="text/css">

</style>
