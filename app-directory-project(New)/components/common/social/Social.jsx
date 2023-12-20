const Social = () => {
  const socialContent = [
    { id: 1, icon: "icon-facebook", link: "https://facebook.com/", name: "facebook" },
    { id: 2, icon: "icon-twitter", link: "https://twitter.com/", name: "twitter" },
    { id: 3, icon: "icon-instagram", link: "https://instagram.com/", name: "instagram" },
    { id: 4, icon: "icon-linkedin", link: "https://linkedin.com/", name: "linkedin" },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          aria-label={item.name}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <i className={`${item.icon} text-14`} />
        </a>
      ))}
    </>
  );
};

export default Social;
