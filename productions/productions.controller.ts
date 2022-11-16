import { Get, Query } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { Item } from 'src/cart/models/item.model';
import { ProductionsService } from './productions.service';

@Controller('productions')
export class ProductionsController {
    constructor(private readonly ProductService: ProductionsService){}

    @Get('/')
    async get(@Query('id') id: string,): Promise<{data?: Item[] | Item; message?:string, error?:string}> {
        try{
            if(id && id != ''){
                const result = await this.ProductService.getById(id);
                return {
                    data: result,
                }
            }else{
                const result = await this.ProductService.getAll();
                return {
                    data: result,
                }
            }
        }catch(err){
            return {
                message: 'Lấy dữ liệu thất bại', error: err.message,
            }
        }
    }


    @Post()
    async create(@Body() newProduct: Item){
        try{
            this.ProductService.create(newProduct);
            return {
                message: "Tạo sản phẩm thành công",
            }
        }catch(Error){
            return{
                message: Error.message,
            }
        }
    }

    
}
