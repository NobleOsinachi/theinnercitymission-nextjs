
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

export interface CardDesignProps {
  items: CardText[];
}

export interface CardText {
  title: string;
  description: string;
  btnText: string;
  buttonUrl: string;
  imageUrl: string;
  bgColour?: string;
  textColour?: string;
  btnColour?: string;
  btnTextColour?: string;

}

const CardDesign: FunctionComponent<CardDesignProps> = ({ items }) => {

  const defaultTextColour = "text-black";
  const defaultBgColour = "bg-white";
  const defaultBtnColour = "bg-yellow-500";
  const defaultBtnTextColour = "text-black";


  return (
    <>
      {items.length === 0 && <p>Empty items</p>}

      {items.map((item, index) => {
        const textColour = item.textColour || defaultTextColour;
        const bgColour = item.bgColour || (index % 2 === 0 ? "bg-icm-blue" : defaultBgColour);
        const btnColour = item.btnColour || defaultBtnColour;
        const btnTextColour = item.btnTextColour || defaultBtnTextColour;

        return (
          <div className="container w-[1200px] mx-auto px-16" key={index}>
            {/* + (index % 2 === 1) ? " flex-reverse-flesh" : ""} */}

            <div className={"flex  md:flex-row flex-col @h-max items-center " + bgColour + (index % 2 === 1 ? " md:flex-row-reverse" : "")}>

              <div className={textColour + " flex-1"}>
                <div className="p-10">
                  <h2 className="text-5xl font-bold">{item.title}</h2>
                  <p className="w-[500] py-5">{item.description}</p>



                  <Link href={item.buttonUrl}>
                    {/* <a className={btnColour + " rounded-full p-2"}>
                    <p className={btnTextColour}>{item.btnText}</p>
                  </a> */}


                    <button
                      data-href={item.buttonUrl} className={btnColour + " rounded-full p-2"}>
                      <p className={btnTextColour}>{item.btnText}</p>
                    </button>
                  </Link>


                </div>


              </div>

              <div className="flex-1">
                <Image src={item.imageUrl} alt="" width={600} height={600} />
              </div>
            </div>
          </div >
        );
      })}
    </>
  );
};

export default CardDesign;

