import _ from 'lodash';
import React,{Component} from 'react';
import {View,Text,FlatList} from 'react-native';
import {connect} from 'react-redux';
import {studentsListData} from '../actions';
import ListItem from './ListItem';

class StudentsList extends Component {
  componentDidMount(){
    this.props.studentsListData();
    //this.createDataSource(nextProps);

  }
  //componentDidUpdate(nextProps){
  //this.createDataSource(nextProps);

//  }
//  createDataSource({studentsArray}){
    //const ds=new ListView.DataSource({
      //rowHasChanged: (r1,r2) => r1 !== r2
    //});
    //this.dataSource=ds.cloneWithRows(nextProps.studentsArray);
  //}
  renderRow({item,index}){
    return <ListItem ogrenci={item} />;
  }
  render(){
    return (
      <View>
        <FlatList
        data={this.props.studentsArray}
        renderItem={this.renderRow}
        keyExtractor={(ogrenci, index) => index.toString()}
        />
      </View>
    );
  }
}
const mapStateToProps =({studenDataResponse})=>{
  const studentsArray=_.map(studenDataResponse,(val,uid)=>{
    return {...val,uid};
  });
  return {studentsArray};
};
export default connect(mapStateToProps,{studentsListData})(StudentsList);
