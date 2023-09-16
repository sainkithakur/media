import React, { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserProfile } from "../../redux/actions/authAction";

const Profile = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data } = useSelector((state) => state.AuthReducer);
  console.log(data);

  useEffect(() => {
    dispatch(UserProfile());
  }, [dispatch]);

  return (
    <section className="container px-6 py-4 mx-auto">
      {/* /form */}
      <CreatePost open={open} handleClose={handleClose} />

      {/* profile info */}
      <div className="border-b-2 flex flex-wrap items-center gap-5 sm:gap-12 md:gap-16 py-6 ">
        {/* img */}
        <div className="bg-purple-500 w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 rounded-full p-1">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        {/* name & post & followers & followings */}
        <div>
          <h3 className="font-medium text-2xl capitalize md:text-3xl">
            {data.name}
          </h3>
          <div className="flex gap-5 sm:gap-10 mt-2">
            <div className="cursor-pointer">
              12 <span>posts</span>
            </div>
            <Link to="/profile/followers" className="cursor-pointer">
              12 <span>followers</span>
            </Link>
            <Link to="/profile/followings" className="cursor-pointer">
              12 <span>followings</span>
            </Link>
          </div>
        </div>
        <button
          type="button"
          onClick={handleOpen}
          className="rounded sm:text-base text-sm shadow sm:ml-auto self-end text-white bg-purple-500 text-center w-32 py-1.5 cursor-pointer"
        >
          Add New
        </button>
      </div>

      {/* posts */}
      <div className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {Array(10)
            .fill()
            .map((item) => {
              return (
                <a
                  href="#"
                  className="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden"
                >
                  <img
                    src="https://cdn.tailkit.com/media/placeholders/photo-PDX_a_82obo-700x700.jpg"
                    alt="Product Image"
                    className="transform transition ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
                  <div className="p-4 flex items-center justify-center absolute inset-0">
                    <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600">
                      Electronics
                    </div>
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Profile;
