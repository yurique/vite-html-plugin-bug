import { injectHtml } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const mainJS = `/main.js`

  return {
    plugins: [
      injectHtml({
        injectData: {
          mainJS
        }
      })
    ]
  }
}
