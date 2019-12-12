// 获奖演员名单
const performer = {
    // 状态切换获奖和入围
    "state": false,
    "zhihu_url": "#",
    // 入围演员名单
    "selectedtemplates": [{
            "name": "陈冲",
            "img_url": "./imgs/head/chenchong-s.jpg",
            "desc": "《误杀》饰拉韫",
            "jump_url": "https://www.zhihu.com/topic/20215978"
        },
        {
            "name": "陈飞宇",
            "img_url": "./imgs/head/chenfeiyu-s.jpg",
            "desc": "《我和我的祖国》饰哈扎布",
            "jump_url": "https://www.zhihu.com/topic/20231927"
        },
        {
            "name": "杜江",
            "img_url": "./imgs/head/dujiang-s.jpg",
            "desc": "《中国机长》饰梁栋《我和我的祖国》饰朱涛《烈火英雄》饰马卫国",
            "jump_url": "https://www.zhihu.com/topic/20173468"
        },
        {
            "name": "葛优",
            "img_url": "./imgs/head/geyou-s.jpg",
            "desc": "《我和我的祖国》饰张北京",
            "jump_url": "https://www.zhihu.com/topic/19660806"
        },
        {
            "name": "桂纶镁",
            "img_url": "./imgs/head/guilunmei-s.jpg",
            "desc": "《南方车站的聚会》饰刘爱爱",
            "jump_url": "https://www.zhihu.com/topic/19862726"
        },
        {
            "name": "古天乐",
            "img_url": "./imgs/head/gutianle-s.jpg",
            "desc": "《使徒行者 2：谍影行动》饰井进贤 《扫毒 2 天地对决》饰冯振国",
            "jump_url": "https://www.zhihu.com/topic/19613633"
        },
        {
            "name": "黄渤",
            "img_url": "./imgs/head/huangbo-s.jpg",
            "desc": "《我和我的祖国》饰林治远",
            "jump_url": "https://www.zhihu.com/topic/19674807"
        },
        {
            "name": "黄景瑜",
            "img_url": "./imgs/head/huangjingyu-s.jpg",
            "desc": "《飞驰人生》饰林臻东",
            "jump_url": "https://www.zhihu.com/topic/20042231"
        },
        {
            "name": "黄晓明",
            "img_url": "./imgs/head/huangxiaoming-s.jpg",
            "desc": "《烈火英雄》饰江立伟",
            "jump_url": "https://www.zhihu.com/topic/19587523"
        },
        {
            "name": "胡歌",
            "img_url": "./imgs/head/huge-s.jpg",
            "desc": "《南方车站的聚会》饰周泽农",
            "jump_url": "https://www.zhihu.com/topic/19656332"
        },
        {
            "name": "刘昊然",
            "img_url": "./imgs/head/liuhaoran-s.jpg",
            "desc": "《我和我的祖国》饰沃德乐",
            "jump_url": "https://www.zhihu.com/topic/20090895"
        },
        {
            "name": "马思纯",
            "img_url": "./imgs/head/masichun-s.jpg",
            "desc": "《风中有朵雨做的云》饰小诺",
            "jump_url": "https://www.zhihu.com/topic/20067522"
        },
        {
            "name": "欧豪",
            "img_url": "./imgs/head/ouhao-s.jpg",
            "desc": "《中国机长》饰徐奕辰《我和我的祖国》饰梁昌寿《烈火英雄》饰徐小斌",
            "jump_url": "https://www.zhihu.com/topic/20105878"
        },
        {
            "name": "任素汐",
            "img_url": "./imgs/head/rensuxi-s.jpg",
            "desc": "《我和我的祖国》饰方敏",
            "jump_url": "https://www.zhihu.com/topic/20141967"
        },
        {
            "name": "沈腾",
            "img_url": "./imgs/head/shenteng-s.jpg",
            "desc": "《飞驰人生》饰张驰",
            "jump_url": "https://www.zhihu.com/topic/20029512"
        },
        {
            "name": "宋佳",
            "img_url": "./imgs/head/songjia-s.jpg",
            "desc": "《我和我的祖国》饰吕潇然《风中有朵雨做的云》饰林慧",
            "jump_url": "https://www.zhihu.com/topic/20220995"
        },
        {
            "name": "谭卓",
            "img_url": "./imgs/head/tanzhuo-s.jpg",
            "desc": "《误杀》饰阿玉《烈火英雄》饰李芳",
            "jump_url": "https://www.zhihu.com/topic/20211074"
        },
        {
            "name": "王景春",
            "img_url": "./imgs/head/wangjingchun-s.jpg",
            "desc": "《地久天长》饰刘耀军",
            "jump_url": "https://www.zhihu.com/topic/20221215"
        },
        {
            "name": "吴京",
            "img_url": "./imgs/head/wujing-s.jpg",
            "desc": "《流浪地球》饰刘培强",
            "jump_url": "https://www.zhihu.com/topic/20089785"
        },
        {
            "name": "肖央",
            "img_url": "./imgs/head/xiaoyang-s.jpg",
            "desc": "《误杀》饰李维杰",
            "jump_url": "https://www.zhihu.com/topic/20139969"
        },
        {
            "name": "杨紫",
            "img_url": "./imgs/head/yangzi-s.jpg",
            "desc": "《烈火英雄》饰王璐",
            "jump_url": "https://www.zhihu.com/topic/20059706"
        },
        {
            "name": "姚晨",
            "img_url": "./imgs/head/yaochen-s.jpg",
            "desc": "《送我上青云》饰盛男",
            "jump_url": "https://www.zhihu.com/topic/19555363"
        },
        {
            "name": "易烊千玺",
            "img_url": "./imgs/head/yiyangqianxi-s.jpg",
            "desc": "《少年的你》饰刘北山",
            "jump_url": "https://www.zhihu.com/topic/20027294"
        },
        {
            "name": "咏梅",
            "img_url": "./imgs/head/yongmei-s.jpg",
            "desc": "《地久天长》饰王丽云",
            "jump_url": "https://www.zhihu.com/topic/20745214"
        },
        {
            "name": "于谦",
            "img_url": "./imgs/head/yuqian-s.jpg",
            "desc": "《老师·好》饰苗宛秋",
            "jump_url": "https://www.zhihu.com/topic/19767627"
        },
        {
            "name": "袁泉",
            "img_url": "./imgs/head/yuanquan-s.jpg",
            "desc": "《中国机长》饰毕男",
            "jump_url": "https://www.zhihu.com/topic/20222217"
        },
        {
            "name": "张涵予",
            "img_url": "./imgs/head/zhanghanyu-s.jpg",
            "desc": "《中国机长》饰刘长健",
            "jump_url": "https://www.zhihu.com/topic/20105896"
        },
        {
            "name": "张译",
            "img_url": "./imgs/head/zhangyi-s.jpg",
            "desc": "《我和我的祖国》饰高远",
            "jump_url": "https://www.zhihu.com/topic/20069152"
        },
        {
            "name": "赵今麦",
            "img_url": "./imgs/head/zhaojinmai-s.jpg",
            "desc": "《流浪地球》饰韩朵朵",
            "jump_url": "https://www.zhihu.com/topic/20625561"
        },
        {
            "name": "周冬雨",
            "img_url": "./imgs/head/zhoudongyu-s.jpg",
            "desc": "《少年的你》饰陈念",
            "jump_url": "https://www.zhihu.com/topic/20088741"
        }
    ],
    // 获奖演员名单
    "winawardtemplates": [{
            "name": "陈冲",
            "img_url": "./imgs/head/chenchong-s.jpg",
            "desc": "《误杀》饰拉韫",
            "jump_url": "https://www.zhihu.com/topic/20215978"
        },
        {
            "name": "陈飞宇",
            "img_url": "./imgs/head/chenfeiyu-s.jpg",
            "desc": "《我和我的祖国》饰哈扎布",
            "jump_url": "https://www.zhihu.com/topic/20231927"
        },
        {
            "name": "杜江",
            "img_url": "./imgs/head/dujiang-s.jpg",
            "desc": "《中国机长》饰梁栋《我和我的祖国》饰朱涛《烈火英雄》饰马卫国",
            "jump_url": "https://www.zhihu.com/topic/20173468"
        },
        {
            "name": "葛优",
            "img_url": "./imgs/head/geyou-s.jpg",
            "desc": "《我和我的祖国》饰张北京",
            "jump_url": "https://www.zhihu.com/topic/19660806"
        },
        {
            "name": "桂纶镁",
            "img_url": "./imgs/head/guilunmei-s.jpg",
            "desc": "《南方车站的聚会》饰刘爱爱",
            "jump_url": "https://www.zhihu.com/topic/19862726"
        },
        {
            "name": "古天乐",
            "img_url": "./imgs/head/gutianle-s.jpg",
            "desc": "《使徒行者 2：谍影行动》饰井进贤 《扫毒 2 天地对决》饰冯振国",
            "jump_url": "https://www.zhihu.com/topic/19613633"
        },
        {
            "name": "黄渤",
            "img_url": "./imgs/head/huangbo-s.jpg",
            "desc": "《我和我的祖国》饰林治远",
            "jump_url": "https://www.zhihu.com/topic/19674807"
        },
        {
            "name": "黄景瑜",
            "img_url": "./imgs/head/huangjingyu-s.jpg",
            "desc": "《飞驰人生》饰林臻东",
            "jump_url": "https://www.zhihu.com/topic/20042231"
        },
        {
            "name": "黄晓明",
            "img_url": "./imgs/head/huangxiaoming-s.jpg",
            "desc": "《烈火英雄》饰江立伟",
            "jump_url": "https://www.zhihu.com/topic/19587523"
        },
        {
            "name": "胡歌",
            "img_url": "./imgs/head/huge-s.jpg",
            "desc": "《南方车站的聚会》饰周泽农",
            "jump_url": "https://www.zhihu.com/topic/19656332"
        },
        {
            "name": "刘昊然",
            "img_url": "./imgs/head/liuhaoran-s.jpg",
            "desc": "《我和我的祖国》饰沃德乐",
            "jump_url": "https://www.zhihu.com/topic/20090895"
        },
        {
            "name": "马思纯",
            "img_url": "./imgs/head/masichun-s.jpg",
            "desc": "《风中有朵雨做的云》饰小诺",
            "jump_url": "https://www.zhihu.com/topic/20067522"
        },
        {
            "name": "欧豪",
            "img_url": "./imgs/head/ouhao-s.jpg",
            "desc": "《中国机长》饰徐奕辰《我和我的祖国》饰梁昌寿《烈火英雄》饰徐小斌",
            "jump_url": "https://www.zhihu.com/topic/20105878"
        },
        {
            "name": "任素汐",
            "img_url": "./imgs/head/rensuxi-s.jpg",
            "desc": "《我和我的祖国》饰方敏",
            "jump_url": "https://www.zhihu.com/topic/20141967"
        },
        {
            "name": "沈腾",
            "img_url": "./imgs/head/shenteng-s.jpg",
            "desc": "《飞驰人生》饰张驰",
            "jump_url": "https://www.zhihu.com/topic/20029512"
        },
        {
            "name": "宋佳",
            "img_url": "./imgs/head/songjia-s.jpg",
            "desc": "《我和我的祖国》饰吕潇然《风中有朵雨做的云》饰林慧",
            "jump_url": "https://www.zhihu.com/topic/20220995"
        },
        {
            "name": "谭卓",
            "img_url": "./imgs/head/tanzhuo-s.jpg",
            "desc": "《误杀》饰阿玉《烈火英雄》饰李芳",
            "jump_url": "https://www.zhihu.com/topic/20211074"
        },
        {
            "name": "王景春",
            "img_url": "./imgs/head/wangjingchun-s.jpg",
            "desc": "《地久天长》饰刘耀军",
            "jump_url": "https://www.zhihu.com/topic/20221215"
        },
        {
            "name": "吴京",
            "img_url": "./imgs/head/wujing-s.jpg",
            "desc": "《流浪地球》饰刘培强",
            "jump_url": "https://www.zhihu.com/topic/20089785"
        },
        {
            "name": "肖央",
            "img_url": "./imgs/head/xiaoyang-s.jpg",
            "desc": "《误杀》饰李维杰",
            "jump_url": "https://www.zhihu.com/topic/20139969"
        },
        {
            "name": "杨紫",
            "img_url": "./imgs/head/yangzi-s.jpg",
            "desc": "《烈火英雄》饰王璐",
            "jump_url": "https://www.zhihu.com/topic/20059706"
        },
        {
            "name": "姚晨",
            "img_url": "./imgs/head/yaochen-s.jpg",
            "desc": "《送我上青云》饰盛男",
            "jump_url": "https://www.zhihu.com/topic/19555363"
        },
        {
            "name": "易烊千玺",
            "img_url": "./imgs/head/yiyangqianxi-s.jpg",
            "desc": "《少年的你》饰刘北山",
            "jump_url": "https://www.zhihu.com/topic/20027294"
        },
        {
            "name": "咏梅",
            "img_url": "./imgs/head/yongmei-s.jpg",
            "desc": "《地久天长》饰王丽云",
            "jump_url": "https://www.zhihu.com/topic/20745214"
        },
        {
            "name": "于谦",
            "img_url": "./imgs/head/yuqian-s.jpg",
            "desc": "《老师·好》饰苗宛秋",
            "jump_url": "https://www.zhihu.com/topic/19767627"
        },
        {
            "name": "袁泉",
            "img_url": "./imgs/head/yuanquan-s.jpg",
            "desc": "《中国机长》饰毕男",
            "jump_url": "https://www.zhihu.com/topic/20222217"
        },
        {
            "name": "张涵予",
            "img_url": "./imgs/head/zhanghanyu-s.jpg",
            "desc": "《中国机长》饰刘长健",
            "jump_url": "https://www.zhihu.com/topic/20105896"
        },
        {
            "name": "张译",
            "img_url": "./imgs/head/zhangyi-s.jpg",
            "desc": "《我和我的祖国》饰高远",
            "jump_url": "https://www.zhihu.com/topic/20069152"
        },
        {
            "name": "赵今麦",
            "img_url": "./imgs/head/zhaojinmai-s.jpg",
            "desc": "《流浪地球》饰韩朵朵",
            "jump_url": "https://www.zhihu.com/topic/20625561"
        },
        {
            "name": "周冬雨",
            "img_url": "./imgs/head/zhoudongyu-s.jpg",
            "desc": "《少年的你》饰陈念",
            "jump_url": "https://www.zhihu.com/topic/20088741"
        }

    ],
    // z专家评审
    "reviewtemplates": [
        [{
                "name": "张北海",
                "img_url": "./imgs/head/xiaoyang-s.jpg",
                "desc": "导演 代表作《中国机长》",
                "jump_url": "123123",
                //问题备注（jump_url 链接前台未绑定）
            }, {
                "name": "张北海",
                "img_url": "./imgs/head/xiaoyang-s.jpg",
                "desc": "导演 代表作《中国机长》",
                "jump_url": "#",
            }, {
                "name": "张北海",
                "img_url": "./imgs/head/xiaoyang-s.jpg",
                "desc": "导演 代表作《中国机长》",
                "jump_url": "#",
            },
            {
                "name": "张北海",
                "img_url": "./imgs/head/xiaoyang-s.jpg",
                "desc": "导演 代表作《中国机长》",
                "jump_url": "#",
            }, {
                "name": "张北海",
                "img_url": "./imgs/head/xiaoyang-s.jpg",
                "desc": "导演 代表作《中国机长》",
                "jump_url": "#",
            }, {
                "name": "张北海",
                "img_url": "./imgs/head/xiaoyang-s.jpg",
                "desc": "导演 代表作《中国机长》",
                "jump_url": "#",
            }
        ],
        [{
            "name": "张北海",
            "img_url": "./imgs/head/xiaoyang-s.jpg",
            "desc": "导演 代表作《中国机长》",
            "jump_url": "#",
        }, {
            "name": "张北海",
            "img_url": "./imgs/head/xiaoyang-s.jpg",
            "desc": "导演 代表作《中国机长》",
            "jump_url": "#",
        }, {
            "name": "张北海",
            "img_url": "./imgs/head/xiaoyang-s.jpg",
            "desc": "导演 代表作《中国机长》",
            "jump_url": "#",
        }]
    ]

}


window.performer = performer;