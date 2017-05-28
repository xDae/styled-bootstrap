Bootstrap includes six predefined button styles, each serving its own semantic purpose.

```
const margin = { marginRight: 6, marginBottom: 6 };

<div>
  <ButtonV2 style={margin} color="primary">Push Me</ButtonV2> 
  <ButtonV2 style={margin} color="secondary">Push Me</ButtonV2> 
  <ButtonV2 style={margin} color="info">Push Me</ButtonV2> 
  <ButtonV2 style={margin} color="success">Push Me</ButtonV2> 
  <ButtonV2 style={margin} color="warning">Push Me</ButtonV2> 
  <ButtonV2 style={margin} color="danger">Push Me</ButtonV2> 
</div>
```

### Outline buttons

In need of a button, but not the hefty background colors they bring? Add the `outline` prop to remove all background images and colors on any button.

```
const margin = { marginRight: 6, marginBottom: 6 };

<div>
  <ButtonV2 style={margin} color="primary" outline>Push Me</ButtonV2>
  <ButtonV2 style={margin} color="secondary" outline>Push Me</ButtonV2>
  <ButtonV2 style={margin} color="info" outline>Push Me</ButtonV2>
  <ButtonV2 style={margin} color="success" outline>Push Me</ButtonV2>
  <ButtonV2 style={margin} color="warning" outline>Push Me</ButtonV2>
  <ButtonV2 style={margin} color="danger" outline>Push Me</ButtonV2>
</div>
```

### Sizes

Fancy larger or smaller buttons? Add `size="large"` or `size="small"` for additional sizes.

#### Large Buttons

```
const margin = { marginRight: 6, marginBottom: 6 };

<div>
  <ButtonV2 style={margin} color="primary" size="large">Push Me</ButtonV2>
  <ButtonV2 style={margin} color="secondary" size="large">Push Me</ButtonV2>
  <ButtonV2 style={margin} color="info" size="large">Push Me</ButtonV2>
  <ButtonV2 style={margin} color="success" size="large">Push Me</ButtonV2>
  <ButtonV2 style={margin} color="warning" size="large">Push Me</ButtonV2>
  <ButtonV2 style={margin} color="danger" size="large">Push Me</ButtonV2>
</div>
```

#### Active Buttons

```
const margin = { marginRight: 6, marginBottom: 6 };

<div>
  <ButtonV2 style={margin} color="primary" active>Push Me</ButtonV2>
  <ButtonV2 style={margin} color="secondary" active>Push Me</ButtonV2>
  <ButtonV2 style={margin} color="info" active>Push Me</ButtonV2>
  <ButtonV2 style={margin} color="success" active>Push Me</ButtonV2>
  <ButtonV2 style={margin} color="warning" active>Push Me</ButtonV2>
  <ButtonV2 style={margin} color="danger" active>Push Me</ButtonV2>
</div>
```

#### Small Buttons

```
const margin = { marginRight: 6, marginBottom: 6 };

<div>
  <ButtonV2 style={margin} color="primary" size="small">Push Me</ButtonV2>
  <ButtonV2 style={margin} color="secondary" size="small">Push Me</ButtonV2>
  <ButtonV2 style={margin} color="info" size="small">Push Me</ButtonV2>
  <ButtonV2 style={margin} color="success" size="small">Push Me</ButtonV2>
  <ButtonV2 style={margin} color="warning" size="small">Push Me</ButtonV2>
  <ButtonV2 style={margin} color="danger" size="small">Push Me</ButtonV2>
</div>
```
