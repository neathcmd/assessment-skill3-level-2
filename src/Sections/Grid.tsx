const BlogGrid = () => {
  return (
    <main className="w-full min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Post Card */}
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={`https://picsum.photos/300/200${index + 1}`}
                alt={`Post ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Post Title</h3>
                <p className="text-gray-700 mb-4">
                  This is a brief description of the post content.
                </p>
                <a
                  href="#"
                  className="text-white font-bold bg-blue-700 px-4 py-3 rounded-md hover:bg-blue-500 transition duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogGrid;
