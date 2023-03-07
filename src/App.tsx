import React, {useState} from 'react';
import {createGlobalStyle} from "styled-components";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import {postProps} from "./types/listItem";

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
        {id: 1, title: 'Title', body: 'description'},
        {id: 2, title: 'Title', body: 'description'},
        {id: 3, title: 'Title', body: 'description'},
    ])

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
            {posts.length !== 0 ?
                <PostList remove={removePost} items={posts}/>
                :
                <h1> НЕТУ НИХУЯ ТУТ ЕПТА</h1>
            }
        </div>
    );
}

export default App;
