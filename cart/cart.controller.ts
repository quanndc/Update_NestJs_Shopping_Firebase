import { Item } from './models/item.model';
import { CartService } from './cart.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService : CartService){}

    @Get('/all')
    getAllCart(){
        return this.cartService.getAllCart();
    }


    @Get('/getById/:id')
    getItemById(@Param('id') id: string){
        try{
            return this.cartService.getItemById(id);
        }catch(error){
            return {
                message: error.message,
            }
        }
    }
    @Get('/getByName/:name')
    getItemByName(@Param('name') name: string){
        try{
            return this.cartService.searchItemByName(name);
        }catch(error){
            return {
                message: error.message,
            }
        }   
    }

    @Get('/totalPrice')
    getTotalPrice(){
        return this.cartService.getTotalPrice();
    }

    @Post('/add')
    add(@Body() item: Item){
        return this.cartService.addCart(item);
    }
    
    @Put('/update/:id')
    update(@Body() newItem: Item, @Param('id') id: string){
        try{
            this.cartService.updateItem(id, newItem);
        }catch(error){
            return {
                message: error.message,
            }
        }
    }

    @Delete('/delete/:id')
    delete(@Param('id') id: string){
        try{
            this.cartService.delete(id);
        }catch(error){
            return {
                message: error.message,
            }
        }
    }
}
