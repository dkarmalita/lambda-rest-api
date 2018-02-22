# Example of Lambda REST API

## How to use

```sh
npm install -g serverless
git clone https://github.com/dkarmalita/lambda-rest-api.git
```

In the root directory, create neq file named `variables.env` and fill it with your mongo db and aws credentials. (Section **Creating AWS Access Keys** bellow contains guidelines how to obtain the AWS credentials.)

```
DB=<MONGO DB CREATE PARAMS>
export AWS_ACCESS_KEY_ID=<AWS EXAMPLE KEY ID>
export AWS_SECRET_ACCESS_KEY=<AWS EXAMPLE KEY SECRET>
```

## MongoDB providers

I'm using (and can reccomend) two:

* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* [mLab](https://mlab.com/welcome/)

## Avaliable scripts

`npm start` - starts the api locally

`npm run deploy` - deploys the lambda project to your AWS.


## Useful links

* [AWS - Credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
* [Serverless quickstart](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)