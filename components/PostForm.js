import { XIcon } from "./Icons";

const PostForm = () => {
  return (
    <div className="md:w-[500px] w-[400px] border border-slate-400 rounded-md">
      <div className="p-2 flex items-center gap-4 border-b border-slate-400">
        <img className="bg-slate-400 w-10 h-10 rounded-full" />
        <p className="font-bold">User Name</p>
      </div>
      <textarea
        placeholder="Share post ..."
        className="p-2 w-full border-b min-h-24 max-h-24 border-slate-400 bg-transparent"
      ></textarea>
      <div className="px-3 py-2 flex gap-4 flex-wrap">
        <div className="relative">
          <img className="bg-slate-300 w-16 h-16" />
          <button className="cursor-pointer absolute top-1 right-1 rounded-full bg-red-200 p-1">
            <XIcon />
          </button>
        </div>
      </div>
      <div className="flex border-t border-slate-400 items-center justify-between px-2 py-1">
        <button className="px-2 py-1">Upload</button>
        <button className="px-2 py-1">share</button>
      </div>
    </div>
  );
};
export default PostForm;
