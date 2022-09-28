import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
      <View style={styles.container0}>
        <View style={styles.container1}>
          <View style={styles.square1} />   
          <View style={styles.square2} />   
          <View style={styles.square3} />
        </View>

        <View style={styles.container2}>
          <View style={styles.square4} />
          <View style={styles.square5}>
          <Text style={styles.text}>FLEXBOX</Text></View>  
          <View style={styles.square6 }/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container0: {
    flex: 1,
    backgroundColor: '#453f3f',
    flexDirection:'row',
      
  },
  container1: {
    flex: 1,
    flexWrap:'wrap',  
    flexDirection:'row',
    backgroundColor: '#453f3f',
    
  },

  container2: {
    flex: 1,
    flexWrap:'wrap',
    flexDirection:'row',
    backgroundColor: '#453f3f',
    
  },

  square1: {
    width: 200,
    height: 200,
    margin: 2,
    backgroundColor: '#a900e6',  
  },

  square2: {
    width: 200,
    height: 200,
    margin: 2,
    backgroundColor: '#459dff',  
  },

  square3: {
    width: 200,
    height: 450,
    margin: 2,
    backgroundColor: '#7e00ff',  
  },

  square4: {
    width: 200,
    height: 200,
    margin: 2,
    backgroundColor: '#97b6ff',  
  },
  
  square5: {
    width: 200,
    height: 450,
    margin: 2,
    backgroundColor: '#459dff',  
    justifyContent:'center',
  },

  square6: {
    width: 200,
    height: 200,
    margin: 2,
    backgroundColor: '#8200c6',  
    textAlign:'center',
  },
  
  text: {
    transform: [{ rotate: '-90deg'}],
    marginVertical:170,
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    letterSpacing:10,
  }
});