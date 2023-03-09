import React, {useMemo, useState} from 'react';
import {createGlobalStyle} from "styled-components";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import {postProps} from "./types/listItem";
import PostFilter from "./components/PostFilter";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
  }

  #root {
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Titddle', body: 'desfdfcription'},
        {id: 2, title: 'zitle', body: 'aaescription'},
        {id: 3, title: 'Title', body: 'nnescription'},
    ])

    const [filter, setFilter] = useState({
        sort: '', query: ''
    })

    const sortedPosts = useMemo(() => {
        console.log('OTRABOTALO')
        if (filter.sort) {
            // @ts-ignore
            return [...posts.sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))]
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(el => el.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    const createPost = (newPost: postProps) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post: postProps) => {
        setPosts(posts.filter(el => el.id !== post.id))
    }

    return (
        <div className="App">
            <GlobalStyles/>
            {/*<Counter/>*/}
            <PostForm create={createPost}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} items={sortedAndSearchedPosts}/>

        </div>
    );
}

export default App;
