import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { addBook } from '../controllers/addBook';
import { getBooks } from '../controllers/getBooks';
import { getBookById } from '../controllers/getBookById';
import { updateBook } from '../controllers/updateBook';
import { deleteBook } from '../controllers/deleteBook';

const router: Router = Router();

router.post('/', asyncHandler(addBook));
router.get('/', asyncHandler(getBooks));
router.get('/:id', asyncHandler(getBookById));
router.put('/:id', asyncHandler(updateBook));
router.delete('/:id', asyncHandler(deleteBook));

export default router;
