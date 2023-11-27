import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import { useGetRecentPosts } from "@/lib/react-query/QandM";
import { Models } from "appwrite";


const Home = () => {

  const { data: posts, isPending: isPostLoading, isError: isErrorPosts } = useGetRecentPosts();
 
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">
            Home Feed
          </h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
               {posts?.documents.map((post: Models.Document) => (
                <PostCard post={post} key={post.caption} />  //4:30 video resume
               ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home