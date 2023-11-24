import { useNotificationStore } from '../store'

export const useDevices = () => {
  const { selectedDevicesIds, setSelectedDevicesIds, devicesIds } =
    useNotificationStore(state => state)

  const toggleSelectDevice = (deviceId: string): void => {
    if (selectedDevicesIds.includes(deviceId)) {
      setSelectedDevicesIds(selectedDevicesIds.filter(id => id !== deviceId))
    } else {
      setSelectedDevicesIds([...selectedDevicesIds, deviceId])
    }
  }
  return {
    toggleSelectDevice,
    selectedDevicesIds,
    devicesIds,
  }
}
