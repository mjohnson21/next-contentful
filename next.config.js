const { AWS_STAGE } = process.env

module.exports = {
  target: 'serverless',
  assetPrefix: AWS_STAGE ? 'https://s3.amazonaws.com/next-starter-demo' : null,
}
