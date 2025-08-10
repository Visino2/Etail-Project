import React from "react"

export default function NavBar() {
    return (
        <div className="flex flex-row justify-between items-center mx-4 my-4 rounded-full border-0 bg-gray-100 px-8 py-4">
            <h1 className="text-3xl bold">etail <span className="text-pink-500">.</span>me</h1>
            <nav className="space-x-4 text-blue-500 text-lg">
                <a href="" className="hover:text-blue-700">Home</a>
                <a href="" className="hover:text-blue-700">Blog</a>
                <a href="" className="hover:text-blue-700">Contact</a>
            </nav>
           <div className="space-x-4">
            <button className="rounded-2xl px-5 py-2 border-0 bg-white text-blue-500 cursor-pointer">Login</button>
            <button className="bg-blue-700 px-4 py-2 rounded-2xl text-white hover:bg-blue-800 cursor-pointer">Start selling</button>
           </div>
        </div>
    )
}