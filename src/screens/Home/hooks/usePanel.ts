import { useNotificationStore } from '../store'
import { socketEvents } from 'config/constants'

export const usePanel = () => {
  const { socket, selectedDevicesIds, title, message, setTitle, setMessage } =
    useNotificationStore(state => state)

  const sendNotification = (): void => {
    if (socket) {
      socket.emit(socketEvents.onSendNotification, {
        devicesIds: selectedDevicesIds,
        notification: {
          title,
          message,
        },
      })
    }
  }
  const onChangeTitle = (title: string): void => {
    setTitle(title)
  }
  const onChangeMessage = (message: string): void => {
    setMessage(message)
  }

  return {
    sendNotification,
    onChangeTitle,
    onChangeMessage,
    title,
    message,
  }
}
