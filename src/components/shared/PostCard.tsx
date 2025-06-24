import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

import PostStats from "../shared/PostStats";
import { multiFormatDateString } from "@/lib/utils";
import { useUserContext } from "@/context/AuthContext";

type PostCardProps = {
  post: Models.Document;
};

const PostCard = ({ post }: PostCardProps) => {
  const { user } = useUserContext();

  if (!post.creator) return null;
  console.log("Post:", post);

  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Link to={`/profile/${post.creator.$id}`}>
            <img
              src={
                post.creator?.imageId
                  ? `https://cloud.appwrite.io/v1/storage/buckets/6782e52f0035d9eb5fc4/files/${post.creator.imageId}/view?project=6782604b00207ffe0075`
                  : "/assets/icons/profile-placeholder.svg"
              }
              alt="creator"
              className="w-12 lg:h-12 rounded-full"
              onError={(e) => {
                e.currentTarget.src = "/assets/icons/profile-placeholder.svg";
              }}
            />
          </Link>

          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-light-1">
              {post.creator.name}
            </p>
            <div className="flex-center gap-2 text-light-3">
              <p className="subtle-semibold lg:small-regular">
                {multiFormatDateString(post.$createdAt)}
              </p>
              <div className="flex items-center subtle-semibold lg:small-regular">
                <FaMapMarkerAlt style={{ marginRight: "5px", color: "gray" }} />
                {post.location}
              </div>
            </div>
          </div>
        </div>

        {user.id === post.creator.$id && (
          <Link to={`/update-post/${post.$id}`}>
            <img
              src="/assets/icons/edit.svg"
              alt="edit"
              width={20}
              height={20}
            />
          </Link>
        )}
      </div>

      <Link to={`/posts/${post.$id}`}>
        <div className="small-medium lg:base-medium py-5">
          <p>{post.caption}</p>
          <ul className="flex gap-1 mt-2">
            {post.tag.map((tag1: string, index: number) => (
              <li
                key={`${tag1}${index}`}
                className="text-light-3 small-regular"
              >
                #{tag1}
              </li>
            ))}
          </ul>
        </div>

        {/* <img
          src={post.imageUrl}
          alt="post"
          className="post-card_img"
          onError={(e) => {
            e.currentTarget.src = "/assets/icons/profile-placeholder.svg";
          }}
        /> */}
        <img
          src={`https://cloud.appwrite.io/v1/storage/buckets/6782e52f0035d9eb5fc4/files/${post.imageId}/view?project=6782604b00207ffe0075`}
          alt="post"
          className="post-card_img"
          onError={(e) => {
            e.currentTarget.src = "/assets/icons/profile-placeholder.svg";
          }}
        />
      </Link>

      <PostStats post={post} userId={user.id} />
    </div>
  );
};

export default PostCard;
