import { Style } from 'react-native-paper/lib/typescript/components/List/utils'
import { Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'

export interface DevicesProps {
  devicesIds: string[]
}

export interface NotificationProps {
  title: string
  message: string
}

export type NotificationState = {
  devicesIds: string[]
  selectedDevicesIds: string[]
  currentSocketId: string | null
  socket: Socket<DefaultEventsMap, DefaultEventsMap> | null
  title: string
  message: string
}

export type NotificationActions = {
  setDevicesIds: (devicesIds: string[]) => void
  setSelectedDevicesIds: (selectedDevicesIds: string[]) => void
  setSocketId: (socketId: string) => void
  setSocket: (socket: Socket<DefaultEventsMap, DefaultEventsMap>) => void
  setTitle: (title: string) => void
  setMessage: (message: string) => void
}

export type NotificationStore = NotificationState & NotificationActions
export interface useNotificationProps {
  onNotificationReceived?: (notification: NotificationProps) => void
}

export interface IconProps {
  color: string
  style: Style
}
