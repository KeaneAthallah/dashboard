import React from "react"
import styles from "./rightbar.module.css"
import Image from "next/image"
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md"

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/minion.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Tersedia Sekarang ✨</span>
          <h3 className={styles.title}>
            Bagaimana cara menggunakan versi terbaru dari Admin Dashboard?
          </h3>
          <span className={styles.subtitle}>
            Hanya butuh 5 menit untuk dipelajari
          </span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            molestias voluptates. Amet minus perferendis aliquid incidunt dicta
            maiores optio molestiae repudiandae officia laboriosam, ipsam id
            earum voluptates, voluptate doloribus at.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/minion.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Tersedia Sekarang ✨</span>
          <h3 className={styles.title}>
            Bagaimana cara menggunakan versi terbaru dari Admin Dashboard?
          </h3>
          <span className={styles.subtitle}>
            Hanya butuh 5 menit untuk dipelajari
          </span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            molestias voluptates. Amet minus perferendis aliquid incidunt dicta
            maiores optio molestiae repudiandae officia laboriosam, ipsam id
            earum voluptates, voluptate doloribus at.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
