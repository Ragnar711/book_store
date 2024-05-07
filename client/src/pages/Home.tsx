import { useQuery } from '@tanstack/react-query';
import { getBooks } from '../apis/getBooks';
import Spinner from '../components/Spinner';
import BooksTable from '../components/BooksTable';
import AddBook from '../components/AddBook';

const Home = () => {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['todos'],
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

    return (
        <div className="p-4">
            <div className="flext justify-between items-center">
                <AddBook />
                <BooksTable data={data.data} />
            </div>
        </div>
    );
};

export default Home;
