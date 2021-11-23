var Product = /** @class */ (function () {
    function Product() {
        this.products = [];
        this.size = [];
        this.category = [];
    }
    Product.prototype.addCategory = function (singleCategory) {
        this.category.push(singleCategory);
    };
    Product.prototype.countCatgs = function () {
        console.log(this.category.length);
    };
    Product.prototype.addSize = function (singleSize) {
        this.size.push(singleSize);
    };
    Product.prototype.deleteSize = function (size) {
        this.size = this.size.filter(function (s) { return s.size != size; });
    };
    Product.prototype.addProduct = function (singleProduct) {
        this.products.push(singleProduct);
    };
    Product.prototype.countProducts = function () {
        console.log(this.products.length);
    };
    return Product;
}());
var p = new Product();
p.addProduct({ name: 'mobile', price: 5000, size: "m", category: "phones" });
p.addProduct({ name: 'tv', price: 8000, size: "l", category: "tvs" });
p.addCategory({ category: "phones" });
p.addCategory({ category: "tvs" });
p.addSize({ size: "m", q: 2 });
p.addSize({ size: "s", q: 4 });
p.addSize({ size: "m", q: 5 });
p.countCatgs();
p.countProducts();
p.deleteSize('m');
console.log(p);
