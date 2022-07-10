// p.44 プリミティブ型同士の変換　明示的な変換を行う
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('数値を入力してください', (line) => {
  const num = Number(line);
  // 1000を足して出力
  console.log(num + 1000);
  rl.close;
});
