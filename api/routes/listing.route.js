import express from 'express'
import { createListing,getListings,deleteListing,updateListing,getListing } from '../controller/listing.controller.js';
import { verifyToken } from '../utils/veriftToken.js';

const router = express.Router();

router.post('/create',verifyToken,createListing)
router.delete('/delete/:id',verifyToken,deleteListing)
router.post('/update/:id',verifyToken,updateListing)
router.get('/get/:id', getListing)
router.get('/get',getListings);
r