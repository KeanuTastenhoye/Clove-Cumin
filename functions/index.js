const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.myFunction = functions.firestore
  .document('orders/{docId}')
  .onCreate((snap, context) => { const newValue = snap.data(); 
                                 email(newValue);});

function email(newValue) {
  admin.firestore().collection('mail').add({
    to: newValue.userMail,
    message: {
      subject: 'Thank you for your order! It is almost done now.',
      html: '<p>Thank you for trusting us! Before we begin working on your order we ask you to fullfill your purchase on thz following account.</p>'+
            '<table>'+
              '<thead>'+
                '<tr>'+
                  '<th></th>'+
                  '<th>Name</th>'+
                  '<th>Format</th>'+
                  '<th>Amount</th>'+
                  '<th>Quanity</th>'+
                  '<th>Price</th>'+
                '</tr>'+
              '</thead>'+
              '<tbody>'+
                '<tr>'+
                  '<td><img style="width:75px" src='+ newValue.productImage+'></td>'+
                  '<td>'+ newValue.productName +'</td>'+
                  '<td>'+ newValue.productCrush +'</td>'+
                  '<td>'+ newValue.productAmount +'</td>'+
                  '<td>'+ newValue.productQuantity +'</td>'+
                  '<td>'+ newValue.productPrice +'</td>'+
                '</tr>'+
              '</tbody>'+
            '</table>'+
            '<p>Total Price: <strong>€' + newValue.totalPrice + '</strong></p>',
    },
  })
}