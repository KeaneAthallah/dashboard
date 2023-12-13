import React from "react"
import styles from "@/components/dashboard/products/addProduct/addproduct.module.css"

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="harga" name="price" />
        <input type="number" placeholder="Stock" name="stock" />
        <input type="text" placeholder="Warna" name="color" />
        <input type="text" placeholder="Ukuran" name="size" />
        <textarea
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"></textarea>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddProductPage
