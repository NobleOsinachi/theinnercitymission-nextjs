'use client';
import { useRouter } from "next/navigation";
import Image from "next/image";

const About = () => {
    const images = [1, 2, 3];
    const router = useRouter();

    return (

        <section className="w-screen mt-12">

            <div className="flex flex-1 justify-start items-center flex-col gap-6 " >
                <h5 className="font-bold text-4xl">Activities</h5>


                <p className="text-2xl uppercase font-light">
                    EduHub Institute of Technology
                </p>
                <p className="w-3/5 text-center text-2xl" >
                    At EDUHUB Institute of Technology, students can engage in a variety of activities that complement their academic journey and provide a well-rounded learning experience. The institute understands the importance of extracurricular activities in fostering personal growth, building teamwork skills, and promoting a healthy work-life balance. With this in mind, the website offers a range of activities for students to participate in.

                </p>

                <p className="w-3/5 text-center text-2xl" >
                    One of the key activities at EDUHUB is hackathons and coding competitions. These events provide students with an opportunity to showcase their technical skills and problem-solving abilities in a competitive environment. Participating in hackathons not only helps students refine their coding expertise but also encourages creativity and collaboration. Moreover, it allows them to network with industry professionals and potential employers, opening doors to internships and job opportunities.


                </p>
                <p className="w-3/5 text-center text-2xl" >
                    Additionally, the institute organizes tech talks and workshops conducted by industry experts. These sessions give students insights into the latest trends and advancements in the tech industry, helping them stay updated and relevant in their field of study. The interactive nature of these events allows students to ask questions, seek advice, and gain practical knowledge from experienced professionals. By actively engaging in such activities, students at EDUHUB Institute of Technology can enhance their academic learning and prepare themselves for a successful career in the technology sector.
                </p>

                <p className="text-[22px]">
                    Text 22 px
                </p>

                {/* Ctrl f2 = senior brother of ctrl D */}

                <div className="flex justify-center items-center gap-10">
                    {images.map(image =>
                        <Image
                            key={image}
                            className="w-1/4 shadow-lg hover:shadow-2xl"
                            src={`/images/image-${image}.png`}
                            alt={`image ${image}`}
                        />)}
                </div>


                <button className="border-red-500 border-2  p-2   rounded-md"
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
