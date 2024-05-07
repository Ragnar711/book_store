import { useQuery } from '@tanstack/react-query';
import { getBooks } from '../apis/getBooks';
import Spinner from '../components/Spinner';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import AddBook from '../components/AddBook';
import { useState } from 'react';
import { IBook } from '../types/book';

const Home = () => {
    const [showType, setShowType] = useState('table');

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['books'],
        queryFn: getBooks,
    });

    if (isPending) {
        return <Spinner />;
    }

    if (isError) {
        return <span>Error: {error.message}</span>;
    }

    if (data.count === 0) {
        return (
            <div className="p-4">
                <AddBook />
            </div>
        );
    }

    const books: IBook[] = data.data;

    return (
        <div className="p-4">
            <div className="flex justify-center items-center gap-x-4">
                <button
                    className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
                    onClick={() => setShowType('table')}
                >
                    Table
                </button>
                <button
                    className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
                    onClick={() => setShowType('card')}
                >
                    Card
                </button>
            </div>
            <div className="flext justify-between items-center">
                <AddBook />
                {showType === 'table' ? (
                    <BooksTable books={books} />
                ) : (
                    <BooksCard books={books} />
                )}
            </div>
        </div>
    );
};

export default Home;
