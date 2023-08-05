"use client";
import { useSearchParams } from 'next/navigation';

const Abcd = () => {
    const searchParams = useSearchParams();

    // Get the value of the `name` query parameter
    const name = searchParams.get('name');

    return (
        <div>
            The name query parameter is: {name}
        </div>
    );
};

export default Abcd;
