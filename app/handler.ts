import { Handler, Context, Callback } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

var ddb = new DynamoDB({apiVersion: '2012-08-10'});
var docClient = new DynamoDB.DocumentClient({region: 'us-east-2'});


const catHandler: Handler = (event: any, contect: Context, callback: Callback) => {
  if (event.catId || event.pathParameters !== null && event.pathParameters !== undefined && event.pathParameters.catId) {
    var catId = event.catId || event.pathParameters.catId;
    console.log('catId: ' + catId);
    var params = {
        TableName: 'si-cats',
        Key: {
          'catId': +catId 
        }
        , ProjectionExpression: 'catId, title, image'
      };
      docClient.get(params, function(err, data) {
      if (err) {
        console.log('Database Response Error: ' + JSON.stringify(err));
        callback(new Error('Database Response Error'), {statusCode: 500, body: JSON.stringify({error: err})});
      } else {
        callback(undefined, {
          statusCode: 200,
          body: JSON.stringify(
            data.Item
          )
        })
      }
    })
  } else {
    console.log('No ID Provided in event: ' + JSON.stringify(event));
    callback(new Error('No ID provided'), {statusCode: 500, body: '' + JSON.stringify(event)});
  }


}
export { catHandler }