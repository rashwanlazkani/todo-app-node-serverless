const { v4 } = require('uuid')
const AWS = require('aws-sdk')

const remove = async (event) => {

  const dynamoDB = new AWS.DynamoDB.DocumentClient();

  const { id } = event.pathParameters;

  await dynamoDB.delete({
    TableName: 'TodoTable',
    Key: { id }
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
        message: 'Todo deleted'
    })
  };
};

module.exports = {
  handler: remove
}