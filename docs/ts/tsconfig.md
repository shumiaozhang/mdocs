# tsconfig.json

tsc的编译参数不仅可以写在命令行里，也能写在配置文件中。

只要当前目录有这个文件，`tsc`就会自动读取，所以运行时可以不写参数。

### 选项

noImplicitAny：

*   如果被ts推断为any类型，会报错

strictNullChecks：

*   打开后，如果变量没有声明类型，变量赋值为undefined，则会推断为undefined，赋值为null，会被推断为null，而不会被推断为any类型。
*   undefined、null就不能赋值给其他类型的变量，只能给自身或者any、unknown类型赋值，否则会报错
*   void类型只允许返回undefined，如果返回null会报错，因为js规定，如果函数没有返回值，就等于返回undefined。

ExactOptionalPropertyTypes && strictNullChecks：

*   同时打开，对象的可选属性就不能设置为undefined

suppressExcessPropertyErrors：

*   是否关闭ts对对象字面量类型的严格检查 &#x20;

```json
{
  "compilerOptions": {
    "strictNullChecks": true,
	"suppressExcessPropertyErrors": true,
    // ...
  }
}
```

