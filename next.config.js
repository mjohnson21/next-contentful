const AWS_STAGE = process.env.AWS_STAGE
console.log('MJ: AWS_STAGE', AWS_STAGE)

module.exports = {
  target: "serverless",
  // assetPrefix: "https://s3.amazonaws.com/next-starter-demo"
}