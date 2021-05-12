// 'Hello World' nodejs6.10 runtime AWS Lambda function
exports.handler = (event, context, callback) => {
    console.log('Hello,Hello,Upendra, logs!');
    callback(null, 'great success');
}
