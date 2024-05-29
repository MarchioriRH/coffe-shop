/**
 * Interface for Coffee
 * @interface Coffee
 * @description Interface for Coffee
 */

export interface Coffee {
    id: number;
    name: string;
    type: string;
    price: number;
    stock: number;
    image: string;
    quantity: number;
    clearance: boolean;
}