export enum status {
    waiting,
    cancel,
    complete
  }
  

export type order = {
    id?: number;
    userinfo?: string;
    address?: string;
    price?: string;
    items?: string;
    user_id: number;
    order_status?: status;
  };