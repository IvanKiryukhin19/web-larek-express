import { model, Schema } from 'mongoose';

type TImage = {
  fileName: string;
  originalName: string;
};

interface IProduct {
  title: string;
  image:TImage;
  category:string;
  description?:string;
  price?:number|null;
}

const productImage = new Schema<TImage>({
  fileName: {
    type: String,
    required: true,
  },
  originalName: {
    type: String,
    required: true,
  },
});

export const productSchema = new Schema<IProduct>({
  title: {
    type: String,
    unique: true,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  image: productImage,
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    default: null,
  },
});

export default model<IProduct>('product', productSchema);
