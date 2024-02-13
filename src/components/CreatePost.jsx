import { useContext, useRef } from "react";
import { PostList } from "../store/post-store";

function CreatePost() {
  const { addPost } = useContext(PostList);

  const fetchtitle = useRef();
  const fetchcontent = useRef();
  const fetchreactions = useRef();
  const fetchtags = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Date.now();
    const userId = Date.now();

    const title = fetchtitle.current.value;
    const content = fetchcontent.current.value;
    const reactions = fetchreactions.current.value;
    const tags = fetchtags.current.value.split(" ");
    addPost(title, content, reactions, userId, id, tags);

    fetchtitle.current.value = "";
    fetchcontent.current.value = "";
    fetchreactions.current.value = "";
    fetchtags.current.value = "";
  };
  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        {/* <div className="mb-3">
          <label htmlfor="userid" className="form-label">
            User Id
          </label>
          <input
            type="text"
            ref={fetchuserid}
            className="form-control"
            id="userid"
          />
        </div> */}
        <div className="mb-3">
          <label htmlfor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={fetchtitle}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlfor="content" className="form-label">
            Content
          </label>
          <input
            type="text"
            ref={fetchcontent}
            className="form-control"
            id="content"
          />
        </div>

        <div className="mb-3">
          <label htmlfor="reactions" className="form-label">
            reactions
          </label>
          <input
            type="text"
            ref={fetchreactions}
            className="form-control"
            id="reactions"
          />
        </div>
        <div className="mb-3">
          <label htmlfor="Tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            ref={fetchtags}
            className="form-control"
            id="Tags"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default CreatePost;
