export interface postProps {
    id: number;
    body: string;
    title: string
}

export interface listProps {
    post: postProps;
    number: number;
    remove: (post: postProps) => void;
}

export interface listItemProps {
    items: postProps[],
    remove: (newPost: postProps) => void;
}