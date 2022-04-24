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
            image: '/images/p1.jpeg',
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
            category: 'Pants',
            image: '/images/p3.jpeg',
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
        },
        {
            name: 'Drippy Unisex Hoodie',
            slug: 'drippy-unisex-hoodie',
            category: 'clothes',
            image: '/images/drippy-gray-hoodie.jpeg',
            price: 55,
            countInStock: 35,
            brand: 'Drippy-clothes',
            rating: 4.7,
            numReviews: 32,
            description: 'High quality product'
        },
        {
            name: 'Drippy Short Cut Hoodie',
            slug: 'drippy-short-cut-hoodie2',
            category: 'clothes',
            image: '/images/drippy-short-cut-hoodie.jpeg',
            price: 45,
            countInStock: 98,
            brand: 'Drippy-clothes',
            rating: 4.6,
            numReviews: 32,
            description: 'High quality product'
        },
        {
            name: 'Drippy T-shirt',
            slug: 'drippy-t-shirt',
            category: 'clothes',
            image: '/images/drippy-t-shirt-white.jpeg',
            price: 25,
            countInStock: 98,
            brand: 'Drippy-clothes',
            rating: 4.6,
            numReviews: 32,
            description: 'High quality product'
        },
        {
            name: 'Drippy Jumpsuit Set',
            slug: 'drippy-jumpsuit-set',
            category: 'clothes',
            image: '/images/drippy-jumpsuit-set.jpeg',
            price: 90,
            countInStock: 15,
            brand: 'Drippy-clothes',
            rating: 4.7,
            numReviews: 20,
            description: 'High quality product'
        },
        {
            name: 'Drippy Backpack',
            slug: 'drippy-backpack',
            category: 'bag',
            image: '/images/drippy-backpack.jpeg',
            price: 40,
            countInStock: 35,
            brand: 'Drippy-accessories',
            rating: 4.6,
            numReviews: 32,
            description: 'High quality product'
        },
        {
            name: 'Drippy Doggie Bandana',
            slug: 'drippy-dog-bandana',
            category: 'clothes',
            image: '/images/drippy-dog-bandana.jpeg',
            price: 30,
            countInStock: 35,
            brand: 'Drippy-accessories',
            rating: 4.6,
            numReviews: 32,
            description: 'High quality product'
        },
        {
            name: 'Drippy Eco Bag',
            slug: 'drippy-eco-bag',
            category: 'bag',
            image: '/images/drippy-dog-bandana.jpeg',
            price: 15,
            countInStock: 100,
            brand: 'Drippy-accessories',
            rating: 4.6,
            numReviews: 32,
            description: 'High quality product'
        },

        {
            name: 'Drippy Apron',
            slug: 'drippy-apron',
            category: 'home-products',
            image: '/images/drippy-apron.jpeg',
            price: 15,
            countInStock: 98,
            brand: 'Drippy-home-products',
            rating: 4.6,
            numReviews: 32,
            description: 'High quality product'
        },
        {
            name: 'Drippy Reusable Bottle',
            slug: 'drippy-reusable-bottle',
            category: 'home-products',
            image: '/images/drippy-reusable-bottle.jpeg',
            price: 20,
            countInStock: 98,
            brand: 'Drippy-home-products',
            rating: 4.9,
            numReviews: 32,
            description: 'High quality product'
        },
        {
            name: 'Drippy Reusable Bottle With Handle',
            slug: 'drippy-reusable-bottle-with-handle',
            category: 'home-products',
            image: '/images/drippy-reusable-bottle-with-handle.jpeg',
            price: 22,
            countInStock: 98,
            brand: 'Drippy-home-products',
            rating: 4.9,
            numReviews: 32,
            description: 'High quality product'
        },
        {
            name: 'Drippy Tea Mug',
            slug: 'drippy-tea-mug',
            category: 'home-products',
            image: '/images/drippy-tea-mug.jpeg',
            price: 15,
            countInStock: 98,
            brand: 'Drippy-home-products',
            rating: 4.8,
            numReviews: 32,
            description: 'High quality product'
        },
        {
            name: 'Drippy Coffee Mug',
            slug: 'drippy-coffee-mug',
            category: 'home-products',
            image: '/images/drippy-coffee-mug.jpeg',
            price: 15,
            countInStock: 98,
            brand: 'Drippy-home-products',
            rating: 4.9,
            numReviews: 32,
            description: 'High quality product'
        },
        {
            name: 'Drippy Steel Cup',
            slug: 'drippy-steel-cup',
            category: 'home-products',
            image: '/images/drippy-metal-cup.jpeg',
            price: 10,
            countInStock: 98,
            brand: 'Drippy-home-products',
            rating: 4.8,
            numReviews: 32,
            description: 'High quality product'
        },



    ]
}

export default data;