import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { getBook } from '../apis/getBook';

const ShowBook = () => {
    const { id } = useParams();

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['book', id],
        queryFn: () => getBook(id),
    });

    if (isPending) {
        return <Spinner />;
    }

    if (isError) {
        return <span>Error: {error.message}</span>;
    }

    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Show Book</h1>
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">Id</span>
                    <span>{data!._id}</span>
                </div>
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">Title</span>
                    <span>{data!.title}</span>
                </div>
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">Author</span>
                    <span>{data!.author}</span>
                </div>
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">
                        Publish Year
                    </span>
                    <span>{data!.publishYear}</span>
                </div>
            </div>
        </div>
    );
};

export default ShowBook;
