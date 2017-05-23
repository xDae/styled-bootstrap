Bootstrap includes six predefined button styles, each serving its own semantic purpose.

```
const margin = { marginRight: 6, marginBottom: 6 };

<div>
  <Button style={margin} type="primary">Push Me</Button> 
  <Button style={margin} type="secondary">Push Me</Button> 
  <Button style={margin} type="info">Push Me</Button> 
  <Button style={margin} type="success">Push Me</Button> 
  <Button style={margin} type="warning">Push Me</Button> 
  <Button style={margin} type="danger">Push Me</Button> 
</div>
```

### Outline buttons

In need of a button, but not the hefty background colors they bring? Add the `outline` prop to remove all background images and colors on any button.

```
const margin = { marginRight: 6, marginBottom: 6 };

<div>
  <Button style={margin} type="primary" outline>Push Me</Button>
  <Button style={margin} type="secondary" outline>Push Me</Button>
  <Button style={margin} type="info" outline>Push Me</Button>
  <Button style={margin} type="success" outline>Push Me</Button>
  <Button style={margin} type="warning" outline>Push Me</Button>
  <Button style={margin} type="danger" outline>Push Me</Button>
</div>
```

### Sizes

Fancy larger or smaller buttons? Add `size="large"` or `size="small"` for additional sizes.

#### Large Buttons

```
const margin = { marginRight: 6, marginBottom: 6 };

<div>
  <Button style={margin} type="primary" size="large">Push Me</Button>
  <Button style={margin} type="secondary" size="large">Push Me</Button>
  <Button style={margin} type="info" size="large">Push Me</Button>
  <Button style={margin} type="success" size="large">Push Me</Button>
  <Button style={margin} type="warning" size="large">Push Me</Button>
  <Button style={margin} type="danger" size="large">Push Me</Button>
</div>
```

#### Small Buttons

```
const margin = { marginRight: 6, marginBottom: 6 };

<div>
  <Button style={margin} type="primary" size="small">Push Me</Button>
  <Button style={margin} type="secondary" size="small">Push Me</Button>
  <Button style={margin} type="info" size="small">Push Me</Button>
  <Button style={margin} type="success" size="small">Push Me</Button>
  <Button style={margin} type="warning" size="small">Push Me</Button>
  <Button style={margin} type="danger" size="small">Push Me</Button>
</div>
```
