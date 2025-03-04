import express from 'express';
import { uploadImage,downloadimage } from '../controllers/image-controller.js';
const router =express.Router();
import upload from '../middleware/upload.js';

router.post('/upload',upload.single('file'),uploadImage)
router.get('/file/:fileid',downloadimage)
export default router;      