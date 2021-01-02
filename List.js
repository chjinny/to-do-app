import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {connect} from 'react-redux'
import { actionCreator } from './Store';
import Element from './Element';

export default connect(mapStateToProps, mapDispatchToProps)(List)

function mapStateToProps(state){
  return {
    state:state
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    add: content=>dispatch(actionCreator.add(content))
  }
}

function List({state, add}) {
  const [text, setText] = useState("")
  return (
    <>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}/>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>To Do List ({(!state)?"error":state.length}개)</Text>
    </View>
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      <TextInput style={{height: 40, width : 100, borderColor: 'gray', borderWidth: 1}} value={text} onChangeText={text => {setText(text)}}></TextInput >
      <Button title={"작성"} onPress={(e)=>{text.length===0?setText(""):add(text);setText("");}}/>
    </View>
    <View style={{flex: 10,padding: 50 }}>
      {
        state.map(function(obj){
          return<View key={obj.id} style={{flexDirection:'row', alignItems: 'center',}}>
            <Element {...obj} key={obj.id}></Element>
          </View>
        })
      }
    </View>
    </>
  );
}