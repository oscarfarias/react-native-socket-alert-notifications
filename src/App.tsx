import { PaperProvider } from 'react-native-paper'
import Home from 'screens/Home'

function App(): JSX.Element {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  )
}

export default App
