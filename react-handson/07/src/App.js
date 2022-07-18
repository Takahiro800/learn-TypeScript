import React, { useEffect, useLayoutEffect, useState } from 'react';
import useWindowSize from './useWindowSize';

export default function App() {
  const [val, set] = useState('');
  const [phrase, setPhrase] = useState('example phrase');
  const [width, height] = useWindowSize();

  const createPhrase = () => {
    setPhrase(val);
    set('');
  };

  // useLayoutEffectは描画関数呼び出し後、描画完了前に実行される
  useLayoutEffect(() => console.log('useLayoutEffect'));

  // 空にすることで初回描画時のみに実行する
  useEffect(() => {
    console.log('only once after initial render by useEffect');
  }, []);

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

  return (
    <>
      <label>Favorite phrase:</label>
      <input value={val} placeholder={phrase} onChange={(e) => set(e.target.value)} />
      <button onClick={createPhrase}>send</button>
      <p>{width}</p>
      <p>{height}</p>
    </>
  );
}
