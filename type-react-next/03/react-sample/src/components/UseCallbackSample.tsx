import React, { useCallback, useState } from 'react';

type ButtonProps = {
  onClick: () => void;
};

// DecrementButtonは通常の関数コンポーネントでボタンを表示
const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props;

  console.log('DecrementButtonが再描画されました');

  return <button onClick={onClick}>Decrement</button>;
};

// IncrementButtonはメモ化した関数コンポーネントでボタンを表示する
const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;

  console.log('IncrementButtonが再描画されました');

  return <button onClick={onClick}>Increment</button>;
});

// DoubleButtonはメモ化した関数コンポーネントでボタンを表示する
const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;

  console.log('DoubleButtonが再描画されました');

  return <button onClick={onClick}>Double</button>;
});

// export const Parent = () => {
export const UseCallbackSample = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((c) => c - 1);
  };

  const increment = () => {
    setCount((c) => c + 1);
  };

  // useCallbackを使って関数をメモ化する
  const double = useCallback(() => {
    // 第二引数はから配列なので、useCallbackは常に同じ関数を変える
    setCount((c) => c * 2);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      {/* コンポーネントに関数を渡す */}
      <DecrementButton onClick={decrement} />

      {/* メモ化コンポーネントに関数を渡す */}
      <IncrementButton onClick={increment} />

      {/* メモ化コンポーネントにメモ化した関数を渡す */}
      <DoubleButton onClick={double} />
    </div>
  );
};
