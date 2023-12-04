const express = require('express')

const router = new express.Router()
const multer  = require('multer')
const Picture = require("../models/pictures");
const AWS = require('aws-sdk');
const logger = require('../utils/logger');


const s3 = new AWS.S3({
    accessKeyId: "AWS_S3_ACCESS_KEY_ID",
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
    region: 'us-east-1'
  })
  
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024, 
    },
  });

//Storing images in S3 and the url links in MongoDB
router.post('/pictures/upload', upload.single('photo'), async (req, res) => {
    try {
    const params = {
        Bucket: process.env.AWS_S3_BUCKET,
        Key: req.file.originalname,
        Body: req.file.buffer,
        ContentType: 'image/jpeg',
      };
    
      s3.upload(params, (err, data) => {
      })
      logger.log({
        message: 'AWS upload success'
      });
    } catch (error) {
        console.error(error);
        logger.log({
            message: 'AWS upload error'
        })
    }
    const pictureData = new Picture({
        pictureName: req.file.originalname,
        user: 'temp',
    })
    try {
        await pictureData.save()
        console.log("success?")
        res.status(201).send({ user })
            } catch (e) {
                logger.log({
                    message: 'MongoDB upload error' 
                })
                res.status(400).send(e)
        }
    })

router.get('/pictures/getphotos', async (req, res) => {
    try {
    const pictures = await Picture.find({})
    console.log(pictures[0])
    res.send(pictures)
            } catch(e) {
                console.log(e)
                logger.log({
                    message: "error retrieving photos"
                }
                )
                res.status(500).send()
            }
})
    

module.exports = router