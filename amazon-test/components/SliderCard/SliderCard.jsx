import styles from "./SliderCard.module.scss";

const SliderCard = (props) => {
  console.log(props);
  return (
    <div className={styles.sliderCard}>
      <div className={styles.sliderCard__logo}>
        <img
          src={props.slide.logo}
          alt="logo"
        />
      </div>

      <div className={styles.sliderCard__textWrapper}>
        {props.slide.text}

        <img className={styles.sliderCard__quote} src={props.slide.quote} alt="quote" />
      </div>

      <div className={styles.sliderCard__person}>
         <img src={props.slide.ava} alt="avatar" />

         <div className={styles.sliderCard__personInfo}>
            <p className={styles.sliderCard__personInfo_name}>{props.slide.name}</p>
            
            <p className={styles.sliderCard__personInfo_position}>{props.slide.position}</p>
         </div>
      </div>
    </div>
  );
};

export default SliderCard;
