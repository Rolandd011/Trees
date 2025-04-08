import express from "express";
import * as treesControls from '../controllers.js'

const router = express.Router()

router.get('/trees',treesControls.getAlltrees)
router.get('/trees/id',treesControls.getAlltreesById)
router.post('/trees',treesControls.createTrees)
router.put('/trees/id',treesControls.updateTrees)
router.delete('/trees/id',treesControls.deleteTrees)

export default router 