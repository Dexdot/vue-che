import * as firebase from 'firebase';

export default context => {
  firebase.initializeApp({
    apiKey: 'AIzaSyC9G-PdjwfQA-8H62xv6c91MUme4CWRQDQ',
    authDomain: 'chegroup-vue.firebaseapp.com',
    databaseURL: 'https://chegroup-vue.firebaseio.com',
    projectId: 'chegroup-vue',
    storageBucket: 'chegroup-vue.appspot.com',
    messagingSenderId: '834386909196'
  });

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      context.$store.dispatch('autoLoginUser', user);
    }
  });
};
