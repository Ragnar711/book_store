import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { addBook } from '../controllers/addBook';
import { getBooks } from '../controllers/getBooks';
import { getBookById } from '../controllers/getBookById';
import { updateBook } from '../controllers/updateBook';
import { deleteBook } from '../controllers/deleteBook';

const router: Router = Router();

router.post('/books', asyncHandler(addBook));
router.get('/books', asyncHandler(getBooks));
router.get('/books/:id', asyncHandler(getBookById));
router.put('/books/:id', asyncHandler(updateBook));
router.delete('/books/:id', asyncHandler(deleteBook));

export default router;
