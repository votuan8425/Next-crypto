import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name: 'Yun',
            email: 'sgkcd1231@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Thomas',
            email: 'ngocthien10a5@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        }
    ],
    products: [
        {
            name: 'Bitcoin',
            slug: 'bitcoin',
            category: 'Top-Coin',
            image: '/images/bitcoin.png',
            price: 30.000,
            rating: 5.0,
            numReviewer: 10,
            countInStock: 9999,
            description: 'A popular coin',
            brand: 'Top Coin'
        },
        {
            name: 'ETH',
            slug: 'eth',
            category: 'Top-Coin',
            image: '/images/eth.png',
            price: 1.500,
            rating: 4.0,
            numReviewer: 10,
            countInStock: 3999,
            description: 'A popular coin',
            brand: 'Top Coin'
        },
        {
            name: 'FTT',
            slug: 'FTT',
            category: 'Coin Floor',
            image: '/images/ftt.png',
            price: 1.000,
            rating: 5.0,
            numReviewer: 10,
            countInStock: 2,
            description: 'A popular coin',
            brand: 'Coin Floor'
        },
        {
            name: 'Near',
            slug: 'near',
            category: 'Coin',
            image: '/images/near.png',
            price: 5,
            rating: 5.0,
            numReviewer: 88,
            countInStock: 59,
            description: 'A popular coin',
            brand: 'AltCoin'
        },
        {
            name: 'Shiba',
            slug: 'shiba',
            category: 'Meme-Coin',
            image: '/images/shiba.png',
            price: 1,
            rating: 5.0,
            numReviewer: 10,
            countInStock: 99999,
            description: 'A Meme coin',
            brand: 'Meme Coin'
        }
    ]
}

export default data;