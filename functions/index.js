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
      subject: 'Bedankt van je bestelling, we gaan er bijna mee beginnen.',
      html: '<p>Bedankt voor je vertrouwen! Voor dat we beginnen met je bestelling, vragen we je om de betaling uit te voeren. Aangezien wij een SBP zijn en geen ondernemings nummer hebben, zijn we verplicht dit via een overschirjving te laten gebeuren. De overschrijving mag uitgevoerd worden met volgende gegevens.</p>'+
            '<p>Rekening nummer: BE06 0018 9899 0622</p>' +
            '<p>Bedrag: ' + newValue.totalPrice + '</p>' +
            '<p>Mededeling: ' + newValue.userName + ' - ' + newValue.orderNr + '</p>' +
            '<table>'+
              '<thead>'+
                '<tr>'+
                  '<th></th>'+
                  '<th>Naam</th>'+
                  '<th>Vorm</th>'+
                  '<th>Hoeveelheid</th>'+
                  '<th>Aantal</th>'+
                  '<th>Prijs</th>'+
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
            '<p>Totaal Prijs: <strong>€' + newValue.totalPrice + '</strong></p>',
    },
  })
}