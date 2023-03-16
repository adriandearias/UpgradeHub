export interface ProductI{
    createdAt?: string;
    name:string;
    color: string;
    price: string;
    description: string;
    image: string;
    materials: ProductMaterial;
    id: string;
}

// export enum ProductMaterial{
//     STEEL = 'Steel',
//     COTTON = 'Cotton',
//     METAL= 'Metal',
//     FRESH = 'Fresh',
//     CONCRETE = 'Concrete',
//     GRANITE = 'Granite',
//     FROZEN = 'Frozen',
//     RUBBER = 'Rubber',
//     WOODEN = 'Wooden',
//     SOFT = 'Soft'
// }


export type ProductMaterial = 'Steel'
| 'Metal'
| 'Cotton'
| 'Metal'
| 'Fresh'
| 'Concrete'
| 'Granite'
| 'Frozen'
| 'Rubber'
| 'Wooden'
| 'Soft';