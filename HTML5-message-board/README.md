# 新增和删去的标签

# 新增及废除属性 

# 全局属性

- data-yourvalue
- hidden
- Spellcheck
- tabindex
- contenteditable
- desginMode
  - [Document.designMode]()
  




```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>全局属性</title>
	<link href="https://cdn.bootcss.com/bootstrap/4.0.0-alpha.6/css/bootstrap-grid.css" rel="stylesheet" mdedia="all">
	<script type="text/javascript">
		window.document.designMode = "off";
	</script>
</head>
<body>
	<form data-type="comment" class="container">
	  <h3>留言板</h3>
		<label hidden>看见了吗？</label>
		<p>
			<label>
				<span>姓名</span>
				<input tabindex="1"/>
			</label>			
		</p>

		<p>
			<label>
				<span>邮件</span>
				<input tabindex="3">
				
			</label>
		</p>

		<p>
			<label>
				<span>留言</span>
				<textarea tabindex="2" spellcheck="true" cols="60" rows"5></textarea>
			</label>

		</p>

		<table contenteditable="true">
      <tr>
      	<td>数据一</td>
      	<td>数据二</td>
      </tr>
		</table>

		<p contenteditable="true">请留言</p>
		
	</form>
</body>
</html>
```


```
window.document.designMode = "on";

```

把off改成on 所有都可以修改

也就是通过这个属性我们可以在网页上进行实时的编辑

当然还是 contenteditable="true" 更实用些
