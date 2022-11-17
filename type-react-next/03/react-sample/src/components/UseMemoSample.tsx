import React, { useMemo, useState } from 'react';

export const UseMemoSample = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };

  const onClickButton = () => {
    setItems((prevItems) => {
      // 現在の入力値をitemsに追加する, この時新しい配列を作成して保存する
      return [...prevItems, text];
    });
    // テキストボックスの中の値を空にする
    setText('');
  };

  // numberOfCharactes1は再描画の度にitems.reduceを実行して結果を得る
  const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0);

  // useMemoを使い、itemsが更新されるタイミングでitems.reduceを実行して結果を得る
  const numberOfCharacters2 = useMemo(() => {
    // 第二引数の配列の中にitemsがあるので、itemsが新しくなった時だけ関数を実行してメモを更新する
    return items.reduce((sub, item) => sub + item.length, 0);
  }, [items]);

  return (
    <div>
      <p>UseMemoSample</p>
      <div>
        <input value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <p>Total Number of Characters 1: {numberOfCharacters1}</p>
        <p>Total Number of Characters 2: {numberOfCharacters2}</p>
      </div>
    </div>
  );
};
