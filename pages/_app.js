// グローバルなCSSファイルは_app.jsにのみimportできる
import 'styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps}/>
}