import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Ivana',
            email: 'ivana.cliffords@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true 
        },
        {
            name: 'Josh',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },

    ],
    products: [
        {
            name: 'Nike Slim Shirt',
            slug: 'nike-slim-shirt',
            category: 'Shirts',
            image:'/images/p1.jpeg',
            price: 120,
            countInStock: 30,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality shirt'
        },
        {
            name: 'Adidas Slim Shirt',
            slug: 'adidas-slim-shirt',
            category: 'Shirts',
            image: '/images/p2.jpeg',
            price: 100,
            countInStock: 10,
            brand: 'adidas',
            rating: 4,
            numReviews: 90,
            description: 'High quality shirt'
        },
        {
            name: 'Nike Slim Pants',
            slug: 'nike-slim-pant',
            category:  'Pants',
            image:'/images/p3.jpeg',
            price: 45,
            countInStock: 15,
            brand: 'Nike',
            rating: 3.5,
            numReviews: 14,
            description: 'High quality product'
        },
        {
            name: 'Adidas Slim Pants',
            slug: 'adidas-slim-pant',
            category: 'Pants',
            image: '/images/p4.jpeg',
            price: 65,
            countInStock: 5,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 20,
            description: 'High quality product'
        }
    ]
}

export default data;