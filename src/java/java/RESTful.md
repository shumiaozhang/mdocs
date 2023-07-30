## 注解

1、@RequestMapping

声明url和请求类型

```
@RequestMapping(value="/url", method = RequestMethod.GET)
// 如果是get和post都请求
@RequestMapping(value="/url", method = {RequestMethod.GET, RequestMethod.POST})
```

2、@PathVariable

映射 URL 绑定的占位符， 通过@PathVariable 可以将 URL 中占位符参数绑定到控制器处理方法的入参中：URL中的 {xxx} 占位符可以通过@PathVariable(“xxx“)绑定到操作方法的入参中

直接使用
```
@RequestMapping("/message/detail/data={name}")
public String goDetail(@PathVariable String name, Model model){
    model.addAttribute("data", name);
    return "detail";
}
```

将传入的值更改一个字段接收
```
@RequestMapping("/message/detail/data={name}")
public String goDetail(@PathVariable(name) String data, Model model){
    model.addAttribute("data", data);
    return "detail";
}
```
