export const getBooks = async () => {
    const res = await fetch('http://localhost:3000/books');

    if (!res.ok) throw new Error('Could not fetch data');

    return res.json();
};
