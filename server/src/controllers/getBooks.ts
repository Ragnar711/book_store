import { Request, Response } from 'express';
import { Book } from '../models/bookModel';

export const getBooks = async (req: Request, res: Response): Promise<void> => {
    const books = await Book.find();
    res.status(200).json({ count: books.length, data: books });
};
