import styles from "./card.module.css"
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>

          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>12.30.2023 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </Link>
            <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet justo vel mauris aliquam tincidunt. Fusce vel magna sed neque ullamcorper volutpat. Integer ut arcu eu lectus bibendum feugiat. Ut ac velit ac nisl facilisis laoreet. Sed eu nunc nec dolor efficitur feugiat. Suspendisse potenti. Praesent euismod tortor nec massa tincidunt, ac malesuada nisl consectetur. In hac habitasse platea dictumst. Phasellus sed ultricies nunc. Vivamus quis ultrices dolor.
            </p>
            <Link href="/" className={styles.link}>Read More</Link>
            </div>       
    </div>
  );
};

export default Card;
