import React from "react"
import styles from "@/components/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image"

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/no-image.png" alt="" fill />
        </div>
        Keane Athallah
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Keane" />
          <label>Email</label>
          <input type="email" name="email" placeholder="Keane@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+123123123" />
          <label>Addres</label>
          <textarea type="text" name="address" placeholder="Palu" />
          <label>is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleUserPage
