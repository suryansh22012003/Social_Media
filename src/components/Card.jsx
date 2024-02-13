import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-store";

function Card({ item }) {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card" style={{ width: "27rem" }}>
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(item.id, item.userId)}
        >
          {/* <MdDelete /> */}
        </span>
        <div className="card-body">
          <h5 className="card-title">title:{item.title}</h5>
          <p className="card-text">body:{item.body}</p>
          <br />
          id :-<span className="badge text-bg-primary">{item.id}</span>
          userId :-<span className="badge text-bg-primary">{item.userId}</span>
          <br />
          tags :-
          {item.tags.map((tag_item) => (
            <span key={tag_item} className="badge text-bg-secondary">
              {tag_item}
            </span>
          ))}
          <div className="alert alert-success" role="alert">
            <span className="badge text-bg-danger reaction">
              {item.reactions} People reacted to this post
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
