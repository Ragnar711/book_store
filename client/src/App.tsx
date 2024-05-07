import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/create" element={<CreateBooks />} />
                <Route path="/books/details/:id" element={<ShowBook />} />
                <Route path="/books/edit/:id" element={<EditBook />} />
                <Route path="/books/delete/:id" element={<DeleteBook />} />
            </Routes>
        </QueryClientProvider>
    );
}
