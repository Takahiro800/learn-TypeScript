import React from 'react';
import { useInput } from './hooks';

export default function AddColorForm({ onNewColor = (f) => f }) {
  const [titleProps, setTitle] = useInput('');
  const [colorProps, setColor] = useInput('#000000');

  const submit = (e) => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    setTitle('');
    setColor('');
  };

  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="color title ..." required />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
}
