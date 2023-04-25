import express from "express";
import {  getUser,updateUser,deleteUser,followUser, UnFollowUser,getAllUsers} from "../Controllers/UserController.js";
import authMiddleWare from "../MiddleWare/authmiddleware.js";
const router = express.Router();

router.get('/', getAllUsers)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', authMiddleWare,deleteUser)
router.put('/:id/follow', authMiddleWare,followUser)
router.put('/:id/unfollow',authMiddleWare,UnFollowUser) 
export default router;
