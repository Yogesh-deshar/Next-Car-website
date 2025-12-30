type CarType ={
    id: number,
    brand: string,
    image: string,
    model: string,
    year: number,
    carType: string
}

export const CarData : CarType[] = [
    {
        id:1,
        brand: "Toyota",
        image: "https://di-uploads-pod3.dealerinspire.com/riversidetoyota/uploads/2018/12/2019-Toyota-Corolla-L-123118-copy.png",
        model: "Corolla",
        year: 2020,
        carType: "Sedan"
    },
      {
        id:2,
        brand: "Honda",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3mMqcRYCJDeEBVysy-BNQ07cXezqh7bf-LQ&s",
        model: "Civic",
        year: 2020,
        carType: "Sedan"
    },
      {
        id:3,
        brand: "Honda",
        image: "https://www.cnet.com/a/img/resize/33093805db71a08e5a79cd5cfeb52f8db8d8d1f2/hub/2020/06/08/4c5a5a0e-5c31-47b3-9d84-72e21e7fed08/civic-rear.jpg?auto=webp&width=768",
        model: "Civic",
        year: 2020,
        carType: "Hatchback"
    },
      {
        id:4,
        brand: "Mercedes",
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/187171/eqs-suv-exterior-right-front-three-quarter-4.png?isig=0&q=80",
        model: "EQS",
        year: 2020,
        carType: "SUV"
    }
]