import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { BlogContextProvider } from "./contexts/BlogContext"

function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <BlogContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </BlogContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
