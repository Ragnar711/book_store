import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'redaxios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState(0);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleCreateBook = async () => {
        setLoading(true);
        try {
            await axios.post('http://localhost:3000/books', {
                title,
                author,
                publishYear,
            });
            navigate('/');
            // eslint-disable-next-line
        } catch (error: any) {
            alert(error.data.errors[0].message);
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Create Book</h1>
            {loading ? <Spinner /> : ''}
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
