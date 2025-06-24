// import { z } from "zod";
// import { Models } from "appwrite";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Form,FormControl,FormField,FormItem,FormLabel,FormMessage, FormDescription } from '../ui/form';
// import { Button } from '../ui/button';
// import { Input } from "../ui/input";
// import { Textarea } from "../ui/textarea";
// import { Checkbox } from "../ui/checkbox";
//  import {PostValidation}  from "../../lib/validation/index";
// import { useToast } from "@/hooks/use-toast";
//  import { useUserContext } from "@/context/AuthContext";
//  import  FileUploader from "../shared/FileUploader";
//  import Loader from "../shared/Loader";
//  import { useCreatePost , useUpdatePost} from "../../lib/react-query/queriesAndMutations";

// type PostFormProps = {
//   post?: Models.Document;
//   action: "Create" | "Update";
// };

// const PostForm = ({ post, action}: PostFormProps) => {
//     const { mutateAsync: createPost, isPending: isLoadingCreate } =useCreatePost();
//     const { mutateAsync: updatePost, isPending: isLoadingUpdate } =useUpdatePost();
//     const navigate = useNavigate();
//     const { toast } = useToast();
//     const { user } = useUserContext();
//     const form = useForm<z.infer<typeof PostValidation>>({
//       resolver: zodResolver(PostValidation),
//       defaultValues: {
//         caption: post ? post?.caption : "",
//         file: [],
//         location: post ? post.location : "",
//         tag: post ? post.tag.join(",") : "",
//       },
//     });

//  async  function onSubmit(values: z.infer<typeof PostValidation> ){
//   if (post && action === "Update") {
//           const updatedPost = await updatePost({
//             ...values,
//             postId: post.$id,
//             imageId: post.imageId,
//             imageUrl: post.imageUrl,
//           });

//           if (!updatedPost) {
//             toast({
//               title: `${action} post failed. Please try again.`,
//             });
//           }
//           return navigate(`/posts/${post.$id}`);
//         }
//     const newPost = await createPost({
//               ...values,
//               userId: user.id

//             })
//             if (!newPost) {
//                       toast({
//                         title: `Please try again.`,
//                       });
//                     }
//                     navigate("/");

//   }
//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="flex flex-col gap-9 w-full  max-w-5xl">
//         <FormField
//           control={form.control}
//           name="caption"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="shad-form_label">Caption</FormLabel>
//               <FormControl>
//                 <Textarea
//                   className="shad-textarea custom-scrollbar"
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage className="shad-form_message" />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="file"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="shad-form_label">Add Photos</FormLabel>
//               <FormControl>
//                 <FileUploader
//                   fieldChange={field.onChange}
//                   mediaUrl={post?.imageUrl}
//                 />
//               </FormControl>
//               <FormMessage className="shad-form_message" />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="location"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="shad-form_label">Add Location</FormLabel>
//               <FormControl>
//                 <Input type="text" className="shad-input" {...field} />
//               </FormControl>
//               <FormMessage className="shad-form_message" />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="tag"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="shad-form_label">
//                 Tags(separated by comma " , ")
//               </FormLabel>
//               <FormControl>
//                 <Input
//                   placeholder="Art, Expression, Learn"
//                   type="text"
//                   className="shad-input"
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage className="shad-form_message" />
//             </FormItem>
//           )}
//         />
//                  <div className="bg-primary-500 p-10" style={{borderRadius: '10px'}}>
//         <ul style={{textAlign:'center'}}>
//     <li>
//       <h3 style={{textAlign:'center'}}><b>Respect Privacy</b></h3>
//       <p className="bullet-text">
//         Always ask for permission before taking pictures of someone or their belongings.
//         If they decline, respect their choice without any pressure.
//       </p>
//     </li>
//     <li>
//     <h3 style={{textAlign:'center'}}><b>Be Genuine</b></h3>
//       <p className="bullet-text">
//         Ensure your actions are motivated by kindness, not by the desire for
//         attention or validation on social media.
//       </p>
//     </li>
//     <li>
//     <h3 style={{textAlign:'center'}}><b>Avoid Discomfort</b></h3>
//       <p className="bullet-text">
//         Do not make anyone feel uncomfortable or obligated to participate in
//         your initiative or photos. Kindness should never feel forced.
//       </p>
//     </li>
//     <li>
//     <h3 style={{textAlign:'center'}}><b>Seek Consent For Posts</b></h3>
//       <p className="bullet-text">
//         If you’re sharing someone’s picture or story online, obtain their explicit
//         permission and ensure they’re comfortable with the content you plan to post.
//       </p>
//     </li>
//     <li>
//     <h3 style={{textAlign:'center'}}><b>Focus on the Act, Not the Recognition</b></h3>
//       <p className="bullet-text">
//         Emphasize the importance of the good deed itself rather than how it’s perceived
//         by others.
//       </p>
//     </li>
//     <li>
//     <h3 style={{textAlign:'center'}}><b>Protect Dignity</b></h3>
//       <p className="bullet-text">
//       When helping those in need, ensure your actions or posts do not undermine their dignity or make them feel inferior.
//       </p>
//     </li>
//     <li>
//     <h3 style={{textAlign:'center'}}><b>Protect Dignity</b></h3>
//       <p className="bullet-text">
//       When helping those in need, ensure your actions or posts do not undermine their dignity or make them feel inferior.
//       </p>
//     </li>
//     <li>
//     <h3 style={{textAlign:'center'}}><b>Be Non-Intrusive</b></h3>
//       <p className="bullet-text">Avoid asking personal or sensitive questions. Your role is to help, not pry into their lives.
//       </p>
//     </li>
//     <li>
//     <h3 style={{textAlign:'center'}}><b>Avoid Commercializing Kindness</b></h3>
//       <p className="bullet-text">Do not use your good deeds as a means to promote a brand, product, or personal gain.
//               </p>
//     </li>

//     <li>
//     <h3 style={{textAlign:'center'}}><b>Keep It Balanced</b></h3>
//       <p className="bullet-text">Remember, not every good deed needs to be shared online. Some acts of kindness are best kept between you and the person you helped.
//       </p>
//     </li>
//   </ul>

//         </div>
//         <div className="flex gap-4 items-center justify-end">
//           <Button
//             type="button"
//             className="shad-button_dark_4"
//             // onClick={() => navigate(-1)}
//             >
//             Cancel
//           </Button>
//           <Button
//             type="submit"
//             className="shad-button_primary whitespace-nowrap"
//             disabled={isLoadingCreate || isLoadingUpdate}>
//             {(isLoadingCreate || isLoadingUpdate) && <Loader />}
//             {action} Post

//           </Button>
//         </div>
//       </form>
//     </Form>
//   );
// };

// export default PostForm;
// import { useState } from "react";
// import { z } from "zod";
// import { Models } from "appwrite";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";
// import { Textarea } from "../ui/textarea";
// import { PostValidation } from "../../lib/validation/index";
// import { useToast } from "@/hooks/use-toast";
// import { useUserContext } from "@/context/AuthContext";
// import FileUploader from "../shared/FileUploader";
// import Loader from "../shared/Loader";
// import {
//   useCreatePost,
//   useUpdatePost,
// } from "../../lib/react-query/queriesAndMutations";

// type PostFormProps = {
//   post?: Models.Document;
//   action: "Create" | "Update";
// };

// const PostForm = ({ post, action }: PostFormProps) => {
//   const [showInstructions, setShowInstructions] = useState(false); // State to toggle pop-up
//   const { mutateAsync: createPost, isPending: isLoadingCreate } =
//     useCreatePost();
//   const { mutateAsync: updatePost, isPending: isLoadingUpdate } =
//     useUpdatePost();
//   const navigate = useNavigate();
//   const { toast } = useToast();
//   const { user } = useUserContext();
//   const form = useForm<z.infer<typeof PostValidation>>({
//     resolver: zodResolver(PostValidation),
//     defaultValues: {
//       caption: post ? post?.caption : "",
//       file: [],
//       location: post ? post.location : "",
//       tag: post ? post.tag.join(",") : "",
//     },
//   });

//   async function onSubmit(values: z.infer<typeof PostValidation>) {
//     if (post && action === "Update") {
//       const updatedPost = await updatePost({
//         ...values,
//         postId: post.$id,
//         imageId: post.imageId,
//         imageUrl: post.imageUrl,
//       });

//       if (!updatedPost) {
//         toast({
//           title: `${action} post failed. Please try again.`,
//         });
//       }
//       return navigate(`/posts/${post.$id}`);
//     }
//     const newPost = await createPost({
//       ...values,
//       userId: user.id,
//     });
//     if (!newPost) {
//       toast({
//         title: `Please try again.`,
//       });
//     }
//     navigate("/");
//   }

//   return (
//     <>
//       <Form {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="flex flex-col gap-9 w-full max-w-5xl"
//         >
//           <FormField
//             control={form.control}
//             name="caption"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="shad-form_label">Caption</FormLabel>
//                 <FormControl>
//                   <Textarea
//                     className="shad-textarea custom-scrollbar"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage className="shad-form_message" />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="file"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="shad-form_label">Add Photos</FormLabel>
//                 <FormControl>
//                   <FileUploader
//                     fieldChange={field.onChange}
//                     mediaUrl={post?.imageUrl}
//                   />
//                 </FormControl>
//                 <FormMessage className="shad-form_message" />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="location"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="shad-form_label">Add Location</FormLabel>
//                 <FormControl>
//                   <Input type="text" className="shad-input" {...field} />
//                 </FormControl>
//                 <FormMessage className="shad-form_message" />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="tag"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="shad-form_label">
//                   Tags(separated by comma " , ")
//                 </FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="Art, Expression, Learn"
//                     type="text"
//                     className="shad-input"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage className="shad-form_message" />
//               </FormItem>
//             )}
//           />
//           <div className="flex gap-4 items-center justify-start">
//             <Button
//               type="button"
//               className="shad-button whitespace-nowrap"
//               style={{color:'#877EFF'}}
//               onClick={() => setShowInstructions(true)}
//             >
//               Instructions
//             </Button>
//           </div>
//           <div className="flex items-center justify-end">
//             <Button
//               type="button"
//               className="shad-button_dark_4"
//               onClick={() => navigate(-1)}
//             >
//               Cancel
//             </Button>

//             <Button
//               type="submit"
//               className="shad-button_primary whitespace-nowrap"
//               disabled={isLoadingCreate || isLoadingUpdate}
//             >
//               {(isLoadingCreate || isLoadingUpdate) && <Loader />}
//               {action} Post
//             </Button>
//           </div>
//         </form>
//       </Form>

//       {/* Instructions Pop-Up */}
//       {showInstructions && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div
//             className="bg-primary-500 p-10 rounded-lg w-[60%] "
//             style={{ borderRadius: "10px" }}
//           >
//             <h2
//               className="text-xl font-bold mb-4"
//               style={{ textAlign: "center" }}
//             >
//               Please keep in mind before posting
//             </h2>
//             <ul className="space-y-4" style={{ textAlign: "center" }}>
//               <li>
//                 <h3>
//                   <b>Respect Privacy</b>
//                 </h3>
//                 <p>
//                   Always ask for permission before taking pictures of someone or
//                   their belongings.If they decline, respect their choice without
//                   any pressure.
//                 </p>
//               </li>
//               <li>
//                 <h3 style={{ textAlign: "center" }}>
//                   <b>Avoid Discomfort</b>
//                 </h3>
//                 <p className="bullet-text">
//                   Do not make anyone feel uncomfortable or obligated to
//                   participate in your initiative or photos. Kindness should
//                   never feel forced.
//                 </p>
//               </li>
//               <li>
//                 <h3 style={{ textAlign: "center" }}>
//                   <b>Seek Consent For Posts</b>
//                 </h3>
//                 <p className="bullet-text">
//                   If you’re sharing someone’s picture or story online, obtain
//                   their explicit permission and ensure they’re comfortable with
//                   the content you plan to post.
//                 </p>
//               </li>
//               <li>
//                 <h3 style={{ textAlign: "center" }}>
//                   <b>Focus on the Act, Not the Recognition</b>
//                 </h3>
//                 <p className="bullet-text">
//                   Emphasize the importance of the good deed itself rather than
//                   how it’s perceived by others.
//                 </p>
//               </li>
//               <li>
//                 <h3 style={{ textAlign: "center" }}>
//                   <b>Protect Dignity</b>
//                 </h3>
//                 <p className="bullet-text">
//                   When helping those in need, ensure your actions or posts do
//                   not undermine their dignity or make them feel inferior.
//                 </p>
//               </li>
//               <li>
//                 <h3 style={{ textAlign: "center" }}>
//                   <b>Lead by Example</b>
//                 </h3>
//                 <p className="bullet-text">
//                   Share your actions to inspire others, not to boast. A
//                   thoughtful caption can encourage others to spread kindness.
//                 </p>
//               </li>
//               <li>
//                 <h3 style={{ textAlign: "center" }}>
//                   <b>Be Non-Intrusive</b>
//                 </h3>
//                 <p className="bullet-text">
//                   Avoid asking personal or sensitive questions. Your role is to
//                   help, not pry into their lives.
//                 </p>
//               </li>
//               <li>
//                 <h3 style={{ textAlign: "center" }}>
//                   <b>Avoid Commercializing Kindness</b>
//                 </h3>
//                 <p className="bullet-text">
//                   Do not use your good deeds as a means to promote a brand,
//                   product, or personal gain.
//                 </p>
//               </li>
//             </ul>
//             <div className="flex justify-end mt-4">
//               <Button
//                 className="shad-button_primary"
//                 onClick={() => setShowInstructions(false)}
//               >
//                 Close
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default PostForm;
import { useState } from "react";
import { z } from "zod";
import { Models } from "appwrite";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { PostValidation } from "../../lib/validation/index";
import { useToast } from "@/hooks/use-toast";
import { useUserContext } from "@/context/AuthContext";
import FileUploader from "../shared/FileUploader";
import Loader from "../shared/Loader";
import {
  useCreatePost,
  useUpdatePost,
} from "../../lib/react-query/queriesAndMutations";

type PostFormProps = {
  post?: Models.Document;
  action: "Create" | "Update";
};

const PostForm = ({ post, action }: PostFormProps) => {
  const [showInstructions, setShowInstructions] = useState(false); // State to toggle pop-up
  const [isPostEnabled, setIsPostEnabled] = useState(false); // State to manage Post Enablement
  const { mutateAsync: createPost, isPending: isLoadingCreate } =
    useCreatePost();
  const { mutateAsync: updatePost, isPending: isLoadingUpdate } =
    useUpdatePost();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useUserContext();
  const form = useForm<z.infer<typeof PostValidation>>({
    resolver: zodResolver(PostValidation),
    defaultValues: {
      caption: post ? post?.caption : "",
      file: [],
      location: post ? post.location : "",
      tag: post ? post.tag.join(",") : "",
    },
  });

  // Toggle post enabled based on checkbox
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPostEnabled(e.target.checked);
  };

  async function onSubmit(values: z.infer<typeof PostValidation>) {
    if (post && action === "Update") {
      const updatedPost = await updatePost({
        ...values,
        postId: post.$id,
        imageId: post.imageId,
        imageUrl: post.imageUrl,
      });

      if (!updatedPost) {
        toast({
          title: `${action} post failed. Please try again.`,
        });
      }
      return navigate(`/posts/${post.$id}`);
    }
    const newPost = await createPost({
      ...values,
      userId: user.id,
    });
    if (!newPost) {
      toast({
        title: `Please try again.`,
      });
    }
    navigate("/");
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-9 w-full max-w-5xl"
        >
          <FormField
            control={form.control}
            name="caption"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Caption</FormLabel>
                <FormControl>
                  <Textarea
                    className="shad-textarea custom-scrollbar"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Add Photos</FormLabel>
                <FormControl>
                  <FileUploader
                    fieldChange={field.onChange}
                    mediaUrl={
                      post?.imageId
                        ? `https://cloud.appwrite.io/v1/storage/buckets/6782e52f0035d9eb5fc4/files/${post.imageId}/view?project=6782604b00207ffe0075`
                        : undefined
                    }
                  />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Add Location</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tag"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">
                  Tags(separated by comma " , ")
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Art, Expression, Learn"
                    type="text"
                    className="shad-input"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />

          {/* Checkbox to enable Post */}
          <FormItem>
            <FormControl>
              <label className="shad-form_label">
                <input
                  type="checkbox"
                  className="mr-4"
                  checked={isPostEnabled}
                  onChange={handleCheckboxChange}
                />
                I have read all
                <Button
                  type="button"
                  className="shad-button whitespace-nowrap text-lg underline"
                  style={{ color: "#877EFF" }}
                  onClick={() => setShowInstructions(true)}
                >
                  Instructions for posting
                </Button>
                {/* </div> */}
              </label>
            </FormControl>
          </FormItem>

          <div className="flex items-center justify-end">
            <Button
              type="button"
              className="shad-button_dark_4"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="shad-button_primary whitespace-nowrap"
              disabled={!isPostEnabled || isLoadingCreate || isLoadingUpdate} // Disable if not checked
            >
              {(isLoadingCreate || isLoadingUpdate) && <Loader />}
              {action} Post
            </Button>
          </div>
        </form>
      </Form>

      {/* Instructions Pop-Up */}
      {showInstructions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="bg-primary-500 p-5 rounded-lg w-[60%] "
            style={{ borderRadius: "10px" }}
          >
            <h2
              className="text-xl font-bold mb-4"
              style={{ textAlign: "center" }}
            >
              Please keep in mind before posting
            </h2>
            <ul className="space-y-4" style={{ textAlign: "center" }}>
              <li>
                <h3>
                  <b>Respect Privacy</b>
                </h3>
                <p>
                  Always ask for permission before taking pictures of someone or
                  their belongings. If they decline, respect their choice
                  without any pressure.
                </p>
              </li>
              <li>
                <h3 style={{ textAlign: "center" }}>
                  <b>Avoid Discomfort</b>
                </h3>
                <p className="bullet-text">
                  Do not make anyone feel uncomfortable or obligated to
                  participate in your initiative or photos. Kindness should
                  never feel forced.
                </p>
              </li>
              <li>
                <h3 style={{ textAlign: "center" }}>
                  <b>Seek Consent For Posts</b>
                </h3>
                <p className="bullet-text">
                  If you’re sharing someone’s picture or story online, obtain
                  their explicit permission and ensure they’re comfortable with
                  the content you plan to post.
                </p>
              </li>
              <li>
                <h3 style={{ textAlign: "center" }}>
                  <b>Focus on the Act, Not the Recognition</b>
                </h3>
                <p className="bullet-text">
                  Emphasize the importance of the good deed itself rather than
                  how it’s perceived by others.
                </p>
              </li>
              <li>
                <h3 style={{ textAlign: "center" }}>
                  <b>Protect Dignity</b>
                </h3>
                <p className="bullet-text">
                  When helping those in need, ensure your actions or posts do
                  not undermine their dignity or make them feel inferior.
                </p>
              </li>
              <li>
                <h3 style={{ textAlign: "center" }}>
                  <b>Lead by Example</b>
                </h3>
                <p className="bullet-text">
                  Share your actions to inspire others, not to boast. A
                  thoughtful caption can encourage others to spread kindness.
                </p>
              </li>
              <li>
                <h3 style={{ textAlign: "center" }}>
                  <b>Be Non-Intrusive</b>
                </h3>
                <p className="bullet-text">
                  Avoid asking personal or sensitive questions. Your role is to
                  help, not pry into their lives.
                </p>
              </li>
              <li>
                <h3 style={{ textAlign: "center" }}>
                  <b>Avoid Commercializing Kindness</b>
                </h3>
                <p className="bullet-text">
                  Do not use your good deeds as a means to promote a brand,
                  product, or personal gain.
                </p>
              </li>
            </ul>
            <div className="flex justify-end mt-4">
              <Button
                className="shad-button_primary underline"
                onClick={() => setShowInstructions(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostForm;
