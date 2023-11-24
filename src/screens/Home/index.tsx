import { SafeAreaView, View } from 'react-native'
import styles from './styles'

import Devices from './Devices'
import { useNotification } from './hooks/useNotification'
import {
  ALERT_TYPE,
  Toast,
  AlertNotificationRoot,
} from 'react-native-alert-notification'
import Panel from './Panel'

const Home = (): JSX.Element => {
  useNotification({
    onNotificationReceived: ({ title, message }) => {
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title,
        textBody: message,
      })
    },
  })

  return (
    <AlertNotificationRoot>
      <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          <Devices />
          <Panel />
        </View>
      </SafeAreaView>
    </AlertNotificationRoot>
  )
}

export default Home
