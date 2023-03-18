import React from "react";
import { useState, useEffect } from "react";

function useRandomJoke(category) {
    const [joke, setJoke] = useState("");

    useEffect(() => {
        const fetchJoke = async() => {
            await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
                .then((res) => res.json())
                .then((data) => {
                    setJoke(data.value);
                });
        };
        fetchJoke();
    }, [category]);

    return joke;
}

export default useRandomJoke;