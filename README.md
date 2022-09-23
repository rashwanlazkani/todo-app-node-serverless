# todo-app-node-serverless
TODO application created in NodeJS and with serverless architecture

In this project I have created a TODO application in NodeJS and the deployment is used with the [serverless framework](https://www.serverless.com/). The resources are created in AWS and I have used [AWS Lambda](https://aws.amazon.com/lambda/) and [Amazon DynamoDB](https://aws.amazon.com/dynamodb/).


## To get started follow the guide below

### Prerequisites:

1. AWS account
2. AWS CLI installed - [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html) is a guide of how to give your AWS CLI access to your AWS account
3. Serverless framework installed - guide [here](https://www.serverless.com/framework/docs/getting-started)

### Initialize project
Open terminal and type:

```
serverless
```

You will now be prompted with some options, choose:

```
AWS - Node.js - HTTP API 
```

Add a name to your project or click enter to select the suggested name.

For the next question, I have chosen `n`:

```
Do you want to login/register to Serverless Dashboard? n
```

For the next question, I have chosen `n`:

```
Do you want to deploy now? n
```

Open the newly created project in an editor.

### serverless.yml file
A service is configured via a serverless.yml file where you define your functions, the events that trigger them, and the AWS resources to deploy.
For more information about `yaml` and serverless see [Serverless Framework Documentation](https://www.serverless.com/framework/docs).

### Serverless commands to use
- serverless deploy - Deploy changes
- serverless deploy -f <function> - Deploy a specific function
- serverless info - View deployed endpoints and resources
- serverless invoke - Invoke deployed functions
- serverless --help - Discover more commands

> A tip: you can use the command `sls` instead of typing `serverless`. So for example `sls deploy`

### Project files
In the project there is the following files:
- src/add.js - code to add an item
- src/fetch.js - code to fetch an item
- src/fetchAll.js - code to fetch all items
- src/remove.js - code to remove an item
- src/update.js - code to update an item

There is also the `serverless.yml` which will deploy all your resources to AWS. This file will currently deploy the following:
 - Five Lambda functions add, fetch, fetchAll, remove and update
 - One DynamoDB table called TodoTable
 - IAM role to allow the Lambdas to access the DynamoDB table
 
**Note**
These resources will be deployed in region eu-north-1 becauseof the property:
``` yaml
region: eu-north-1
```

 ### Run the project
 To run the project simple type `sls deploy` in the projects root. When the deploy is completed you will see an output of the endpoints for your Lambdas, use those to access your Lambdas.
 
 Example:
 ```
 endpoints:
  POST - https://---.execute-api.eu-north-1.amazonaws.com/
  GET - https://---.execute-api.eu-north-1.amazonaws.com/todos
  GET - https://---.execute-api.eu-north-1.amazonaws.com/todo/{id}
  PUT - https://---.execute-api.eu-north-1.amazonaws.com/todo/{id}
  DELETE - https://---.execute-api.eu-north-1.amazonaws.com/todo/{id}
  
functions:
  add: todo-app-node-serverless-dev-add (15 MB)
  fetchAll: todo-app-node-serverless-dev-fetchAll (15 MB)
  fetch: todo-app-node-serverless-dev-fetch (15 MB)
  update: todo-app-node-serverless-dev-update (15 MB)
  remove: todo-app-node-serverless-dev-remove (15 MB)
 ```
