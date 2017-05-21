React component example:

```
const margin = { marginRight: 6, marginBottom: 6 };

<div>
  <Button style={margin} type="primary" onClick={() => console.log('Button clicked!')}>Push Me</Button> 
  <Button style={margin} type="secondary">Push Me</Button> 
  <Button style={margin} type="info">Push Me</Button> 
  <Button style={margin} type="success">Push Me</Button> 
  <Button style={margin} type="warning">Push Me</Button> 
  <Button type="danger">Push Me</Button> 
</div>
```

```
<div>
  <Button type="primary" outline>Push Me</Button>
  <Button type="secondary" outline>Push Me</Button>
  <Button type="info" outline>Push Me</Button>
  <Button type="success" outline>Push Me</Button>
  <Button type="warning" outline>Push Me</Button>
  <Button type="danger" outline>Push Me</Button>
</div>
```

```
<div>
  <Button type="primary" size="large">Push Me</Button>
  <Button type="secondary" size="large">Push Me</Button>
  <Button type="info" size="large">Push Me</Button>
  <Button type="success" size="large">Push Me</Button>
  <Button type="warning" size="large">Push Me</Button>
  <Button type="danger" size="large">Push Me</Button>
</div>
```

```
<div>
  <Button type="primary" size="small">Push Me</Button>
  <Button type="secondary" size="small">Push Me</Button>
  <Button type="info" size="small">Push Me</Button>
  <Button type="success" size="small">Push Me</Button>
  <Button type="warning" size="small">Push Me</Button>
  <Button type="danger" size="small">Push Me</Button>
</div>
```

This example is rendered only as highlighted source code, not an actual component:

```html
<Button size="large">Push Me</Button>
```

Any [Markdown](http://daringfireball.net/projects/markdown/) is **allowed** _here_.
