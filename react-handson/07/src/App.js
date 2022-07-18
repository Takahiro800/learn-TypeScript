import React, { useEffect, useState } from 'react';

export default function App() {
  const [checkd, setChecked] = useState(false);

  useEffect(() => {
    alert(`checked: ${checkd.toString()}`);
  });

  return (
    <>
      <input type="checkbox" value={checkd} onChange={() => setChecked((checkd) => !checkd)} />
      {checkd ? 'checkd' : 'not checked'}
    </>
  );
}
