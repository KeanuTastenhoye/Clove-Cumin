const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.myFunction = functions.firestore
  .document('orders/{docId}')
  .onCreate((snap, context) => { const newValue = snap.data(); 
                                 const recipient = newValue.userMail;
                                 const totPrice = newValue.totalPrice;
                                 email(recipient, totPrice);});

function email(recipient, totPrice) {
  admin.firestore().collection('mail').add({
    to: recipient,
    message: {
      subject: 'Total Price: ' + totPrice,
      html: 'This is an <code>HTML</code> email body.',
    },
  })
}