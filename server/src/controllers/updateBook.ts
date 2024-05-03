import { Request, Response } from 'express';
import { Book } from '../models/bookModel';
import { NotFoundError } from '../utils/errors';

export const updateBook = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.params;
    const { title, author, publishYear } = req.body;

    const book = await Book.findByIdAndUpdate(id, {
        title,
        author,
        publishYear,
    });

    if (!book) throw new NotFoundError(`Book with id ${id} not found`);

    res.status(200).send('book updated successfully');
};
