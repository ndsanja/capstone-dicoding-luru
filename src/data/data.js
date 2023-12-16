const merchants = [
    {
        id: 1,
        pictureId: "https://images.unsplash.com/photo-1702165637553-5fb3e59b9210?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Kopiku",
        address: "Jl. Gatot Subroto No. 54",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        products: [
            {
                id: 5,
                name: "Caffe Latte",
                pictureId: "https://images.unsplash.com/photo-1702165639307-c9813c5f16ca?q=80&w=2738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                type: "Single Shoot",
                variant: "Original",
                price: 15000
            },
            {
                id: 6,
                name: "Vanilla Latte",
                pictureId: "https://images.unsplash.com/photo-1702165638250-0a9d62198c79?q=80&w=2754&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                type: "Single Shoot",
                variant: "Vanilla",
                price: 18000
            },
            {
                id: 7,
                name: "v60",
                pictureId: "https://images.unsplash.com/photo-1702165638516-43b096b7682f?q=80&w=2740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                type: "Original",
                variant: "Original",
                price: 16000
            },
            {
                id: 8,
                name: "Americano",
                pictureId: "https://plus.unsplash.com/premium_photo-1670469009826-db07ab733925?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                type: "Original",
                variant: "Original",
                price: 14000
            }
        ]
    },
    {
        id: 2,
        pictureId: "https://images.unsplash.com/photo-1702165638628-a9ffecdef0a0?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Caffe Latte",
        address: "Jl. Gatot Subroto No. 54",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        products: [
            {
                id: 5,
                name: "Caffe Latte",
                pictureId: "https://images.unsplash.com/photo-1702165639307-c9813c5f16ca?q=80&w=2738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                type: "Single Shoot",
                variant: "Original",
                price: 15000
            },
            {
                id: 6,
                name: "Vanilla Latte",
                pictureId: "https://images.unsplash.com/photo-1702165638250-0a9d62198c79?q=80&w=2754&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                type: "Single Shoot",
                variant: "Vanilla",
                price: 18000
            },
            {
                id: 7,
                name: "v60",
                pictureId: "https://images.unsplash.com/photo-1702165638516-43b096b7682f?q=80&w=2740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                type: "Original",
                variant: "Original",
                price: 16000
            },
            {
                id: 8,
                name: "Americano",
                pictureId: "https://plus.unsplash.com/premium_photo-1670469009826-db07ab733925?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                type: "Original",
                variant: "Original",
                price: 14000
            }
        ]
    },
    {
        id: 3,
        pictureId: "https://images.unsplash.com/photo-1702165639121-487be3d9e7da?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Wakanda Caffe",
        address: "Jl. Gatot Subroto No. 54",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        products: [
            {
                id: 5,
                name: "Caffe Latte",
                pictureId: "https://images.unsplash.com/photo-1702165639307-c9813c5f16ca?q=80&w=2738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                type: "Single Shoot",
                variant: "Original",
                price: 15000
            },
            {
                id: 6,
                name: "Vanilla Latte",
                pictureId: "https://images.unsplash.com/photo-1702165638250-0a9d62198c79?q=80&w=2754&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                type: "Single Shoot",
                variant: "Vanilla",
                price: 18000
            },
            {
                id: 7,
                name: "v60",
                pictureId: "https://images.unsplash.com/photo-1702165638516-43b096b7682f?q=80&w=2740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                type: "Original",
                variant: "Original",
                price: 16000
            },
            {
                id: 8,
                name: "Americano",
                pictureId: "https://plus.unsplash.com/premium_photo-1670469009826-db07ab733925?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                type: "Original",
                variant: "Original",
                price: 14000
            }
        ]
    },
    {
        id: 4,
        pictureId: "https://images.unsplash.com/photo-1702165638828-2377a9cc56a5?q=80&w=2754&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Latte",
        address: "Jl. Gatot Subroto No. 54",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        products: [
            {
                id: 5,
                name: "Caffe Latte",
                pictureId: "https://images.unsplash.com/photo-1702165639307-c9813c5f16ca?q=80&w=2738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                type: "Single Shoot",
                variant: "Original",
                price: 15000
            },
            {
                id: 6,
                name: "Vanilla Latte",
                pictureId: "https://images.unsplash.com/photo-1702165638250-0a9d62198c79?q=80&w=2754&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                type: "Single Shoot",
                variant: "Vanilla",
                price: 18000
            },
            {
                id: 7,
                name: "v60",
                pictureId: "https://images.unsplash.com/photo-1702165638516-43b096b7682f?q=80&w=2740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                type: "Original",
                variant: "Original",
                price: 16000
            },
            {
                id: 8,
                name: "Americano",
                pictureId: "https://plus.unsplash.com/premium_photo-1670469009826-db07ab733925?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                type: "Original",
                variant: "Original",
                price: 14000
            }
        ]
    }
]

function searchMerchant(keyword) {
    return merchants.filter((merchant) => merchant.title.toLowerCase().includes(keyword.toLowerCase()));
}

function getMerchant(id) {
    if (!id) {
        return null;
    }

    const filteredMerchant = merchants.filter((merchant) => merchant.id === id);

    if (!filteredMerchant.length) {
        return null;
    }

    return filteredMerchant[0];
}

export { searchMerchant, merchants, getMerchant }