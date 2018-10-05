const AWS = require('aws-sdk');
const uuid = require('uuid/v1');

const requiresLogin = require('../middlewares/requiresLogin')
const keys = require('../config/keys');

const s3 = new AWS.S3({
	accessKeyId: keys.AWS_ACCESS_KEY_ID,
	secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
	region: 'ap-south-1'
})

module.exports = app => {
	app.get('/api/upload', requiresLogin, (req, res) => {

		const key = `${req.user.id}/${uuid()}.jpeg`;

		s3.getSignedUrl('putObject', {
			Bucket: 'two-doo-reactapp',
			Key: key,
			ContentType: 'image/jpeg' 
		}, (err, url) =>{
			if(err){
				console.log(err)
			}
			res.send({key, url})
		})
	});
}