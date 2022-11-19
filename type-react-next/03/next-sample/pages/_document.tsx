import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// デフォルトのDocumentを MyDocumentで上書き
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      // 初期値を流用
      const initalProps = await Document.getInitialProps(ctx);

      // initialPropsに加えて、styleを追加して返す
      return {
        ...initalProps,
        styles: [
          // 元々のstyle
          initalProps.styles,

          // styled-componentsのstyle
          sheet.getStyleElement(),
        ],
      };
    } finally {
      sheet.seal;
    }
  }
}
