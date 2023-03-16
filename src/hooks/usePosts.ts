import {useMemo} from "react";
import {postProps} from "../types/listItem";

export const useSortedPosts = (posts: postProps[], sort: string) => {
    return useMemo(() => {
        if (sort) {
            // @ts-ignore
            return [...posts.sort((a, b) => a[sort].localeCompare(b[sort]))]
        }
        return posts
    }, [sort, posts])
}

export const usePosts = (post: postProps[], sort: string, query: string) => {
    const sortedPosts = useSortedPosts(post, sort)

    return useMemo(() => {
        return sortedPosts.filter(el => el.title.toLowerCase().includes(query))
    }, [query, sortedPosts])
}

