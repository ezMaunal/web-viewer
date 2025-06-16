const ManualCard = ({ index, title, image }) => {
  return (
    <div className="mb-4 rounded-lg border border-gray-300 p-3">
      <div className="mb-3 p-3 text-lg">
        <span className="mr-2 rounded-full bg-orange-400 p-1.5 text-sm text-white">
          #{index + 1}
        </span>
        {title}
      </div>
      <div>
        <img
          className="w-full rounded-xl object-cover"
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

export default ManualCard;
