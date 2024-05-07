export const getBook = async (id: string | undefined) => {
    const res = await fetch(`http://localhost:3000/books/${id}`);

    if (!res.ok) throw new Error('Could not fetch data');

    return res.json();
};
