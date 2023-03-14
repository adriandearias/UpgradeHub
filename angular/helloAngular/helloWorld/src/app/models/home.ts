// export interface Home {
//     name:String;
//     desc:Desc;
//     arrayNumber: Number[]
// }

// export interface Desc{
//     number:Number;
//     image:Image;
// }

// export interface Image{
//     src:String;
//     alt:String;
// }

export interface Home {
    name:String;
    desc:{
        number:Number;
        image:{
            src:String;
            alt:String;   
        };
    }
    arrayNumber: Number[]
}