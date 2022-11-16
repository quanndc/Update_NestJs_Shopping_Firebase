import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin'
import { Item } from 'src/cart/models/item.model';
@Injectable()
export class ProductionsService {
    productCollection = admin.firestore().collection('product');


    async getAll(){
        const request = await this.productCollection.get();
        const result = request.docs.map((value) => {
            return value.data() as Item;
        })
        return result;
    }

    async getById(id: string){
        const result = (await this.productCollection.doc(id).get()).data() as Item;
        return result;
    }

    async create(newProduct: Item){
        const id = Date.now().toString();
        return await this.productCollection.doc(id).set({...newProduct, id});
    }
}
