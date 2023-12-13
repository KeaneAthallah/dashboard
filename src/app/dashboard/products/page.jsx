import Pagination from "@/components/dashboard/pagination/pagination"
import Search from "@/components/dashboard/search/search"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import styles from "@/components/dashboard/products/products.module.css"

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a Product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/no-product.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Xiaomi
              </div>
            </td>
            <td>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident, officiis!
            </td>
            <td>$1000</td>
            <td>10.11.2023</td>
            <td>99</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
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

export default ProductsPage
