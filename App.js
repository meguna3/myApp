//import文
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';

  export default function App() {
    //使う変数
    const [numlist,setNumlist] = useState([]);
    const [x,setX] = useState(0);
    let calcNum = 0;
    console.log(numlist);
    const [calcProcess,setcalcProcess] = useState("");
    //使う関数

    const calculation = (input) => {
      setcalcProcess(calcProcess + String(input));
      
    }

    const onNum = (input) => {
      calculation(input);
      setX(x * 10 + input);
    }
   

    const addValue = (input) => {
      calculation(input);
      if(x !== 0){
        setNumlist([...numlist,x]);
        setX(0);
      }
    };

    const allClearValue = () => {
      setcalcProcess("");
      setNumlist([])
      setX(0);
      console.log(numlist);
    };

    const clearValue = () => {
      setcalcProcess(calcProcess.slice(0,-1));
      let calcValue = x/10;
      setX (Math.floor(calcValue));
    };

    const resultNum = () => {
      //数字ならtrue
      //数字出ないならfalseにする
      console.log("反応してるよー")
      if( calcProcess != ""){
        console.log(calcProcess)
        if(!isNaN(calcProcess.slice(-1))){
          console.log("計算してるよー");
          //2023年５月３１日バグ残してます☝//
          for(const partNum of numlist){
            calcNum = calcNum + partNum;
            console.log(calcNum);
         }
          calcNum = calcNum + x;
          setX(calcNum);
          setNumlist([]);
          setcalcProcess(String(calcNum));
       }
     }
   }
    
  return (
    <View style={styles.container}>

      <View style={styles.resultbox}>
        <Text style={styles.text}>
          {calcProcess}
        </Text>

      </View>

      <View style={styles.box}>
        <TouchableOpacity style={styles.numbox} onPress={() => onNum(1)}>
            <Text style={styles.text}>
              1
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numbox} onPress={() => onNum(2)}>
            <Text style={styles.text}>
              2
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numbox} onPress={() => onNum(3)}>
            <Text style={styles.text}>
              3
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numbox} onPress={() => onNum(4)}>
            <Text style={styles.text}>
              4
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numbox} onPress={() => onNum(5)}>
            <Text style={styles.text}>
              5
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numbox} onPress={() => addValue("+")}>
            <Text style={styles.text}>
              +
            </Text>
        </TouchableOpacity>



      </View>

      <View style={styles.box}>

      <TouchableOpacity style={styles.numbox}onPress={() => onNum(6)}>
            <Text style={styles.text}>
              6
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numbox}onPress={() => onNum(7)}>
            <Text style={styles.text}>
              7
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numbox}onPress={() => onNum(8)}>
            <Text style={styles.text}>
              8
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numbox}onPress={() => onNum(9)}>
            <Text style={styles.text}>
              9
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numbox}onPress={() => onNum(0)}>
            <Text style={styles.text}>
              0
            </Text>
        </TouchableOpacity>

          <TouchableOpacity style={styles.numbox} onPress={resultNum}>
            <Text style={styles.text}>
                =
              </Text>
          </TouchableOpacity>

      </View>
      
      <View style={styles.box}>
          <TouchableOpacity style={styles.numbox} onPress={allClearValue}>
            <Text style={styles.text}>
              AC
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numbox}onPress={clearValue}>
            <Text style={styles.text}>
              C
            </Text>
        </TouchableOpacity>
          </View>

    
      


    {/* containerのビューだよ */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    height: 60,
    width: '80%',
    backgroundColor: '#fff',
    borderColor: 'white',
    borderWidth: 1,
    flexDirection: 'row',
  },

  resultbox:{
    alignItems: 'center',
    height: 150,
    width: '90%',
    backgroundColor: '#00bfff',
    borderColor: 'white',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 20,
  },
  numbox:{
    flex: 1,
    width:20,
    borderRadius: 30,
    backgroundColor: 'steelblue',
    padding: 16,
    justifyContent: 'space-between',
    flexDirection:`column`
  },
  moziBox: {
    flex: 1,
    backgroundColor: 'steelblue',
    padding: 16,
    justifyContent: 'space-between',
  },

  gazoBox: {
    width: 100,
    backgroundColor: 'powderblue',
  },

  text: {
    textAlign: "center",
    fontSize: 24,
    color:'white'

  },
  
  subText: {
    fontSize: 12,
    color: 'red',
  },
});