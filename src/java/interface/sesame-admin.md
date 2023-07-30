这是sesame-admin接口文档

所有的列表list返回格式

result
| 名称      | 类型     | 是否必填   | 备注       |     |
|---------|--------|--------|----------|-----|
| status  | string | number | 是        | 状态码 |
| message | string | 是      | 状态码对应的信息 |     |
| data    | Object | 否      | 返回信息     |     |

data
| 名称       | 类型           | 是否必填 | 备注   |
|----------|--------------|------|------|
| list     | object/Array | 是    | 列表信息 |
| page     | number       | 否    | 共几页  |
| pageNum  | number       | 是    | 第几页  |
| pageSize | number       | 是    | 一页几条 |
| total    | number       | 是    | 总条数  |


1. 角色列表
> https://zhangshumiao.cn/sesame/admin/role/list

参数
|名称|类型|是否必填|备注|
|--|--|--|--|
|pageNum|number|是|第几页|
|pageSize|number|是|一页几条|

返回信息list

| 名称       | 类型     | 是否必填 | 备注   |
|----------|--------|------|------|
| roleName | string | 是    | 角色名称 |
| note     | string | 是    | 备注信息 |
| roleId   | string | 是    | 角色ID   |

2. 角色新增
> https://zhangshumiao.cn/sesame/admin/role/add

参数

| 名称       | 类型     | 是否必填 | 备注   |
|----------|--------|------|------|
| roleName | string | 是    | 角色名称 |
| note     | string | 是    | 备注信息 |

3. 角色编辑
> https://zhangshumiao.cn/sesame/admin/role/update

参数
| 名称       | 类型     | 是否必填 | 备注   |
|----------|--------|------|------|
| roleId   | string | 是    | 角色ID |
| roleName | string | 是    | 角色名称 |
| note     | string | 是    | 备注信息 |

