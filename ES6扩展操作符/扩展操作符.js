/**
 * 扩展运算符的作用
 * 在一个数组中扩展一个数组的元素
 * 在多个数组使用时可以扩展公共字段的的值
 */

let array1=[1,2,3];
let array=[...array1,3,4,5];
console.log("array",array);[1,2,3,3,4,5];

/**
 * 共用字段
 */
export const columsId = [{
    title: 'ID',
    key: 'id',
    align: 'center'
}]
/**
 * 时间
 */
const columsTime = [{
    title: '时间',
    key: 'time',
    align: 'center'
}]

/**
 * 微博上榜时间
 */

const columsOntime = [{
    title: '上邦时间',
    key: 'ontime',
    align: 'center'
}]
/**
 * 发帖时间
 */
const columsPostingTime = [{
    title: '发帖时间',
    key: 'postingtime',
    align: 'center'
}]




/**
 * 监测tab
 * 表格表头
 */
export const monitorTabs = [{
        title: "微博监测",
        tabID: "1",
        icon: "list-alt",
        colums: [
            ...columsId,
            ...columsTime,
            {
                title: '微博昵称',
                key: 'nikeName',
                align: 'center'
            }, {
                title: '博主类型',
                key: 'type',
                align: 'center'
            }, {
                title: '微博链接',
                key: 'link',
                align: 'center'
            }, {
                title: '内容标题',
                key: 'contentitle',
                align: 'center'
            }, {
                title: '转发数',
                key: 'ForwardNumber',
                align: 'center'
            }, {
                title: '评论数',
                key: 'comments',
                align: 'center'
            }, {

                title: '点赞数',
                key: 'comments',
                align: 'center'

            }, {
                title: '所属项目',
                key: 'project',
                align: 'center'
            },
            {
                title: '舆情类型',
                key: 'opiniontype',
                align: 'center'
            }, {
                title: '正负面',
                key: 'negative',
                align: 'center'
            }
        ]
    },
    {
        title: "微博话题榜监测",
        tabID: "2",
        icon: "list-alt",
        colums: [
            ...columsId,
            ...columsOntime,
        ]
    },
    {
        title: "微博热搜监测",
        tabID: "3",
        icon: "list-alt",
        colums: [
            ...columsId,
            ...columsPostingTime,
        ]
    }, {
        title: "兔区监测",
        tabID: "4",
        icon: "list-alt",
        colums: [
            ...columsId,
            ...columsPostingTime,
        ]
    }, {
        title: "豆瓣监测",
        tabID: "5",
        icon: "list-alt",
        colums: [
            ...columsId,
            ...columsPostingTime,
        ]
    }, {
        title: "今日头条监测",
        tabID: "6",
        icon: "list-alt",
        colums: [
            ...columsId,
            ...columsPostingTime,
        ]
    },
    {
        title: "新闻监测",
        tabID: "7",
        icon: "list-alt",
        colums: [
            ...columsId,
        ]
    }, {
        title: "百度贴吧监测",
        tabID: "8",
        icon: "list-alt",
        colums: [
            ...columsId,
            ...columsPostingTime,
        ]
    },
    {
        title: "微信监测",
        tabID: "9",
        icon: "list-alt",
        colums: [
            ...columsId,
            ...columsPostingTime,
        ]
    }, {
        title: "虎扑监测",
        tabID: "10",
        icon: "list-alt",
        colums: [
            ...columsId,
            ...columsPostingTime,
        ]
    },
]