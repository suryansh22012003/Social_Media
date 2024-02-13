import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { PostList } from "../store/post-store";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";

function CardCollect() {
  const { postList, loadPost } = useContext(PostList);
  const [loadingstate, setloadingstate] = useState(false);

  useEffect(() => {
    setloadingstate(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        loadPost(data.posts);
        setloadingstate(false);
      });
  }, []);

  return (
    <>
      {loadingstate && <LoadingSpinner />}
      {!loadingstate && postList.length === 0 && <Welcome></Welcome>}
      {!loadingstate && postList.map((item) => <Card item={item}></Card>)}
    </>
  );
}
export default CardCollect;
