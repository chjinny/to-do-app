import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'
import { connect } from 'react-redux';
import { actionCreator } from './Store';

export default connect(mapStateToProps, mapDispatchToProps)(Element)

function mapStateToProps(state){
  return {
    state:state
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    del: ()=>dispatch(actionCreator.del(ownProps.id))
  }
}

function Element({content, id, del}) {
    return (
        <>
        <View style={[
          {alignSelf: "center",backgroundColor:"#fffffa",borderRadius: 4, shadowColor: "black", margin: 10, padding: 10, flexDirection:'row', alignItems: 'center',  borderRadius: 10},
          { shadowOffset: {width: 0, height: 5 }, shadowOpacity:0.1, shadowRadius:10,},
        ]}>
        <Text style={{flex:10}}>{content}</Text>
        <Button title={"삭제"} style={{alignItems:'flex-end', flex:10}} onPress={(e)=>del()}/>
        </View>
        </>
    );
}

