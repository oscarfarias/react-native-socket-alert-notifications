'use client'
import { useEffect } from 'react'
import SocketIOClient from 'socket.io-client'
import { socketClientURL, socketEvents, socketPath } from 'config/constants'
import { NotificationProps, useNotificationProps } from '../types'
import { useNotificationStore } from '../store'

export const useNotification = ({
  onNotificationReceived,
}: useNotificationProps) => {
  const { setSocketId, devicesIds, setDevicesIds, setSocket } =
    useNotificationStore(state => state)

  useEffect(() => {
    const socket = SocketIOClient(socketClientURL as string, {
      path: socketPath,
    })

    socket.on(socketEvents.onConnect, () => {
      const socketId = socket.id
      socket.emit(socketEvents.onFetchDevices)
      setSocketId(socketId)
      setSocket(socket)
    })
    socket.on(
      socketEvents.onFetchDevices,
      ({ devicesIds }: { devicesIds: string[] }) => {
        setDevicesIds(devicesIds)
      },
    )
    socket.on(
      socketEvents.onNotificationReceived,
      (notification: NotificationProps) => {
        if (onNotificationReceived) {
          onNotificationReceived(notification)
        }
      },
    )
    socket.on(socketEvents.onDisconnect, () => {
      socket.disconnect()
    })

    return () => {
      socket.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    devicesIds,
  }
}
