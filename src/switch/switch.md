```js
class TheSwitch extends React.Component {
  constructor() {
    super()
    this.state = {
      checked: false,
    }
    this.onClickSwitch = this.onClickSwitch.bind(this)
  }
  onClickSwitch() {
    this.setState({ checked: !this.state.checked })
  }
  render() {
    return (
      <Switch
        disabled={false}
        input={{
          value: this.state.checked,
          onChange: () => {},
          onClick: this.onClickSwitch,
        }}
        checked={this.state.checked}
      />
    )
  }
};
<div style={{display: 'flex'}}>
<TheSwitch/>
</div>
```
