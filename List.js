import React, {useState} from 'react';
import {Text, View, TextInput, Button } from 'react-native';
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
    <View style={[
          { elevation: 10 },
          { flex : 5, alignSelf: "center",backgroundColor:"#fffffa",borderRadius: 4, shadowColor: "black", margin: 10, padding: 10, alignItems: 'center', width:'100%', borderRadius: 20},
          { shadowOffset: {width: 0, height: 10 }, shadowOpacity:0.1, shadowRadius:10,},
        ]}>
    <View style={{flex:4, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30,
    fontWeight: "bold"}}>To Do List </Text>
      <Text style={{fontSize:20}}>{(!state)?"error":state.length}개</Text>
    </View>
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      <TextInput placeholder={"내용을 입력하세요"} style={{height: 40, width : 200, borderColor: 'gray', borderWidth: 1, borderWidth: 0, borderBottomWidth:1, borderRadius: 0, padding:10, margin:20}} value={text} onChangeText={text => {setText(text)}}></TextInput >
      <Button type="outline" title={"작성"} onPress={(e)=>{text.length===0?setText(""):add(text);setText("");}}/>
    </View>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}/>
    </View>
    <View style={{flex: 10,padding: 20,}}>
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