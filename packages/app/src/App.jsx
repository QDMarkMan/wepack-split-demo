import React from "react"
import Container from './components/Container'
const RemoteButton = React.lazy(() => import("app_one/Button"))
console.log(RemoteButton)
const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>App</h2>
    <Container>
      <h2>hello</h2>
      <RemoteButton />
    </Container>
  </div>
);

export default App;