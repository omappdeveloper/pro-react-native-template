import { SafeAreaView} from 'react-native'
import RootNavigation from './navigations/RootNavigation';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RootNavigation/>
    </SafeAreaView>
  )
}

export default App
