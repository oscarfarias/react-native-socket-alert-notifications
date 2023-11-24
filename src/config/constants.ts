export const socketEvents = {
  onConnection: `connection`,
  onConnect: `connect`,
  onFetchDevices: `fetch-devices`,
  onSendNotification: `send-notification`,
  onNotificationReceived: `notification-received`,
  onDisconnect: `disconnect`,
  onDisconnecting: `disconnecting`,
}

export const socketClientURL =
  process.env.SOCKET_CLIENT || `http://192.168.1.111:3000`

export const socketPath = process.env.SOCKET_CLIENT_PATH || `/api/socketio`
