class ProductManager{
    #Products
    #error
    constructor() {
        this.#Products =[]
        this.#error = undefined
    }

    
    getProducts = () => this.#Products

    getproductById = (id) => {
        const product = this.#Products.find(item =>item.id === id)
        if (!product) return 'Not Found'
        return product
       
    }

    #generateId =() => (this.#Products.length === 0) ? 1: this.#Products[this.#Products.length-1].id +1
    
    #validateProduct = (title, description ,price, thumbnail, code, stock) =>{    
         if (!title || !description || !price || !thumbnail ||!code ||!stock) {
            this.#error = `[${name}]: campos incompletos`
         } else{
            const found = this.#Products.find(item => item.code === code)
            if(found) this.#error = `[${name}]: el codigo ya existe`
            else this.#error = undefined

         }
    }

    addProducts = (title, description ,price, thumbnail, code, stock) => {
        this.#validateProduct(title, description, price, thumbnail, code, stock)
        if (this.#error === undefined)
            this.#Products.push({id: this.#generateId(), title, description, price, thumbnail, code, stock})
        else 
            console.log(this.#error)

    }
    
}

const productManager = new ProductManager()
productManager.addProducts ('Par de Puño Wirts','Modelo racing Goma blanca con textura y topes metalicos',7100, 'https://wirtz.com.ar/wp-content/uploads/2020/03/bar-end.png',001,20)
productManager.addProducts ('Cubre manos wirtz','modelo racing amarillo fluo ABS',9200, 'https://wirtz.com.ar/wp-content/uploads/2023/01/cubremanos-min-247x247.jpg',002 ,9)
productManager.addProducts ( 'Shiftera retractril universal','modelo wb-01 alu,imio mecanizado detalle rojo',12300, 'https://wirtz.com.ar/wp-content/uploads/2020/08/SHFT-WB-01-ASC-84-min-1-247x247.jpg',003,16)
productManager.addProducts ( 'Antiparras Wirtz cross','modelo ST-redWhite tornasolado naranja apto Pinlock',24400, 'https://wirtz.com.ar/wp-content/uploads/2022/09/St-RedWhite.jpg',004,3)
console.log(productManager.getProducts())
console.log(productManager.getproductById)
console.log(productManager.getproductById(2))
console.log(productManager.getproductById(1))
console.log(productManager.getproductById(7))