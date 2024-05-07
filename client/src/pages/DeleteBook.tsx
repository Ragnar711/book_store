import { useMutation } from '@tanstack/react-query';
import BackButton from '../components/BackButton';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'redaxios';

const DeleteBook = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: () => {
            return axios.delete(`http://localhost:3000/books/${id}`);
        },
    });

    const handleDeleteBook = async () => {
        mutation.mutate();
        navigate('/');
    };

    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Delete Book</h1>
            <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
                <h3 className="text-2xl">
                    Are You Sure You want to delete this book?
                </h3>

                <button
                    className="p-4 bg-red-600 text-white m-8 w-full"
                    onClick={handleDeleteBook}
                >
                    Yes, Delete it
                </button>
            </div>
        </div>
    );
};

export default DeleteBook;
