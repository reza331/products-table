export type Category = 'Laptop' | 'Phone' | 'Accessory' | 'Monitor'

export interface Product {
    id: number
    name: string
    category: Category
    price: number
    stock: number
}

export const products: Product[] = [
    {
        id: 1,
        name: 'MacBook Pro 14',
        category: 'Laptop',
        price: 1999,
        stock: 12,
    },
    {
        id: 2,
        name: 'ASUS ROG Strix G16',
        category: 'Laptop',
        price: 1799,
        stock: 8,
    },
    {
        id: 3,
        name: 'Lenovo Legion 5',
        category: 'Laptop',
        price: 1399,
        stock: 15,
    },
    {
        id: 4,
        name: 'Dell XPS 15',
        category: 'Laptop',
        price: 1899,
        stock: 5,
    },
    {
        id: 5,
        name: 'iPhone 16 Pro',
        category: 'Phone',
        price: 1099,
        stock: 20,
    },
    {
        id: 6,
        name: 'Samsung Galaxy S25 Ultra',
        category: 'Phone',
        price: 1299,
        stock: 14,
    },
    {
        id: 7,
        name: 'Google Pixel 9 Pro',
        category: 'Phone',
        price: 999,
        stock: 9,
    },
    {
        id: 8,
        name: 'Xiaomi 15',
        category: 'Phone',
        price: 799,
        stock: 25,
    },
    {
        id: 9,
        name: 'Logitech MX Master 3S',
        category: 'Accessory',
        price: 99,
        stock: 30,
    },
    {
        id: 10,
        name: 'Keychron K8 Pro',
        category: 'Accessory',
        price: 109,
        stock: 18,
    },
    {
        id: 11,
        name: 'Sony WH-1000XM5',
        category: 'Accessory',
        price: 349,
        stock: 11,
    },
    {
        id: 12,
        name: 'Samsung 990 PRO SSD 2TB',
        category: 'Accessory',
        price: 179,
        stock: 22,
    },
    {
        id: 13,
        name: 'LG UltraGear 27GP850',
        category: 'Monitor',
        price: 399,
        stock: 7,
    },
    {
        id: 14,
        name: 'ASUS TUF Gaming VG27AQ',
        category: 'Monitor',
        price: 329,
        stock: 13,
    },
    {
        id: 15,
        name: 'Dell UltraSharp U2723QE',
        category: 'Monitor',
        price: 549,
        stock: 0,
    },
]