import BackButton from '../components/BackButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'redaxios';

const CreateBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState(0);

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
            return axios.post('http://localhost:3000/books', {
                title,
                author,
                publishYear,
            });
        },
    });

    const navigate = useNavigate();

    const handleCreateBook = async () => {
        mutation.mutate({ title, author, publishYear });
        navigate('/');
    };

    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Create Book</h1>
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                <div className="my-4">
                    <label
                        className="text-xl mr-4 text-gray-500"
                        htmlFor="title"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        id="title"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label
                        className="text-xl mr-4 text-gray-500"
                        htmlFor="author"
                    >
                        Author
                    </label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        id="author"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500" htmlFor="pub">
                        Publish Year
                    </label>
                    <input
                        type="number"
                        value={publishYear}
                        onChange={(e) =>
                            setPublishYear(parseInt(e.target.value))
                        }
                        id="pub"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <button
                    className="p-2 bg-sky-300 m-8"
                    onClick={handleCreateBook}
                >
                    Create
                </button>
            </div>
        </div>
    );
};

export default CreateBooks;
