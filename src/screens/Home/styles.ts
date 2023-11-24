import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: `#F0F2F5`,
    alignContent: `center`,
    justifyContent: `center`,
  },
  card: {
    flex: 1 / 3,
    backgroundColor: `#fff`,
    borderRadius: 8,
    margin: 25,
    padding: 30,
    elevation: 5,
  },
  panelCard: {
    flex: 0,
    height: 280,
  },
  cardTitle: {
    fontSize: 24,
    fontFamily: `Roboto`,
    fontWeight: `bold`,
    color: `#344767`,
  },
  body: {
    flex: 1,
    flexDirection: `column`,
    padding: 2,
    marginTop: 10,
  },
  deviceItem: {
    flexDirection: `row`,
    marginBottom: 10,
  },
  deviceItemText: {
    fontFamily: `Roboto`,
    fontWeight: `bold`,
    color: `#344767`,
    marginLeft: 2,
    marginTop: 6,
  },
  textInput: {
    height: 40,
    borderColor: `gray`,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    margin: 10,
    backgroundColor: `#fff`,
  },
  send: {
    width: `95%`,
    alignSelf: `center`,
  },
})

export default styles
