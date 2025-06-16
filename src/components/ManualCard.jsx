const ManualCard = ({ title, image }) => {
  return (
    <div className="mb-4 rounded-lg border border-gray-300 p-3">
      <div className="mb-3">{title}</div>
      <div>
        <img
          class="w-full rounded-xl object-cover"
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

export default ManualCard;
