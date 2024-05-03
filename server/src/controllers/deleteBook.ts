import { Request, Response } from 'express';
import { Book } from '../models/bookModel';
import { NotFoundError } from '../utils/errors';

export const deleteBook = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.params;

    const book = await Book.findByIdAndDelete(id);

    if (!book) throw new NotFoundError(`Book with id ${id} not found`);

    res.status(200).send('book deleted successfully');
};
