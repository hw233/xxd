var heart_draw_award_data = {
		/**
	 * 0 : heart_draw_id, smallint, 爱心抽奖ID
	 * 1 : award_type, tinyint, 奖品类型（1-铜钱；2-元宝；3-道具）
	 * 2 : award_num, smallint, 奖品数量
	 * 3 : item_id, smallint, 道具奖品ID 
	 */

	Heart_draw_id : 0,
	Award_type : 1,
	Award_num : 2,
	Item_id : 3,

	Each: function(cb) {
		for(var i = 0; i < this._list.length; i++) {
			cb(this._list[i]);
		}
	},

	_list: [
		[1 /*[0]*/, 3 /*[1]*/, 5 /*[2]*/, 263 /*[3]*/],
		[1 /*[0]*/, 3 /*[1]*/, 1 /*[2]*/, 210 /*[3]*/],
		[1 /*[0]*/, 3 /*[1]*/, 1 /*[2]*/, 425 /*[3]*/],
		[1 /*[0]*/, 1 /*[1]*/, 10000 /*[2]*/, 0 /*[3]*/],
		[1 /*[0]*/, 3 /*[1]*/, 5 /*[2]*/, 263 /*[3]*/],
		[1 /*[0]*/, 3 /*[1]*/, 1 /*[2]*/, 303 /*[3]*/],
		[1 /*[0]*/, 3 /*[1]*/, 1 /*[2]*/, 209 /*[3]*/],
		[1 /*[0]*/, 1 /*[1]*/, 30000 /*[2]*/, 0 /*[3]*/]
	],
};