import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import StudentsList from './components/StudentsList';
import StudentCreate from './components/StudentCreate';
import StudentUpdate from './components/StudentUpdate';

const RouterComponent = () =>{
  return(
  <Router sceneStyle={{marginTop:60}}>
  <Scene key="kimlik">
      <Scene key="loginScreen" component={LoginForm} title="Giris Ekrani"/>
       </Scene>
  <Scene key="main">
    <Scene
  onRight={()=>Actions.studentCreate()}
  rightTitle="Yeni"
  key='studentstList'
  component={StudentsList}
  title="Öğrenci Liste"
   />
   <Scene
   key="studentCreate"
   component={StudentCreate}
   title="Öğrenci Kaydet"
   />
   <Scene
   key="studentUpdate"
   component={StudentUpdate}
   title="Öğrenci Güncelle"
   />

  </Scene>


    </Router>
  );
};
 export default RouterComponent;
