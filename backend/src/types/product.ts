
export type product = {
    id?: number;
    ptitle?: string;
    pdesc?: string;
    price?: string;
    discount?: string;
    priceafterdiscount?: string;
    category?: string;
    subcategory?: string[];
    brand?: string;
    colors?: string[];
    images?: string[];
    coverimage?: string;
    imagesData?: string[];
    imageCover?: string[];
    imageCoverData?: string[];
  };
  export type prodComment = {
    prodid?: number;
    id?: number;
    username?: string;
    text?: string;
    stars?: string;
    sumstar?: string;
    numstar?: string;
  };

  export  type popular = {
    pname: string;
    count: number;
  };
  