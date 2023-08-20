import { Link } from "~/components/lib/router/Link";
import { successButton } from "~/shared/constants/buttonColor";
import { postService } from "~/shared/services/post.service";

const { useGetPostList } = postService;

/**
 * @package
 */
export const Posts = () => {
  const { data } = useGetPostList();

  if (!data) return null;

  return (
    <main className="bg-slate-700 p-4 text-white">
      <h2>PostsPage</h2>

      <div className="flex flex-1 flex-col gap-4 py-4">
        {data.map((post) => (
          <div key={post.id} className="flex flex-col">
            <h3>title : {post.title}</h3>
            <Link to={`/posts/${post.id}`} className={successButton}>
              to /posts/{post.id}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};
