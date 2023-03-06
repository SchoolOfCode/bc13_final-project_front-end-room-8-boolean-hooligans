import Document, { Html, Head, Main, NextScript } from "next/document";

class MainDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          {/*Below we add the modal wrapper so they appear in front of everything else*/}
          <div id="modal-root"></div>
          <div id="form-submission-pop-up"></div>
        </body>
      </Html>
    );
  }
}

export default MainDocument;