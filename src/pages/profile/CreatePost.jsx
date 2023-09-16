import React from "react";

const CreatePost = ({ open, handleClose }) => {
  return (
    open && (
      <div className="fixed overflow-hidden top-0 inset-x-0 flex flex-col justify-center items-center z-20 bg-[rgb(0,0,0,0.5)] h-full">
        <section class="bg-white w-5/6 sm:w-3/4 md:2/3 lg:w-1/2 rounded ">
          <form class="w-full mx-auto p-6 ">
            <div class="relative flex items-center mt-8">
              <input
                type="text"
                class="block w-full p-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Username"
              />
            </div>

            <label
              for="dropzone-file"
              class="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-gray-300 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>

              <h2 class="mx-3 text-gray-400">Profile Photo</h2>

              <input id="dropzone-file" type="file" class="hidden" />
            </label>

            <div class="relative flex items-center mt-6">
              <textarea
                rows={4}
                type="description"
                class="block w-full p-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Description"
              />
            </div>

            <div class="mt-6 flex md:flex-row flex-col gap-3 md:gap-5">
              <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-500 rounded-lg hover:bg-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-50">
                Sign Up
              </button>
              <button
                onClick={handleClose}
                class="w-full px-6 py-3 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      </div>
    )
  );
};

export default CreatePost;
