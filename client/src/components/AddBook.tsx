import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';

const AddBook = () => {
    return (
        <div className="flext justify-between items-center">
            <h1 className="text-3xl my-8">Books List</h1>
            <Link to="/books/create">
                <MdOutlineAddBox className="text-sky-800 text-4xl" />
            </Link>
        </div>
    );
};

export default AddBook;
