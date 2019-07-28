# Serverless

Out of the box, Next is easily deployed and hosted on Zeit. No sense in re-documenting this. Our requirement was to get things on AWS. 

A little bit of research sent us to [next-serverless-plugin](https://github.com/danielcondemarin/serverless-nextjs-plugin), which does a few things for us. 

1. It creates a wrapper around the Next lambda for SSR pages so that they are compatible with AWS lambas. 
2. Gives us access to the API Gateway for nicer routes via `serverless.yml`.


```
yarn add -D serverless serverless-offline serverless-nexjs-plugin

// serverless.yml
service: next-starter

provider:
  name: aws
  runtime: nodejs8.10
  memorySize: 512

plugins:
  - serverless-nextjs-plugin

package:
  exclude:
    - ./**

custom:
  serverless-nextjs: {}    
```

NOTE: the `serverless-nextjs: {}` piece is to avoid an `undefined` error when running `sls` or `serverless` commands. I found this tip in [this issue in the repo](https://github.com/danielcondemarin/serverless-nextjs-plugin/issues/101).

Next, we need to configure the Serverless CLI with your credentials. If you're new to serverless, there are a few steps here. From the [Serverless docs](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

If you already have a profile set up (like I did for work), you can create the credentials with a second profile.

```
serverless config credentials --provider aws --key xxxxxxxxxxxxxxx --secret xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx --profile profile-name
```

Now we can run `serverless deploy` and get our project hosted on AWS. The CLI will show you where your application URL is. However, we're getting some `403` errors on application files, so we'll need a place to stash our files. 


## Static Assets

Next uses a directory called `/static` for placing assets, so we'll create that here. 

For Serverless, we'll need to get our config to start deploying things in that folder to an S3 bucket. Which is where things got confusing. 

First, and I think we learned this the hard way the first time (and now the second), is that you should not manually create the S3 bucket, but instead let Serverless do all the heavy lifting. If you don't, you'll get `access denied` errors. 

If you do that wrong, you can just delete that bucket, run `serverless remove`, make your changes and then run `serverless deploy`.


```
// next.config.js
module.exports = {
  target: "serverless",
  assetPrefix: "https://s3.amazonaws.com/next-starter"
}
```

At this point we also should add `.serverless` to our `.gitignore`.

NOTE: I've yet to figure out how to get to the bucket via the AWS console. 
