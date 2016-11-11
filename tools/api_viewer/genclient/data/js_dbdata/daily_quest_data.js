var daily_quest_data = {
		/**
	 * 0 : id, smallint, 任务ID
	 * 1 : name, varchar, 任务标题
	 * 2 : desc, varchar, 简介
	 * 3 : require_min_level, int, 要求玩家最低等级
	 * 4 : require_max_level, int, 要求玩家最高等级
	 * 5 : require_open_day, varchar, 开放日
	 * 6 : require_count, smallint, 需要数量
	 * 7 : award_exp, int, 奖励经验
	 * 8 : award_coins, bigint, 奖励铜钱
	 * 9 : award_physical, tinyint, 奖励体力
	 * 10 : award_item1_id, smallint, 奖励物品1
	 * 11 : award_item1_num, smallint, 奖励物品1数量
	 * 12 : award_item2_id, smallint, 奖励物品2
	 * 13 : award_item2_num, smallint, 奖励物品2数量
	 * 14 : award_item3_id, smallint, 奖励物品3
	 * 15 : award_item3_num, smallint, 奖励物品3数量
	 * 16 : award_item4_id, smallint, 奖励物品4
	 * 17 : award_item4_num, smallint, 奖励物品4数量
	 * 18 : level_type, tinyint, 关卡类型; -1 无; 0-区域关卡;1-资源关卡;2-通天塔;8-难度关卡;9-伙伴关卡;10-灵宠关卡;11-魂侍关卡
	 * 19 : level_sub_type, tinyint, 关卡子类型(-1--无;1--铜钱关卡;2--经验关卡)
	 * 20 : class, smallint, 任务类别
	 * 21 : order, int, 显示优先级
	 * 22 : award_ingot, int, 奖励元宝
	 * 23 : award_stars, smallint, 奖励星数 
	 */

	Id : 0,
	Name : 1,
	Desc : 2,
	Require_min_level : 3,
	Require_max_level : 4,
	Require_open_day : 5,
	Require_count : 6,
	Award_exp : 7,
	Award_coins : 8,
	Award_physical : 9,
	Award_item1_id : 10,
	Award_item1_num : 11,
	Award_item2_id : 12,
	Award_item2_num : 13,
	Award_item3_id : 14,
	Award_item3_num : 15,
	Award_item4_id : 16,
	Award_item4_num : 17,
	Level_type : 18,
	Level_sub_type : 19,
	Class : 20,
	Order : 21,
	Award_ingot : 22,
	Award_stars : 23,

	Each: function(cb) {
		for(var i = 0; i < this._list.length; i++) {
			cb(this._list[i]);
		}
	},

	_list: [
		[16 /*[0]*/, "爱心祈福" /*[1]*/, "友谊是最大的财富" /*[2]*/, 13 /*[3]*/, 20 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 200 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 11 /*[20]*/, 60 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[17 /*[0]*/, "赠送爱心" /*[1]*/, "快向好友表达自己的爱心吧" /*[2]*/, 13 /*[3]*/, 20 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 200 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 12 /*[20]*/, 65 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[20 /*[0]*/, "魂侍培养" /*[1]*/, "影界果实能让魂侍成长" /*[2]*/, 13 /*[3]*/, 20 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 200 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 14 /*[20]*/, 70 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[21 /*[0]*/, "装备强化" /*[1]*/, "强化后的装备将变的更强" /*[2]*/, 14 /*[3]*/, 20 /*[4]*/, "" /*[5]*/, 3 /*[6]*/, 200 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 15 /*[20]*/, 75 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[10 /*[0]*/, "勇闯深渊" /*[1]*/, "深渊的魔物死亡后又重生了，该想个办法才行" /*[2]*/, 15 /*[3]*/, 20 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 200 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 8 /*[18]*/, -1 /*[19]*/, 4 /*[20]*/, 10 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[14 /*[0]*/, "勇闯彩虹桥" /*[1]*/, "没有人知道彩虹桥的另一端有什么，但是在彩虹桥上可以获得很多新的魂侍" /*[2]*/, 15 /*[3]*/, 20 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 200 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 2 /*[18]*/, -1 /*[19]*/, 3 /*[20]*/, 25 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[30 /*[0]*/, "勤学苦练" /*[1]*/, "每天勤学苦练，滴水穿石，最终武功大成" /*[2]*/, 15 /*[3]*/, 20 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 200 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 20 /*[20]*/, 43 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[31 /*[0]*/, "队伍友情" /*[1]*/, "与伙伴一起配合演练，挥洒青春的汗水" /*[2]*/, 15 /*[3]*/, 20 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 200 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 21 /*[20]*/, 46 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[18 /*[0]*/, "挑战比武场" /*[1]*/, "想做大侠，那就去比武场证明自己" /*[2]*/, 17 /*[3]*/, 40 /*[4]*/, "" /*[5]*/, 3 /*[6]*/, 500 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 8 /*[20]*/, 50 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[22 /*[0]*/, "装备重铸" /*[1]*/, "重铸装备可以替换掉一条不适合的追加属性" /*[2]*/, 20 /*[3]*/, 40 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 500 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 16 /*[20]*/, 80 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[32 /*[0]*/, "勇闯深渊贰" /*[1]*/, "深渊的魔物死亡后又重生了，该想个办法才行" /*[2]*/, 21 /*[3]*/, 40 /*[4]*/, "" /*[5]*/, 2 /*[6]*/, 500 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 8 /*[18]*/, -1 /*[19]*/, 4 /*[20]*/, 10 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[42 /*[0]*/, "勇闯彩虹桥贰" /*[1]*/, "没有人知道彩虹桥的另一端有什么，但是在彩虹桥上可以获得很多新的魂侍" /*[2]*/, 21 /*[3]*/, 40 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 500 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 2 /*[18]*/, -1 /*[19]*/, 3 /*[20]*/, 25 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[61 /*[0]*/, "爱心祈福贰" /*[1]*/, "友谊是最大的财富" /*[2]*/, 21 /*[3]*/, 40 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 500 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 11 /*[20]*/, 60 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[65 /*[0]*/, "赠送爱心贰" /*[1]*/, "快向好友表达自己的爱心吧" /*[2]*/, 21 /*[3]*/, 40 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 500 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 12 /*[20]*/, 65 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[69 /*[0]*/, "魂侍培养贰" /*[1]*/, "影界果实能让魂侍成长" /*[2]*/, 21 /*[3]*/, 40 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 500 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 14 /*[20]*/, 70 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[76 /*[0]*/, "装备强化贰" /*[1]*/, "强化后的装备将变的更强" /*[2]*/, 21 /*[3]*/, 40 /*[4]*/, "" /*[5]*/, 3 /*[6]*/, 500 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 15 /*[20]*/, 75 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[86 /*[0]*/, "勤学苦练贰" /*[1]*/, "每天勤学苦练，滴水穿石，最终武功大成" /*[2]*/, 21 /*[3]*/, 40 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 500 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 20 /*[20]*/, 43 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[90 /*[0]*/, "队伍友情贰" /*[1]*/, "与伙伴一起配合演练，挥洒青春的汗水" /*[2]*/, 21 /*[3]*/, 40 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 500 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 21 /*[20]*/, 46 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[11 /*[0]*/, "财源滚滚" /*[1]*/, "在洞天福地之中有一岛屿，岛上有取之不尽的金银珠宝，没有人知道它从何而来" /*[2]*/, 25 /*[3]*/, 44 /*[4]*/, "" /*[5]*/, 2 /*[6]*/, 500 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 1 /*[18]*/, 1 /*[19]*/, 1 /*[20]*/, 15 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[12 /*[0]*/, "突飞猛进" /*[1]*/, "在洞天福地之中有一神殿，聚天地之灵气，传说曾是武神修炼之地" /*[2]*/, 25 /*[3]*/, 44 /*[4]*/, "" /*[5]*/, 2 /*[6]*/, 500 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 1 /*[18]*/, 2 /*[19]*/, 2 /*[20]*/, 20 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[23 /*[0]*/, "灵宠幻境" /*[1]*/, "在灵宠幻境中消灭的敌人越多，可以获得的灵魄也越多" /*[2]*/, 30 /*[3]*/, 40 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 500 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 12 /*[18]*/, -1 /*[19]*/, 17 /*[20]*/, 27 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[25 /*[0]*/, "灵宠培养" /*[1]*/, "灵魄能让灵宠成长" /*[2]*/, 30 /*[3]*/, 40 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 200 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 19 /*[20]*/, 73 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[29 /*[0]*/, "齐心协力" /*[1]*/, "敌人太过强大，找小伙伴一起消灭它" /*[2]*/, 30 /*[3]*/, 40 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 500 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 9 /*[20]*/, 90 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[28 /*[0]*/, "剑山拔剑" /*[1]*/, "相信在剑山你能寻找到最适合自己的剑心" /*[2]*/, 30 /*[3]*/, 60 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 500 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 13 /*[20]*/, 85 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[4 /*[0]*/, "魂侍试炼" /*[1]*/, "强大的魂侍将会帮助你逆转厄运" /*[2]*/, 35 /*[3]*/, 40 /*[4]*/, "1 4 0" /*[5]*/, 1 /*[6]*/, 500 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 11 /*[18]*/, -1 /*[19]*/, 7 /*[20]*/, 30 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[5 /*[0]*/, "灵宠试炼" /*[1]*/, "灵宠可不只是一个小小的辅助，在关键时刻它将成为你最重要的依靠" /*[2]*/, 35 /*[3]*/, 40 /*[4]*/, "2 5 0" /*[5]*/, 1 /*[6]*/, 500 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 10 /*[18]*/, -1 /*[19]*/, 6 /*[20]*/, 35 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[6 /*[0]*/, "伙伴试炼" /*[1]*/, "一个人的强大并不是真的强大，和伙伴一起成长才能让自己成为真正的大侠" /*[2]*/, 35 /*[3]*/, 40 /*[4]*/, "3 6 0" /*[5]*/, 1 /*[6]*/, 500 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 9 /*[18]*/, -1 /*[19]*/, 5 /*[20]*/, 40 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[33 /*[0]*/, "勇闯深渊叁" /*[1]*/, "深渊的魔物死亡后又重生了，该想个办法才行" /*[2]*/, 41 /*[3]*/, 60 /*[4]*/, "" /*[5]*/, 2 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 8 /*[18]*/, -1 /*[19]*/, 4 /*[20]*/, 10 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[43 /*[0]*/, "勇闯彩虹桥叁" /*[1]*/, "没有人知道彩虹桥的另一端有什么，但是在彩虹桥上可以获得很多新的魂侍" /*[2]*/, 41 /*[3]*/, 60 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 2 /*[18]*/, -1 /*[19]*/, 3 /*[20]*/, 25 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[46 /*[0]*/, "灵宠幻境贰" /*[1]*/, "在灵宠幻境中消灭的敌人越多，可以获得的灵魄也越多" /*[2]*/, 41 /*[3]*/, 60 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 12 /*[18]*/, -1 /*[19]*/, 17 /*[20]*/, 27 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[49 /*[0]*/, "魂侍试炼贰" /*[1]*/, "强大的魂侍将会帮助你逆转厄运" /*[2]*/, 41 /*[3]*/, 60 /*[4]*/, "1 4 0" /*[5]*/, 1 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 11 /*[18]*/, -1 /*[19]*/, 7 /*[20]*/, 30 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[52 /*[0]*/, "灵宠试炼贰" /*[1]*/, "灵宠可不只是一个小小的辅助，在关键时刻它将成为你最重要的依靠" /*[2]*/, 41 /*[3]*/, 60 /*[4]*/, "2 5 0" /*[5]*/, 1 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 10 /*[18]*/, -1 /*[19]*/, 6 /*[20]*/, 35 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[55 /*[0]*/, "伙伴试炼贰" /*[1]*/, "一个人的强大并不是真的强大，和伙伴一起成长才能让自己成为真正的大侠" /*[2]*/, 41 /*[3]*/, 60 /*[4]*/, "3 6 0" /*[5]*/, 1 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 9 /*[18]*/, -1 /*[19]*/, 5 /*[20]*/, 40 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[58 /*[0]*/, "挑战比武场贰" /*[1]*/, "想做大侠，那就去比武场证明自己" /*[2]*/, 41 /*[3]*/, 60 /*[4]*/, "" /*[5]*/, 3 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 8 /*[20]*/, 50 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[62 /*[0]*/, "爱心祈福叁" /*[1]*/, "友谊是最大的财富" /*[2]*/, 41 /*[3]*/, 60 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 11 /*[20]*/, 60 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[66 /*[0]*/, "赠送爱心叁" /*[1]*/, "快向好友表达自己的爱心吧" /*[2]*/, 41 /*[3]*/, 60 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 12 /*[20]*/, 65 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[70 /*[0]*/, "魂侍培养叁" /*[1]*/, "影界果实能让魂侍成长" /*[2]*/, 41 /*[3]*/, 60 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 14 /*[20]*/, 70 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[73 /*[0]*/, "灵宠培养贰" /*[1]*/, "灵魄能让灵宠成长" /*[2]*/, 41 /*[3]*/, 60 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 19 /*[20]*/, 73 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[77 /*[0]*/, "装备强化叁" /*[1]*/, "强化后的装备将变的更强" /*[2]*/, 41 /*[3]*/, 60 /*[4]*/, "" /*[5]*/, 3 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 15 /*[20]*/, 75 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[79 /*[0]*/, "装备重铸贰" /*[1]*/, "重铸装备可以替换掉一条不适合的追加属性" /*[2]*/, 41 /*[3]*/, 60 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 16 /*[20]*/, 80 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[83 /*[0]*/, "齐心协力贰" /*[1]*/, "敌人太过强大，找小伙伴一起消灭它" /*[2]*/, 41 /*[3]*/, 60 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 9 /*[20]*/, 90 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[87 /*[0]*/, "勤学苦练叁" /*[1]*/, "每天勤学苦练，滴水穿石，最终武功大成" /*[2]*/, 41 /*[3]*/, 60 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 20 /*[20]*/, 43 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[91 /*[0]*/, "队伍友情叁" /*[1]*/, "与伙伴一起配合演练，挥洒青春的汗水" /*[2]*/, 41 /*[3]*/, 60 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 21 /*[20]*/, 46 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[36 /*[0]*/, "财源滚滚贰" /*[1]*/, "在洞天福地之中有一岛屿，岛上有取之不尽的金银珠宝，没有人知道它从何而来" /*[2]*/, 45 /*[3]*/, 60 /*[4]*/, "" /*[5]*/, 2 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 682 /*[10]*/, 2 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 1 /*[18]*/, 1 /*[19]*/, 1 /*[20]*/, 15 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[39 /*[0]*/, "突飞猛进贰" /*[1]*/, "在洞天福地之中有一神殿，聚天地之灵气，传说曾是武神修炼之地" /*[2]*/, 45 /*[3]*/, 60 /*[4]*/, "" /*[5]*/, 2 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 682 /*[10]*/, 2 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 1 /*[18]*/, 2 /*[19]*/, 2 /*[20]*/, 20 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[94 /*[0]*/, "探索云海" /*[1]*/, "穿云海踏山觅仙踪，寻洞天福地而修行" /*[2]*/, 45 /*[3]*/, 60 /*[4]*/, "" /*[5]*/, 20 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 24 /*[20]*/, 53 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[97 /*[0]*/, "阵印召唤" /*[1]*/, "阵印是会是你战场上的强大助力" /*[2]*/, 45 /*[3]*/, 60 /*[4]*/, "" /*[5]*/, 4 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 23 /*[20]*/, 56 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[100 /*[0]*/, "战胜绝望" /*[1]*/, "绝望之地的敌人卷土重来，请大侠快去消灭他们" /*[2]*/, 50 /*[3]*/, 60 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 13 /*[18]*/, -1 /*[19]*/, 25 /*[20]*/, 95 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[105 /*[0]*/, "希望觉醒" /*[1]*/, "重燃希望之光，发掘新潜能" /*[2]*/, 50 /*[3]*/, 60 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 1000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 26 /*[20]*/, 93 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[34 /*[0]*/, "勇闯深渊肆" /*[1]*/, "深渊的魔物死亡后又重生了，该想个办法才行" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "" /*[5]*/, 2 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 8 /*[18]*/, -1 /*[19]*/, 4 /*[20]*/, 10 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[37 /*[0]*/, "财源滚滚叁" /*[1]*/, "在洞天福地之中有一岛屿，岛上有取之不尽的金银珠宝，没有人知道它从何而来" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "" /*[5]*/, 2 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 682 /*[10]*/, 2 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 1 /*[18]*/, 1 /*[19]*/, 1 /*[20]*/, 15 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[40 /*[0]*/, "突飞猛进叁" /*[1]*/, "在洞天福地之中有一神殿，聚天地之灵气，传说曾是武神修炼之地" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "" /*[5]*/, 2 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 682 /*[10]*/, 2 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 1 /*[18]*/, 2 /*[19]*/, 2 /*[20]*/, 20 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[44 /*[0]*/, "勇闯彩虹桥肆" /*[1]*/, "没有人知道彩虹桥的另一端有什么，但是在彩虹桥上可以获得很多新的魂侍" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 2 /*[18]*/, -1 /*[19]*/, 3 /*[20]*/, 25 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[47 /*[0]*/, "灵宠幻境叁" /*[1]*/, "在灵宠幻境中消灭的敌人越多，可以获得的灵魄也越多" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 12 /*[18]*/, -1 /*[19]*/, 17 /*[20]*/, 27 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[50 /*[0]*/, "魂侍试炼叁" /*[1]*/, "强大的魂侍将会帮助你逆转厄运" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "1 4 0" /*[5]*/, 1 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 11 /*[18]*/, -1 /*[19]*/, 7 /*[20]*/, 30 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[53 /*[0]*/, "灵宠试炼叁" /*[1]*/, "灵宠可不只是一个小小的辅助，在关键时刻它将成为你最重要的依靠" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "2 5 0" /*[5]*/, 1 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 10 /*[18]*/, -1 /*[19]*/, 6 /*[20]*/, 35 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[56 /*[0]*/, "伙伴试炼叁" /*[1]*/, "一个人的强大并不是真的强大，和伙伴一起成长才能让自己成为真正的大侠" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "3 6 0" /*[5]*/, 1 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 9 /*[18]*/, -1 /*[19]*/, 5 /*[20]*/, 40 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[59 /*[0]*/, "挑战比武场叁" /*[1]*/, "想做大侠，那就去比武场证明自己" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "" /*[5]*/, 3 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 8 /*[20]*/, 50 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[63 /*[0]*/, "爱心祈福肆" /*[1]*/, "友谊是最大的财富" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 11 /*[20]*/, 60 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[67 /*[0]*/, "赠送爱心肆" /*[1]*/, "快向好友表达自己的爱心吧" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 12 /*[20]*/, 65 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[71 /*[0]*/, "魂侍培养肆" /*[1]*/, "影界果实能让魂侍成长" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 14 /*[20]*/, 70 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[74 /*[0]*/, "灵宠培养叁" /*[1]*/, "灵魄能让灵宠成长" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 19 /*[20]*/, 73 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[78 /*[0]*/, "装备强化肆" /*[1]*/, "强化后的装备将变的更强" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "" /*[5]*/, 3 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 15 /*[20]*/, 75 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[80 /*[0]*/, "装备重铸叁" /*[1]*/, "重铸装备可以替换掉一条不适合的追加属性" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 16 /*[20]*/, 80 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[81 /*[0]*/, "剑山拔剑贰" /*[1]*/, "相信在剑山你能寻找到最适合自己的剑心" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 13 /*[20]*/, 85 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[84 /*[0]*/, "齐心协力叁" /*[1]*/, "敌人太过强大，找小伙伴一起消灭它" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 9 /*[20]*/, 90 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[88 /*[0]*/, "勤学苦练肆" /*[1]*/, "每天勤学苦练，滴水穿石，最终武功大成" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 20 /*[20]*/, 43 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[92 /*[0]*/, "队伍友情肆" /*[1]*/, "与伙伴一起配合演练，挥洒青春的汗水" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 21 /*[20]*/, 46 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[95 /*[0]*/, "探索云海贰" /*[1]*/, "穿云海踏山觅仙踪，寻洞天福地而修行" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "" /*[5]*/, 20 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 24 /*[20]*/, 53 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[98 /*[0]*/, "阵印召唤贰" /*[1]*/, "阵印是会是你战场上的强大助力" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "" /*[5]*/, 4 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 23 /*[20]*/, 56 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[101 /*[0]*/, "战胜绝望贰" /*[1]*/, "绝望之地的敌人卷土重来，请大侠快去消灭他们" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 13 /*[18]*/, -1 /*[19]*/, 25 /*[20]*/, 95 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[106 /*[0]*/, "希望觉醒贰" /*[1]*/, "重燃希望之光，发掘新潜能" /*[2]*/, 61 /*[3]*/, 80 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 3000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 26 /*[20]*/, 93 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[72 /*[0]*/, "魂侍培养伍" /*[1]*/, "影界果实能让魂侍成长" /*[2]*/, 81 /*[3]*/, 100 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 14 /*[20]*/, 70 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[75 /*[0]*/, "灵宠培养肆" /*[1]*/, "灵魄能让灵宠成长" /*[2]*/, 81 /*[3]*/, 100 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 19 /*[20]*/, 73 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[93 /*[0]*/, "队伍友情伍" /*[1]*/, "与伙伴一起配合演练，挥洒青春的汗水" /*[2]*/, 81 /*[3]*/, 100 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 21 /*[20]*/, 46 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[102 /*[0]*/, "战胜绝望叁" /*[1]*/, "绝望之地的敌人卷土重来，请大侠快去消灭他们" /*[2]*/, 81 /*[3]*/, 100 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 13 /*[18]*/, -1 /*[19]*/, 25 /*[20]*/, 95 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[107 /*[0]*/, "希望觉醒叁" /*[1]*/, "重燃希望之光，发掘新潜能" /*[2]*/, 81 /*[3]*/, 100 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 26 /*[20]*/, 93 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[35 /*[0]*/, "勇闯深渊伍" /*[1]*/, "深渊的魔物死亡后又重生了，该想个办法才行" /*[2]*/, 81 /*[3]*/, 200 /*[4]*/, "" /*[5]*/, 2 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 8 /*[18]*/, -1 /*[19]*/, 4 /*[20]*/, 10 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[38 /*[0]*/, "财源滚滚肆" /*[1]*/, "在洞天福地之中有一岛屿，岛上有取之不尽的金银珠宝，没有人知道它从何而来" /*[2]*/, 81 /*[3]*/, 200 /*[4]*/, "" /*[5]*/, 2 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 682 /*[10]*/, 2 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 1 /*[18]*/, 1 /*[19]*/, 1 /*[20]*/, 15 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[41 /*[0]*/, "突飞猛进肆" /*[1]*/, "在洞天福地之中有一神殿，聚天地之灵气，传说曾是武神修炼之地" /*[2]*/, 81 /*[3]*/, 200 /*[4]*/, "" /*[5]*/, 2 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 682 /*[10]*/, 2 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 1 /*[18]*/, 2 /*[19]*/, 2 /*[20]*/, 20 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[45 /*[0]*/, "勇闯彩虹桥伍" /*[1]*/, "没有人知道彩虹桥的另一端有什么，但是在彩虹桥上可以获得很多新的魂侍" /*[2]*/, 81 /*[3]*/, 200 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 2 /*[18]*/, -1 /*[19]*/, 3 /*[20]*/, 25 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[48 /*[0]*/, "灵宠幻境肆" /*[1]*/, "在灵宠幻境中消灭的敌人越多，可以获得的灵魄也越多" /*[2]*/, 81 /*[3]*/, 200 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 12 /*[18]*/, -1 /*[19]*/, 17 /*[20]*/, 27 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[51 /*[0]*/, "魂侍试炼肆" /*[1]*/, "强大的魂侍将会帮助你逆转厄运" /*[2]*/, 81 /*[3]*/, 200 /*[4]*/, "1 4 0" /*[5]*/, 1 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 11 /*[18]*/, -1 /*[19]*/, 7 /*[20]*/, 30 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[54 /*[0]*/, "灵宠试炼肆" /*[1]*/, "灵宠可不只是一个小小的辅助，在关键时刻它将成为你最重要的依靠" /*[2]*/, 81 /*[3]*/, 200 /*[4]*/, "2 5 0" /*[5]*/, 1 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 10 /*[18]*/, -1 /*[19]*/, 6 /*[20]*/, 35 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[57 /*[0]*/, "伙伴试炼肆" /*[1]*/, "一个人的强大并不是真的强大，和伙伴一起成长才能让自己成为真正的大侠" /*[2]*/, 81 /*[3]*/, 200 /*[4]*/, "3 6 0" /*[5]*/, 1 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 9 /*[18]*/, -1 /*[19]*/, 5 /*[20]*/, 40 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[60 /*[0]*/, "挑战比武场肆" /*[1]*/, "想做大侠，那就去比武场证明自己" /*[2]*/, 81 /*[3]*/, 200 /*[4]*/, "" /*[5]*/, 3 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 8 /*[20]*/, 50 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[64 /*[0]*/, "爱心祈福伍" /*[1]*/, "友谊是最大的财富" /*[2]*/, 81 /*[3]*/, 200 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 11 /*[20]*/, 60 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[68 /*[0]*/, "赠送爱心伍" /*[1]*/, "快向好友表达自己的爱心吧" /*[2]*/, 81 /*[3]*/, 200 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 12 /*[20]*/, 65 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[82 /*[0]*/, "剑山拔剑叁" /*[1]*/, "相信在剑山你能寻找到最适合自己的剑心" /*[2]*/, 81 /*[3]*/, 200 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 13 /*[20]*/, 85 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[85 /*[0]*/, "齐心协力肆" /*[1]*/, "敌人太过强大，找小伙伴一起消灭它" /*[2]*/, 81 /*[3]*/, 200 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 9 /*[20]*/, 90 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[89 /*[0]*/, "勤学苦练伍" /*[1]*/, "每天勤学苦练，滴水穿石，最终武功大成" /*[2]*/, 81 /*[3]*/, 200 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 20 /*[20]*/, 43 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[96 /*[0]*/, "探索云海叁" /*[1]*/, "穿云海踏山觅仙踪，寻洞天福地而修行" /*[2]*/, 81 /*[3]*/, 200 /*[4]*/, "" /*[5]*/, 20 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 24 /*[20]*/, 53 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[99 /*[0]*/, "阵印召唤叁" /*[1]*/, "阵印是会是你战场上的强大助力" /*[2]*/, 81 /*[3]*/, 200 /*[4]*/, "" /*[5]*/, 4 /*[6]*/, 5000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 23 /*[20]*/, 56 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[103 /*[0]*/, "战胜绝望肆" /*[1]*/, "绝望之地的敌人卷土重来，请大侠快去消灭他们" /*[2]*/, 101 /*[3]*/, 120 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 10000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 13 /*[18]*/, -1 /*[19]*/, 25 /*[20]*/, 95 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[108 /*[0]*/, "希望觉醒肆" /*[1]*/, "重燃希望之光，发掘新潜能" /*[2]*/, 101 /*[3]*/, 120 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 10000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 26 /*[20]*/, 93 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[104 /*[0]*/, "战胜绝望伍" /*[1]*/, "绝望之地的敌人卷土重来，请大侠快去消灭他们" /*[2]*/, 121 /*[3]*/, 200 /*[4]*/, "" /*[5]*/, 5 /*[6]*/, 15000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 13 /*[18]*/, -1 /*[19]*/, 25 /*[20]*/, 95 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/],
		[109 /*[0]*/, "希望觉醒伍" /*[1]*/, "重燃希望之光，发掘新潜能" /*[2]*/, 121 /*[3]*/, 200 /*[4]*/, "" /*[5]*/, 1 /*[6]*/, 15000 /*[7]*/, 1000 /*[8]*/, 0 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, -1 /*[18]*/, -1 /*[19]*/, 26 /*[20]*/, 93 /*[21]*/, 1 /*[22]*/, 10 /*[23]*/]
	],
};