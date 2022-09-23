const { v4 } = require('uuid')
const AWS = require('aws-sdk')

const add = async (event) => {

  const dynamoDB = new AWS.DynamoDB.DocumentClient();

  const { todo } = JSON.parse(event.body);
  const createdAt = new Date().toDateString()
  const id = v4();

  const newTodo = {
    id,
    todo,
    createdAt,
    completed: false
  };

  await dynamoDB.put({
    TableName: 'TodoTable',
    Item: newTodo
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newTodo)
  };
};

module.exports = {
  handler: add
}