<script>
	
	import {  
		mapMutations  
	} from 'vuex';  
	export default {  
		onLaunch: function () {  
			uni.getStorage({//获得保存在本地的用户信息  
				key: 'phone',  
				success:(res) => {  
					this.setPhone(res.data);  
					// uni.request({// 再次校验并刷新token的有效时间  
					// 	url: `${this.$serverUrl}/auth.php`,  
					// 	header: {  
					// 		"Content-Type": "application/x-www-form-urlencoded",  
					// 		"Token":res.data.token  
					// 	},  
					// 	data: {  
					// 		"username":res.data.user_name  
					// 	},  
					// 	method: "POST",  
					// 	success: (e) => {  
					// 		if (e.statusCode === 200 && e.data.code === 0) {  
					// 			this.setPhone(e.data);  
					// 		}  
					// 	}  
					// })  
				}  
			});  
		},  
		methods: {  
			...mapMutations(['setPhone'])  
		}  
	}
</script>

<style>
	/*每个页面公共css */
	@import "/wxcomponents/vant/common/index.wxss";
</style>
