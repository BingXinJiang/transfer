const userData= require('../data/data-userlist')
const {
	findByPhoneNumber,
	findAllUsers,
	addUser,
	deleteUser
} = require('./dbhelper/userHelper')

module.exports={
	//添加
	addNewUser:async(v)=>{
		let user = await addUser({...v})
		return user
	},
	//返回全部数据
	getAllUser:()=>{
		let users = findAllUsers()
		console.log('users: ', users)
		return users
	},

	
	//性别选择
	getUserSex:(sex)=>{
		return userData.filter(function(ele){
			return ele.sex==sex;
		})
	},
	//姓名搜索
	getUserName:(name)=>{
		return userData.filter(function(ele){
			return ele.name.indexOf(name) != -1;
		})
	},
	//删除
	deleteUser:(name)=>{
		userData.forEach(function(el,index,arr){
			if(el.id==name){
				arr.splice(index,1);
			}
		})
	},
	//修改
	editUser:async(v)=>{
		userData.forEach(function(el,index,arr){
			if(parseInt(el.id)==parseInt(v.id)){
				userData[index].name=v.name;
				userData[index].sex=v.sex;
				userData[index].age=v.age;
				return;
			}
		})
	}

}
