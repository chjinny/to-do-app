import React from 'react';
import {Text, Button} from 'react-native'
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
        <Text>{content}</Text>
        <Button title={"삭제"} style={{alignItems:'flex-end'}} onPress={(e)=>del()}/>
        </>
    );
}
