import { Item } from './models/item.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService {
  price = 10000;
  name = 0;
  cartList: Item[] = [];
  getAllCart(): any {
    return {
      data: this.cartList,
    };
  }

  getItemById(id: string) {
    console.log(id);
    for (let i = 0; i < this.cartList.length; i++) {
      if (this.cartList[i].id == id) {
        console.log(this.cartList[i]);
        return {
          message: 'Lấy về sản phẩm thành công',
          data: this.cartList[i],
        };
      }
    }
    throw Error('Không tìm thấy sản phẩm');
  }

  addCart(item: Item) {
    item.id = Date.now().toString();
    item.price = this.price += 5000;
    const name = (this.name++).toString();
    item.name = 'Gà giòn ' + name;
    item.quantity = 5;
    this.cartList.push(item);
    return {
      message: 'Thêm thành công',
    };
  }

  updateItem(id: string, newItem: Item) {
    for (let i = 0; i < this.cartList.length; i++) {
      if (this.cartList[i].id == id) {
        this.cartList[i] = { ...this.cartList[i], ...newItem };
        return {
          message: 'Cập nhật thành công',
          data: this.cartList[i],
        };
      }
    }
    throw Error('Không tim thấy item để cập nhật');
  }

  delete(id: string) {
    for (let i = 0; i < this.cartList.length; i++) {
      if (this.cartList[i].id == id) {
        this.cartList.splice(i, 1);
        return {
          message: 'Đã xóa',
          data: this.cartList,
        };
      }
    }
    throw Error('Không tìm thấy item có id trùng khớp');
  }

  searchItemByName(name: string) {
    const arr: Item[] = [];
    let j = 0;
    for (let i = 0; i < this.cartList.length; i++) {
      if (this.cartList[i].name == name || /^[G a0-9]/.test(name)) {
        arr[j] = this.cartList[i];
        j++;
      }
    }
    return {
        //message: 'Tìm thấy sản phẩm có tên: ' + name,
        data: arr,
      };
  }

  getTotalPrice(){
    let total = 0;
    for(let i = 0;i < this.cartList.length;i++){
        total += (this.cartList[i].price*this.cartList[i].quantity);
    }
    return {
        message: 'Tổng tiền = ' + total,
    }
  }

//   searchItemByQuantity(){

//   }

}
