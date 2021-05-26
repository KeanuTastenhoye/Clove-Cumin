const functions = require('firebase-functions');
const admin = require('firebase-admin');

/*
const http = require('http');
const PAYCONIQ_PROD_HOST = 'https://api.payconiq.com';
const PAYCONIQ_API_BASE = '/v3';
*/

admin.initializeApp();

exports.myFunction = functions.region('europe-west1').firestore
  .document('orders/{docId}')
  .onCreate((snap, context) => { 
      const newValue = snap.data(); 
      email(newValue);
  });

/*
      const req = http.request({
        host: PAYCONIQ_PROD_HOST,
        path: PAYCONIQ_API_BASE+ '/payments',
        headers: {
          Authorization: 'Bearer f749c661-ab9f-44e2-bedc-3d44d20f732c',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
      res => {
        console.log(res.statusCode);
        res.on('data', data => {
          console.log(JSON.stringify(data));
        })
      }
      )
      req.write(JSON.stringify({
        amount: newValue.totalPriceInclShipping,
        currency: 'EUR',
        //callbackUrl: 'https://europe-west1-clove-and-cumin.cloudfunctions.net/payconiqcallback',
        description: 'Mededeling',
        reference: snap.id
      }))
      req.end();
      return null});

exports.payconiqcallback = functions.region('europe-west1').https.onRequest((req, res) => {
  console.log(JSON.stringify(req));
  res.send('');
});
*/

function email(newValue) {
  admin.firestore().collection('mail').add({
    to: newValue.userMail,
    message: {
      subject: 'Bedankt van je bestelling, we gaan er bijna mee beginnen.',
      html: '<p>Bedankt voor je vertrouwen! Voor dat we beginnen met je bestelling.</p>'
    },
  })
}