import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const dec = () =>
    setCount(prevCount => {
      if (prevCount === 0) {
        return 0;
      }
      return prevCount - 1;
    });
  const inc = () => setCount(prevCount => prevCount + 1);
  const clear = () => setCount(0);
  return (
    <>
      <View style={style.page}>
        <View style={style.headerContainer}>
          <Text style={style.textValue}>{count}</Text>
        </View>
        <View style={style.buttons}>
          <TouchableOpacity style={style.decrement} onPress={dec}>
            <Text style={style.textButton}> - </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.increment} onPress={inc}>
            <Text style={style.textButton}> + </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={style.clear}>
          <Text style={style.textClear} onPress={clear}>
            Zerar Contador
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const style = StyleSheet.create({
  page: {
    flex: 1,
  },
  headerContainer: {
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    boderColor: '#000',
  },
  textValue: {
    fontSize: 100,
    color: 'green',
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginLeft: '15%',
    marginTop: 20,
  },
  decrement: {
    backgroundColor: 'red',
    borderRadius: 5,
  },
  increment: {
    backgroundColor: 'green',
    borderRadius: 5,
  },
  textButton: {
    textAlign: 'center',
    padding: 20,
    fontSize: 25,
    fontWeight: '900',
    color: 'white',
  },
  clear: {
    width: '90%',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'gray',
    alignItems: 'center',
    position: 'absolute',
    marginLeft: '5%',
    bottom: 1,
  },
  textClear: {
    fontSize: 20,
    color: 'white',
  },
});
export default App;
