import { Router } from 'express';
import { celebrate } from 'celebrate';
import { authenticate } from '../middleware/authenticate.js';
import { updateUserAvatar } from '../controllers/userController.js';
import { avatarUpload } from '../middleware/multer.js';

const router = Router();

router.patch(
  '/users/me/avatar',
  authenticate,
  // form
  // input name="user_avatar"
  avatarUpload.single('user_avatar'),
  updateUserAvatar,
);

export default router;