const Laptop = (props) => {
  const { img, title, vendor } = props;

  return (
    <article className='laptop'>
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{vendor} </h4>
    </article>
  );
};

export default Laptop;
