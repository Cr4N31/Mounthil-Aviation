function Hashtags({ tags }) {
  return (
    <p className="flex gap-2 mt-4">
      {tags.map((tag) => (
        <a
          key={tag}
          href={`#${tag}`}
          className="text-sm text-blue-300 hover:text-blue-200 transition-colors"
        >
          #{tag}
        </a>
      ))}
    </p>
  );
}

export default Hashtags;
