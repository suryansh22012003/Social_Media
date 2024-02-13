import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  loadPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((item) => item.id !== action.paylode.id);
    console.log("dele");
  } else if (action.type === "ADD_POST") {
    newPostList = [action.paylode, ...currPostList];
  } else if (action.type === "LOAD_POST") {
    newPostList = [...newPostList, ...action.paylode.posts];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (title, content, reactions, userId, id, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      paylode: {
        id: id,
        userId: userId,
        title: title,
        body: content,
        reactions: reactions,
        tags: tags,
      },
    });
  };

  const deletePost = (id) => {
    dispatchPostList({
      type: "DELETE_POST",
      paylode: {
        id,
        userId,
      },
    });
  };
  const loadPost = (posts) => {
    dispatchPostList({
      type: "LOAD_POST",
      paylode: {
        posts,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, loadPost, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const defaultDATA = [
  {
    id: "1",
    userId: "9",
    title: "Holiday",
    body: "masti",
    reactions: "70",
    tags: ["abc", "123"],
  },
  {
    id: "2",
    userId: "10",
    title: "Fun",
    body: "amazing",
    reactions: "55",
    tags: ["abc", "1234"],
  },
];
export default PostListProvider;
