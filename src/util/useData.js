import { useState, useEffect } from "react";
export const useData = (url, jwt) => {
    const [state, setState] = useState();

    useEffect(() => {
        const dataFetch = async () => {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            const data = await response.json();

            setState(data);
        };

        dataFetch();
    }, [url, jwt]);

    return { data: state };
};
