import React, {useState} from 'react';
import {createGlobalStyle} from "styled-components";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import {postProps} from "./types/listItem";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/MyModal";
import Button from "./components/commonConponents/basicComponents/button";
import {usePosts} from "./hooks/usePosts";

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
    const [visibleModal, setVisibleModal] = useState<boolean>( false );
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const createPost = (newPost: postProps) => {
        setPosts([...posts, newPost])
        setVisibleModal(false)
    }

    const removePost = (post: postProps) => {
        setPosts(posts.filter(el => el.id !== post.id))
    }

    return (
        <div className="App">
            <GlobalStyles/>
            {/*<Counter/>*/}
            <Button onClick={() => setVisibleModal(true)}>create user</Button>
            <MyModal visible = {visibleModal} setVisible={setVisibleModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} items={sortedAndSearchedPosts}/>

        </div>
    );
}

export default App;
