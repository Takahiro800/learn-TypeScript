// 型を利用するためにインポート
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

type PostProps = {
  id: string;
};

const Post: NextPage<PostProps> = (props) => {
  const { id } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favion.ico" />
      </Head>
      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
        <p>{`/posts/${id}に対応するページです`}</p>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        id: '1',
      },
    },
    {
      params: {
        id: '2',
      },
    },
    {
      params: {
        id: '3',
      },
    },
  ];

  // fallbackをfalseにすると、pathsで指定されたページ以外は404ページを表示する
  return { paths, fallback: false };
};

type PathsProps = {
  params: PostProps;
};

// getStaticPaths実行後にそれぞれのパスについてgetStaticPropsが実行される
export const getStaticProps: GetStaticProps<PostProps> = async (context: PathsProps) => {
  const id = Array.isArray(context.params['id']) ? context.params['id'][0] : context.params['id'];

  return {
    props: {
      id,
    },
  };
};

export default Post;
