import styles from "./Title.module.scss";

const Title = ({ as = "h1", children, style={}}) => {
  const Tag = as;

  return (
    <Tag className={`${styles.title}`} style={style}>
      {children}
    </Tag>
  );
};

export default Title;
