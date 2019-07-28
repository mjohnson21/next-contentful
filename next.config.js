const AWS_STAGE = process.env.AWS_STAGE

module.exports = {
  target: "serverless",
  assetPrefix: AWS_STAGE ? "https://s3.amazonaws.com/next-starter-demo" : null
}
