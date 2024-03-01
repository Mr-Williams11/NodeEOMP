import {pool} from '../config/config.js'

//USER FUNCTIONS
const getProducts = async()=>{
    const[prod] = await pool.query(`
    SELECT *
    FROM Products
    `)
    return prod
}
const getProduct = async(prodID)=>{
    const [prod] = await pool.query(`
    SELECT *
    FROM Products
    WHERE prodID = ?
    `,[prodID])
    return prod
}
const addProduct = async (prodID, prodName, quantity, amount, Category, prodUrl)=>{
    const [prod] = await pool.query(`
   INSERT INTO Products (prodID, prodName, quantity, amount, Category, prodUrl) VALUES (?,?,?,?,?,?)
    `,[prodID, prodName, quantity, amount, Category, prodUrl])
    return prod
}
const editProduct = async (prodName, quantity, amount, Category, prodUrl, prodID) => {
    try {
        const product = await pool.query(`
            UPDATE Products 
            SET prodName = ?, quantity = ?, amount = ?, Category = ?, prodUrl = ? 
            WHERE prodID = ?
        `,[prodName, quantity, amount, Category, prodUrl, prodID]);
        const edProduct = await getProducts(prodID);
        return edProduct;
    } catch (error) {
        console.error("Error editing product:", error);
        throw error;
    }
}
const deleteProduct = async (prodID)=>{
    const [user] = await pool.query(`
    DELETE FROM Products
    WHERE prodID = ?
    `,[prodID])
    return getProducts(user)
}

export{getProduct,getProducts,addProduct,editProduct,deleteProduct}