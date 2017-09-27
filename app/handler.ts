import { Handler, Context, Callback } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

var ddb = new DynamoDB({apiVersion: '2012-08-10'});

interface Response {
  statusCode: number;
  body: string;
}

const catHandler: Handler = (event: any, contect: Context, callback: Callback) => {

  if (event.queryStringParameters !== null && event.queryStringParameters !== undefined && event.queryStringParameters.catId) {
    var catId =event.queryStringParameters.catId;
    var params = {
        TableName: 'si-cats',
        Key: {
          'catId': {N: catId }
        },
        ProjectionExpression: 'image, title'
      };
    ddb.getItem(params, function(err, data) {
      if (err) {
        callback(new Error('Database Response Error'), new Response({statusCode: 500, body: JSON.stringify({error: err})}));
      } else {
        callback(undefined, {
          statusCode: 200,
          body: JSON.stringify({
            data
          })
        })
      }
    })
  } else {
    callback(new Error('No ID provided'), new Response({statusCode: 500, body: {}}))
  }


}
export { catHandler }