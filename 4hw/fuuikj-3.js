class PaginationHelper {
    constructor(pages, item) {
        this.pages = pages;
        this.item = item;
    }
    // розрахунок пагінації : 6 елементів в масиві,на кожну ст по 4, висновок - 2
    pageCount() {
    return Math.ceil(this.pages.length / this.item);
    }
    // скільки елементів в масиві
    itemCount(){
        return this.pages.length;
    }
    // скільки елементів на 1(0) сторінці
    pageItemCount(pageNum){
        if(pageNum< 0 || pageNum >= this.pageCount()){
            return -1;
        }
        if(pageNum === this.pageCount() - 1){
        return this.pages.length % this.item || this.item;
        }
        return this.item;
    }
    // на якій із сторінок заданий намбер елементу
    pageIndex(itemIndex){
        if(itemIndex < 0 || itemIndex >= this.pages.length){
            return -1;
        }
    
        return Math.floor(itemIndex / this.item)
    }
}
let helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(helper.pageCount());
console.log(helper.itemCount());
console.log(helper.pageItemCount(0));
console.log(helper.pageItemCount(1));
console.log(helper.pageItemCount(2));
console.log(helper.pageIndex(5));
console.log(helper.pageIndex(2));
console.log(helper.pageIndex(20));
console.log(helper.pageIndex(-10));
