import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { StyledButton } from '../components/StyledButton';
import { action } from '@storybook/addon-actions';

// ファイル内のStoryの設定 （メタデータオブジェクト）
export default {
  // グループ名
  title: 'StyledButton',

  // 使用するコンポーネント
  component: StyledButton,

  // onClickが呼ばれた時にclickedというアクションを出力する
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof StyledButton>;

type VariantProps = {
  color: string;
  backgroundColor: string;
  border: string;
};

const incrementAction = action('increment');

export const Primary = (props: VariantProps) => {
  const [count, setCount] = useState(0);
  const onClick = (e: React.MouseEvent) => {
    // 現在のカウントを渡して、Actionを呼ぶ
    incrementAction(e, count);
    setCount((c) => c + 1);
  };

  return (
    <StyledButton {...props} variant="primary" onClick={onClick}>
      Primary: {count}
    </StyledButton>
  );
};

export const Success = (props: VariantProps) => {
  return (
    <StyledButton {...props} variant="success">
      Success
    </StyledButton>
  );
};

export const Transparent = (props: VariantProps) => {
  return (
    <StyledButton {...props} variant="tarnsparent">
      Transparent
    </StyledButton>
  );
};
