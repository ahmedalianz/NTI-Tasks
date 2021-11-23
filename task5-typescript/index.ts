interface ISizes{
    size:string
    q:number
}
interface ICategories{
    category:string
}
interface IProduct{
    name:string
    price:number
    size:string
    category:string
}
class Product{
    products:IProduct[]=[]
    size:ISizes[]=[]
    category:ICategories[]=[]
    addCategory(singleCategory:ICategories){
        this.category.push(singleCategory)
    }
    countCatgs():void{
        console.log(this.category.length)
    }
    addSize(singleSize:ISizes){
        this.size.push(singleSize)
    }
    deleteSize(size:string){
        this.size=this.size.filter(s => s.size!=size)
    }
    addProduct(singleProduct:IProduct){
        this.products.push(singleProduct)
    }
    countProducts():void{
        console.log(this.products.length)
    }
}
const p=new Product()
p.addProduct({name:'mobile',price:5000,size:"m",category:"phones"})
p.addProduct({name:'tv',price:8000,size:"l",category:"tvs"})
p.addCategory({category:"phones"})
p.addCategory({category:"tvs"})
p.addSize({size:"m",q:2})
p.addSize({size:"s",q:4})
p.addSize({size:"m",q:5})
p.countCatgs()
p.countProducts()
p.deleteSize('m')
console.log(p)