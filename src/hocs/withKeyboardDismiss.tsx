import { ComponentType } from 'react'
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native'

const withKeyboardDismiss = (Component: ComponentType<any>) => {
  return (props: any) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView>
        <Component {...props} />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default withKeyboardDismiss
