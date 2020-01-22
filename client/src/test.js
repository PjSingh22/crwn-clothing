import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('PqhiB36GOxi9MPaQJQ55').collection('cartItems').doc('THIh0nBxFPk1WqZcYtdw');
firestore.doc('/users/PqhiB36GOxi9MPaQJQ55/cartItems/THIh0nBxFPk1WqZcYtdw');
firestore.collection('/users/PqhiB36GOxi9MPaQJQ55/cartItems')