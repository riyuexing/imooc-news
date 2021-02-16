'use strict';
//获取文章标签
const db = uniCloud.database()
//获取聚合操作符
const $ = db.command.aggregate

exports.main = async (event, context) => {
	const {
		user_id,
		type
	} = event
	let matchObj = {}
	if (type !== 'all') {
		matchObj = {
			current: true
		}
	}
	//获取当前用户信息
	let userinfo = await db.collection('user').doc(user_id).get()
	userinfo = userinfo.data[0]

	// let label = await db.collection('label').get()
	//获取用户收藏的文章分类
	let label = await db.collection('label')
		.aggregate()
		.addFields({
			current: $.in(['$_id', $.ifNull([userinfo.label_ids, []])])
		})
		.match(matchObj)
		.end()



	//返回数据给客户端
	return {
		code: 200,
		msg: '数据请求成功',
		data: label.data
	}
};
