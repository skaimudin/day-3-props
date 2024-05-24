import Image from "next/image";

interface Cat {
    name : string,
    imgCat : string
}

function ItemCard({name, imgCat}: Cat) {
    return (
        <div>
            <Image 
            src={imgCat}
            alt="name" 
            width={200} 
            height={334}
            />
            <h2 className="text-xl font-bold">{name}</h2>
        </div>
    );
    
}

export default ItemCard