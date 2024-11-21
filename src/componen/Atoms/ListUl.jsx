const ListUl = ({ className, items = [], classli }) => {
  return (
    <ul className={`${className}`}>
      {items.map((item, index) => (
        <li className={classli} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListUl;
