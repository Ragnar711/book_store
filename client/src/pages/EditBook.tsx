import { useMutation, useQueryClient } from '@tanstack/react-query';
import BackButton from '../components/BackButton';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'redaxios';
import { useSnackbar } from 'notistack';

const EditBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState(0);

    const { id } = useParams();

    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: ({
            title,
            author,
            publishYear,
        }: {
            title: string;
            author: string;
            publishYear: number;
        }) => {
            return axios.put(`http://localhost:3000/books/${id}`, {
                title,
                author,
                publishYear,
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['books'] });
            enqueueSnackbar('Book edited successfully', {
                variant: 'success',
            });
            navigate('/');
        },
        onError: () =>
            enqueueSnackbar('Failed to edit book', { variant: 'error' }),
    });

    const handleEditBook = () => {
        mutation.mutate({ title, author, publishYear });
    };

    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Edit Book</h1>
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2  w-full "
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">
                        Publish Year
                    </label>
                    <input
                        type="number"
                        value={publishYear}
                        onChange={(e) =>
                            setPublishYear(parseInt(e.target.value))
                        }
                        className="border-2 border-gray-500 px-4 py-2  w-full "
                    />
                </div>
                <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default EditBook;
