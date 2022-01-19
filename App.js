import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  TouchableOpacity
} from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome!</Text>
      <TextInput 
        style={styles.input}
        placeholder='Username'
      />
      <TextInput 
        style={styles.input}
        placeholder='Password'
        secureTextEntry
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.userBtn}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userBtn}>
          <Text style={styles.btnText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 30,
    alignItems: 'center',
    margin: 10,
    color: '#fff'
  },
  input: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "90%"
  },
  userBtn: {
    backgroundColor: "#FFD700",
    padding: 15,
    width: "45%"
  },
  btnText:{
    fontSize: 18,
    textAlign: 'center'
  }
});
