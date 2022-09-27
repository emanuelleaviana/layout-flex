import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container0}>
        <View style={styles.container1}>
          <View style={styles.box1} />   
          <View style={styles.box2} />   
          <View style={styles.box3} />
        </View>

        <View style={styles.container2}>
          <View style={styles.box4} />
          <View style={styles.box5}>
          <Text style={styles.text}>FLEXBOX</Text></View>  
          <View style={styles.box6 } />
        </View>

      </View>
    </ScrollView>
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
    flexDirection:'column',
    backgroundColor: '#453f3f',
    
  },

  container2: {
    flex: 1,
    flexWrap:'wrap',
    flexDirection:'column',
    backgroundColor: '#453f3f',
    
  },

  box1: {
    width: 200,
    height: 200,
    margin: 2,
    marginTop:40,
    backgroundColor: '#a900e6',  
  },

  box2: {
    width: 200,
    height: 200,
    margin: 2,
    backgroundColor: '#459dff',  
  },

  box3: {
    width: 200,
    height: 500,
    margin: 2,
    backgroundColor: '#7e00ff',  
  },

  box4: {
    marginTop:40,
    width: 200,
    height: 200,
    margin: 2,
    backgroundColor: '#97b6ff',  
  },
  
  box5: {
    width: 200,
    height: 500,
    margin: 2,
    backgroundColor: '#459dff',  
    justifyContent:'center',
  },

  box6: {
    width: 200,
    height: 200,
    margin: 2,
    backgroundColor: '#8200c6',  
    textAlign:'center',
  },
  
  text: {
    transform: [{ rotate: '-90deg'}],
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    letterSpacing:10,
  }
});