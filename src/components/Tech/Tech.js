function Tech({ tech }) {
  return (
    <div className="flex flex-wrap gap-4 justify-start">
      {tech.map((technology, index) => {
        return (
          <span
            key={index}
            className="px-2 py-1 text-sm font-base text-black bg-gray-100"
          >
            {technology}
          </span>
        );
      })}
    </div>
  );
}

export default Tech;
