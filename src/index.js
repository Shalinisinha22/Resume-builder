import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './redux/reducers/rootReducer.js';
// D:\React tutorial\resume-builder-project\src\redux\reducers\rootReducer.js
import { Provider } from 'react-redux';
import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { reduxFirestore, getFirestore } from 'redux-firestore';
import {ReactReduxFirebaseProvider,getFirebase} from 'react-redux-firebase';
import {createFirestoreInstance} from 'redux-firestore';

const root = ReactDOM.createRoot(document.getElementById('root'));


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHx6AFrk-c-iEwnXPaTE7yUNtO76jeXP4",
  authDomain: "resume-builder-project-d25f8.firebaseapp.com",
  projectId: "resume-builder-project-d25f8",
  storageBucket: "resume-builder-project-d25f8.appspot.com",
  messagingSenderId: "943783270301",
  appId: "1:943783270301:web:fde6420508fb40c49c8174"
};
firebase.initializeApp(firebaseConfig)
firebase.firestore()


const reduxStore = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(firebase)))
root.render(
 <>
  <Provider store={reduxStore}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
 </>
  
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
