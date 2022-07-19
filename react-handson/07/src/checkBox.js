import React, { useReducer, useState } from 'react';

export default function Checkbox() {
  // const [checked, setChecked] = useState(false);

  // 新しく値をセットするのではなく、現在のステート値を元に更新する際にuseReducerを活用
  const [checked, toggle] = useReducer((checked) => !checked, false);
  const [number, setNumber] = useReducer((number, addNumber) => number + addNumber, 0);

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? 'checked' : 'not checked'}
      <h1 onClick={() => setNumber(1)}>{number}</h1>
    </>
  );
}
