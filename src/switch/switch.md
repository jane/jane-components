```tsx
initialState = {checked: false};

<div style={{ display: 'flex'}}>
  <Switch
    disabled={false}
    input={{
      value: state.checked,
      onChange: () => setState((prevState) => ({ checked: !prevState.checked })),
    }}
    checked={state.checked}
  />
</div>
```
