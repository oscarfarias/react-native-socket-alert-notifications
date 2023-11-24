import { Text, View, ScrollView } from 'react-native'
import styles from './styles'

import CheckBox from '@react-native-community/checkbox'
import { useDevices } from './hooks/useDevices'

const Devices = (): JSX.Element => {
  const { toggleSelectDevice, selectedDevicesIds, devicesIds } = useDevices()
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Devices</Text>
      <View style={styles.body}>
        <ScrollView>
          {devicesIds.map(deviceId => (
            <View style={styles.deviceItem} key={deviceId}>
              <CheckBox
                value={selectedDevicesIds.includes(deviceId)}
                onChange={() => toggleSelectDevice(deviceId)}
              />
              <Text style={styles.deviceItemText}>{deviceId}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}
export default Devices
