const mockResponse = {
    data:{
        results:[
            {
                name:{
                    first:"Scherlock",
                    last:"Holmes"
                },
                picture:{
                    large:"https://randomuser.me/api/portraits/men/0.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/0.jpg"
                },
                login:{
                    username:"ThePonyGoat"
                }
            }
        ]
    }
}

export default {
    get: jest.fn().mockReturnValue(mockResponse)
}