import { StyleSheet, View } from 'react-native'

const App = () => {
  return (
    <View style={estilos.container}>
      <View style={estilos.subcontainer1}>
        <View style={{ width: 50, height: 50, backgroundColor: 'red' }}></View>
        <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}></View>
        <View style={{ width: 50, height: 50, backgroundColor: 'green' }}></View>
      </View>

      <View style={estilos.subcontainer2}>
        <View style={{ width: 50, height: 50, backgroundColor: 'brown' }}></View>
        <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }}></View>
        <View style={{ width: 50, height: 50, backgroundColor: 'magenta' }}></View>
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  subcontainer1: {
    flex: 1,
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'gray'

  },

  subcontainer2: {
    flex: 1,
    height: '50%',
    backgroundColor: 'orange',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end'

}
})

// Exportação

export default App;