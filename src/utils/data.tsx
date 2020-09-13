
export const data = [
  {
    name: "全部",
    type: "radio"
  },
  {
    name: "综合排序",
    type: "radio",
    submenu: [
      {
        name: "综合排序",
        value: "",
        select: true
      },
      {
				name: "价格由低到高",
        value: "price_asc",
        select: false
			},
			{
				name: "保证金由低到高",
        value: "promise_price_asc",
        select: false
			},
			{
				name: "总时间由低到高",
        value: "duration_asc",
        select: false
			}
    ]
  },
  {
    name: "筛选",
    type: "checkbox",
    submenu: [
      {
        name: "价格",
        type: "radio",
				submenu: [{
						name: "不限",
						value: "",
						max: '',
            min: '',
            select: true
					},
					{
						name: "1-50元",
						value: "1,50",
						max: 50,
            min: 1,
            select: false
					},
					{
						name: "51-100元",
						value: "51,100",
						max: 100,
            min: 51,
            select: false
					},
					{
						name: "100元-300元",
						value: "100,300",
						max: 300,
            min: 100,
            select: false
					},
					{
						name: "301-500元",
						value: "301,500",
						max: 500,
            min: 301,
            select: false
					},
					{
						name: "500元以上",
						value: "500,''",
						max: '',
            min: 500,
            select: false
					}
				]
			},
			{
        name: "初始段位",
        type: "radio",
				submenu: [{
						name: "不限",
            value: "",
            select: true
					},
					{
						name: "青铜",
            value: "青铜",
            select: false
					},
					{
						name: "白银",
            value: "白银",
            select: false
					},
					{
						name: "黄金",
            value: "黄金",
            select: false
					},
					{
						name: "铂金",
            value: "铂金",
            select: false
					},
					{
						name: "钻石",
            value: "钻石",
            select: false
					},
					{
						name: "星耀",
            value: "星耀",
            select: false
					},
					{
						name: "最强王者",
            value: "最强王者",
            select: false
					},
					{
						name: "荣耀王者",
            value: "荣耀王者",
            select: false
					}
				]
			},
			{
        name: "目标段位",
        type: "radio",
				submenu: [{
						name: "不限",
            value: "",
            select: true
					},
					{
						name: "青铜",
            value: "青铜",
            select: false
					},
					{
						name: "白银",
            value: "白银",
            select: false
					},
					{
						name: "黄金",
            value: "黄金",
            select: false
					},
					{
						name: "铂金",
            value: "铂金",
            select: false
					},
					{
						name: "钻石",
            value: "钻石",
            select: false
					},
					{
						name: "星耀",
            value: "星耀",
            select: false
					},
					{
						name: "最强王者",
            value: "最强王者",
            select: false
					},
					{
						name: "荣耀王者",
            value: "荣耀王者",
            select: false
					}
				]
			}
    ]
  }
]