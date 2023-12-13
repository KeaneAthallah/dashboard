import React from "react"
import styles from "@/components/dashboard/users/users.module.css"
import Search from "@/components/dashboard/search/search"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/components/dashboard/pagination/pagination"

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a User..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/no-image.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Kenn
              </div>
            </td>
            <td>kenn@gmail.com</td>
            <td>10.11.2023</td>
            <td>Administrator</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default UsersPage
