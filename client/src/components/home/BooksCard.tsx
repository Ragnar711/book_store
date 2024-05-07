import { IBook } from '../../types/book';
import BooksSingleCard from './BooksSingleCard';

const BooksCard = ({ books }: { books: IBook[] }) => {
    return (
        <div className="grid sm: grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
                <BooksSingleCard key={book._id} book={book} />
            ))}
        </div>
    );
};

export default BooksCard;
