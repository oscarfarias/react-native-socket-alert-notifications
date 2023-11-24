import { Text, View, TextInput } from 'react-native'
import { Button } from 'react-native-paper'
import styles from './styles'
import { usePanel } from './hooks/usePanel'
const Panel = (): JSX.Element => {
  const { sendNotification, onChangeTitle, onChangeMessage, title, message } =
    usePanel()
  return (
    <View style={[styles.card, styles.panelCard]}>
      <Text style={styles.cardTitle}>Send a notification</Text>
      <View style={styles.body}>
        <TextInput
          value={title}
          onChangeText={onChangeTitle}
          style={styles.textInput}
          placeholder="Title"
        />
        <TextInput
          value={message}
          onChangeText={onChangeMessage}
          style={styles.textInput}
          placeholder="Message"
        />
        <Button style={styles.send} mode="contained" onPress={sendNotification}>
          Send
        </Button>
      </View>
    </View>
  )
}
export default Panel
