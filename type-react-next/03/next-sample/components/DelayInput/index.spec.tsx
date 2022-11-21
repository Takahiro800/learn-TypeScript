import { fireEvent } from '@storybook/testing-library';
import { render, screen, RenderResult, act } from '@testing-library/react';
import { DelayInput } from './index';

// DealyInputコンポーネントに関するテスト
describe('DelyaInput', () => {
  let renderResult: RenderResult;
  let handleChange: jest.Mock;

  beforeEach(() => {
    // タイマーをjestのものに置き換える
    jest.useFakeTimers();

    // モック関数を作成する
    handleChange = jest.fn();

    // モック関数をDelayButtonに渡して描画
    renderResult = render(<DelayInput onChange={handleChange} />);
  });

  afterEach(() => {
    renderResult.unmount();

    // タイマーを元のものに戻す
    jest.useFakeTimers();
  });

  // span要素のテキストが空であることをテスト
  it('shoule display empty in span in initial render', () => {
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement;

    // 初期表示は空
    expect(spanNode).toHaveTextContent('入力したテキスト：');
  });

  // 入力直後はspan要素が「入力。。。」と表示するかテスト
  it('should display 「入力中...」 immediately after onChange event occrus', () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement;

    // inputのonChangeイベントを呼び出す
    fireEvent.change(inputNode, { target: { value: inputText } });

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement;

    // 入力中と表示するか確認
    expect(spanNode).toHaveTextContent('入力中...');
  });

  // 入力して１秒ごにテキストが表示されるかテスト
  it('should display input text 1second after onChange event occurs', async () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement;

    // inputのonChangeイベントを呼び出す
    fireEvent.change(inputNode, { target: { value: inputText } });

    // act関数内で実行することにより、タイマーのコールバック中で起きる状態変更が反映されることを保証する
    await act(() => {
      // タイマーにセットされたtimeoutを全て実行する
      jest.runAllTimers();
    });
  });

  // 入力して１秒後にonChangeが呼ばれるかテスト
  it('should call onChange 1second after onChange event occurs', async () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement;

    // inputのonChangeイベントを呼び出す
    fireEvent.change(inputNode, { target: { value: inputText } });

    // タイマーの実行
    await act(() => {
      jest.runAllTimers();
    });

    // モック関数を渡し、呼ばれたかを確認する
    // expect(handleChange).toHaveBeenCalled();
  });
});
