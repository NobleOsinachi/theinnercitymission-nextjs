'use client';
import { useRouter } from "next/navigation";

// import { useRouter } from "next/router";


const About = () => {
    const images = [1, 2, 3];
    const router = useRouter();

    return (

        <section className="w-screen mt-12">

            <div className="flex flex-1 justify-start items-center flex-col gap-6 
            " >
                <h5 className="font-bold
                
                  
                text-4xl

">Activities</h5>

                <p className="text-2xl uppercase font-light">
                    EduHub Institute of Technology
                </p>
                <p className="w-3/5 text-center text-2xl" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat aspernatur exercitationem atque ipsam temporibus similique sequi fugit omnis distinctio aliquid, numquam facere officiis iusto delectus praesentium ut adipisci sapiente illo, suscipit porro eligendi soluta optio. Non incidunt, ut dolores rerum nihil laudantium vero aspernatur facilis animi cupiditate, ad veritatis.
                </p>
                {/* Ctrl f2 = senior brother of ctrl D */}

                <div className="flex justify-center items-center gap-10">
                    {images.map(image => <img

                        key={image}
                        className="w-1/4 shadow-lg hover:shadow-2xl"
                        src={`/images/image-${image}.png`}

                        alt={`image ${image}`}


                    />)}
                </div>


                <button className="border-red-500
                border-2
                p-2 
                rounded-md"
                    onClick={() => {


                        router.push("/services");

                    }}


                >
                    View more
                </button>

            </div>


        </section>
    );
};

export default About;
