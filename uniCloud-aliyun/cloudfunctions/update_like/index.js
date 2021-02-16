'use strict';
//更新用户收藏的文章
const db = uniCloud.database()
const dbCmd = db.command //数据库操作符,对数据库的数组操作、字符串操作
exports.main = async (event, context) => {
	const {
		user_id,
		article_id
	} = event

	//获取当前用户
	const userinfo = await db.collection('user').doc(user_id).get()
	//判断当前用户是否收藏文章
	const article_id_ids = userinfo.data[0].article_likes_ids
	let dbCmdFuns = null
	if (article_id_ids.includes(article_id)) {
		dbCmdFuns = dbCmd.pull(article_id) //从数组中移除
	} else {
		dbCmdFuns = dbCmd.addToSet(article_id) //数组中没有则增加
	}
	//更新用户收藏的文章
	await db.collection('user').doc(user_id).update({
		article_likes_ids: dbCmdFuns
	})
	//返回数据给客户端
	return {
		code:200,
		msg:'数据请求成功',
		data:userinfo.data[0]
	}
};
