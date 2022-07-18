import React, { useReducer, useState } from 'react';

export default function Checkbox() {
  // const [checked, setChecked] = useState(false);

  // 新しく値をセットするのではなく、現在のステート値を元に更新する際にuseReducerを活用
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? 'checked' : 'not checked'}
    </>
  );
}
