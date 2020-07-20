import React, { useState } from 'react'



interface Props {
    getQuery: Function
}

const SearchCaracters = (props: Props) => {
    const [query, setQuery] = useState<string>('');
    const onQuery = (query: string) => {
        setQuery(query);
        props.getQuery(query);
    }
    return (
        <section className="search">
            <form>
                <input 
                    type="text"
                    name="search"
                    className="form-control"
                    placeholder="Search characters"
                    onChange={(e)=> onQuery(e.target.value)}
                    />
            </form>
        </section>
    )
}

export default SearchCaracters
