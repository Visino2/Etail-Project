import React from "react";
import { Link } from "react-router-dom";

const articles = [
    {
        id: 1,
        image: '/images/image1.jpg',
        author: 'Sam Pitak',
        date: '20, Apr 2024',
        title: 'Beyond Transactions: Unlocking the Full Potential of POS Systems',
        excerpt: 'In the realm of modern business operations, a Point of Sale (POS) system serves as more than just a tool...',
    },
    {
        id: 2,
        image: '/images/image2.jpg',
        author: 'Yasmin Sari',
        date: '20, Apr 2024',
        title: 'From Brick-and-Mortar to Online Storefront: Integrating POS Systems',
        excerpt: 'In the realm of modern business operations, a Point of Sale (POS) system serves as more than just a tool...',
    },
    {
        id: 3,
        image: '/images/image3.jpg',
        author: 'Ambon Fanda',
        date: '20, Apr 2024',
        title: 'Security First: Protecting Your Business with Advanced POS Solutions',
        excerpt: 'One of the primary functions of a POS system is processing transactions and handle sensitive customer data...',
    },
];
const Blog = () => {
    return (
        <div className="bg-white py-16 px-4 md:px-10 lg:px-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Our Recent Articles</h2>
                <p className="text-gray-600 mt-2">Stay Informed with the Latest Insights</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map(article => (
                    <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                        <div className="p-6 space-y-4">
                            <div className="flex justify-between text-sm text-gray-500">
                                <span className="text-orange-600 font-bold">{article.author}</span>
                                <span>{article.date}</span>
                            </div>
                        <h3 className="text-lg font-bold text-gray-900">{article.title}</h3>
                        <p className="text-gray-700 text-sm">{article.excerpt}</p>
                        <Link to={`/blog/${article.id}`} className="text-indigo-600 hover:underline inline-flex items-center text-sm">
                            Read More <span className="ml-1">→</span>
                        </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Blog;