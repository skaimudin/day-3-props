import ItemCard from "@/components/item-card";
import Image from "next/image";

export default function Home() {
  let linkImage ="https://cdn2.thecatapi.com/images";
  return (
    <main className=""> 
      <h1>Hallo</h1>
      
    <div className="flex justify-center p-3">
      <div className="grid grid-cols-4 gap-5 bg-slate-400 px-6 pt-4 pb-2">
      <ItemCard name="Abyssinian" imgCat={`${linkImage}/ahg.jpg`} />
      <ItemCard name="Kucing" imgCat={`${linkImage}/MpbvLoqT3.jpg`} />
      <ItemCard name="Merah" imgCat={`${linkImage}/chn.jpg`} />
      <ItemCard name="Biru" imgCat={`${linkImage}/a5a.jpg`}/>
      <ItemCard name="Orange" imgCat={`${linkImage}/bbp.jpg`}/>
      <ItemCard name="Kuning" imgCat={`${linkImage}/MK-sYESvO.jpg`}/>
      </div>
    </div>
    </main>
  );
}
