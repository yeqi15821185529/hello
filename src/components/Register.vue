<template>
	<div style="margin: auto;width: 50%">
		<p style="font-size: 30px;color: blue">用户注册系统</p>
		手机号&nbsp<el-input v-model="phone" placeholder="请输入手机号" style="width: 30%"></el-input><br><br>
		用户名&nbsp<el-input v-model="username" placeholder="请输入用户名" style="width: 30%"></el-input><br><br>
		密&nbsp&nbsp&nbsp码&nbsp<el-input v-model="password" placeholder="请输入密码" style="width: 30%"></el-input><br><br>
		姓&nbsp&nbsp&nbsp名&nbsp<el-input v-model="name" placeholder="请输入姓名" style="width: 30%"></el-input><br><br>
		<br>
		<el-button type="primary" @click="login()" round>返回登录</el-button>
        <!-- <el-button type="primary" round><router-link to="/regist">注册</router-link></el-button> -->
        <el-button type="primary" @click="register()" round >注册</el-button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				username:'',
				name:'',
				password:'',
				phone:''
			}
		},methods:{
			login(){
				this.$router.push({path:'/Login'})
				}
				,register(){
				this.$axios.post('http://localhost:8080/Register?username='+this.username+'&name='+this.name+'&password='+this.password+'&phone='+this.phone).then(response => {
						if(response.data.code=="0000"){
							this.$message({
									message:response.data.msg,
									type: 'success'
								});
								this.$router.push({path:'/Login'})
							}else{
								this.$message.error(response.data.msg);
							}
				})
		    }
	    }
	}
</script>

<style rel="stylesheet">

</style>