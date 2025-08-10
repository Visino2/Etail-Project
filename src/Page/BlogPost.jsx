import React from "react";
 

   const BlogPost = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center px-4 py-10">
        <article className="max-w-3xl bg-white p-8 shadow-md rounded-lg ">
            <p className="text-gray-600 text-sm mb-4">October 19, 2016 . 10:04 PM</p>
            <h1 className="text-3xl font-bold mb-4 md:text-4xl leading-tight">
                Technical Skills A Non-Technical Startup Founder Need to Have
            </h1>
            <p className="text-gray-700 mb-6">
                By leaning a small amount of technical skills, you, as a non-technical startup founder, can support your company in smaller ways. Here's our list of need-to-know technical skills.
            </p>

            <div className="flex items-center mb-8 "> 
                <img src="https://via.placeholder.com/40" alt="Author" className="rounded-full mr-3 w-10 h-10" />
                <div>
                    <p className="text-gray-800 font-bold">John Griebel</p>
                    <p className="text-gray-600">Self-taught Designer & Maker</p>
                </div>
            </div>

            <div className="prose prose-lg">
                <p>
                    When you set your business, you do so because you have a great idea that will be a hit in your market, or there's a problem to fix and you have the solution. But as a non-technical startup founder, with no development skills. making your dream a reality can be a whole lot harder.
                </p>

                <p>
                    For example, if a non-technical startup founder needs to have is wireframing. Wireframing is an essential part of the development process as it gives everybody on the team a general idea of what the app and products is supposed to look like.
                </p>
                <h2>1. Wireframing</h2>

                <p>
                    The first vital skill that all non-technical starup founders need to have is wireframing. wireframing is an essential part of the development process as it gives everybody on the team a general idea of what the app and product is supposed to look like.
                </p>
                
            </div>
            </article>
        </div>
      );
    };

    export default BlogPost;
