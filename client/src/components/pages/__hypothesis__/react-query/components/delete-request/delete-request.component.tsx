import { useDeletePosts } from './useDeletePosts.hook';

const POSTS_ID = 1;

function DeleteRequest() {
  const deletePosts = useDeletePosts();

  return (
    <button
      type="button"
      data-testid="postDelBtn"
      onClick={() => {
        deletePosts.mutate(POSTS_ID);
      }}
    >
      Delete Posts id:{POSTS_ID}
    </button>
  );
}

export { DeleteRequest };
