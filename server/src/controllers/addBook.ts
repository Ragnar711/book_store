import { Request, Response } from 'express';
import { Book } from '../models/bookModel';
import { BadRequestError } from '../utils/errors';

export const addBook = async (req: Request, res: Response): Promise<void> => {
    const { title, author, publishYear } = req.body;

    const existingBook = await Book.findOne({ title });

    if (existingBook) throw new BadRequestError(`Book ${title} already exists`);

    await Book.create({ title, author, publishYear });

    res.status(201).json('Book created successfully');
};
