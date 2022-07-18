import React, { useEffect, useState } from 'react';

export default function App() {
  const [val, set] = useState('');
  const [phrase, setPhrase] = useState('example phrase');

  const createPhrase = () => {
    setPhrase(val);
    set('');
  };

  useEffect(() => {
    console.log(`typing "${val}"`);
  }, [val]);

  useEffect(() => {
    console.log(`saved phrase: "${phrase}"`);
  }, [phrase]);

  // 依存配列に複数の値を含ませることもできる
  useEffect(() => {
    console.log('either val or phrase has changed');
  }, [val, phrase]);

  // 空にすることで初回描画時のみに実行する
  useEffect(() => {
    console.log('only once after initial render');
  }, []);

  return (
    <>
      <label>Favorite phrase:</label>
      <input value={val} placeholder={phrase} onChange={(e) => set(e.target.value)} />
      <button onClick={createPhrase}>send</button>
    </>
  );
}
