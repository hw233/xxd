var chest_data = {
		/**
	 * 0 : id, int, 主键
	 * 1 : type, tinyint, 类型:1 - 青铜宝箱, 2 - 神龙宝箱
	 * 2 : fix_award_count, smallint, 固奖励 
	 */

	Id : 0,
	Type : 1,
	Fix_award_count : 2,

	Each: function(cb) {
		for(var i = 0; i < this._list.length; i++) {
			cb(this._list[i]);
		}
	},

	_list: [
		[25 /*[0]*/, 1 /*[1]*/, 0 /*[2]*/],
		[26 /*[0]*/, 1 /*[1]*/, 0 /*[2]*/],
		[27 /*[0]*/, 1 /*[1]*/, 0 /*[2]*/],
		[28 /*[0]*/, 1 /*[1]*/, 0 /*[2]*/],
		[29 /*[0]*/, 2 /*[1]*/, 0 /*[2]*/],
		[30 /*[0]*/, 2 /*[1]*/, 0 /*[2]*/],
		[31 /*[0]*/, 2 /*[1]*/, 0 /*[2]*/],
		[32 /*[0]*/, 2 /*[1]*/, 0 /*[2]*/],
		[73 /*[0]*/, 1 /*[1]*/, 0 /*[2]*/],
		[74 /*[0]*/, 2 /*[1]*/, 0 /*[2]*/],
		[95 /*[0]*/, 3 /*[1]*/, 0 /*[2]*/],
		[96 /*[0]*/, 3 /*[1]*/, 0 /*[2]*/],
		[97 /*[0]*/, 3 /*[1]*/, 0 /*[2]*/],
		[98 /*[0]*/, 3 /*[1]*/, 0 /*[2]*/],
		[99 /*[0]*/, 3 /*[1]*/, 0 /*[2]*/],
		[100 /*[0]*/, 4 /*[1]*/, 0 /*[2]*/],
		[101 /*[0]*/, 4 /*[1]*/, 0 /*[2]*/],
		[102 /*[0]*/, 4 /*[1]*/, 0 /*[2]*/],
		[103 /*[0]*/, 4 /*[1]*/, 0 /*[2]*/],
		[104 /*[0]*/, 4 /*[1]*/, 0 /*[2]*/]
	],
};