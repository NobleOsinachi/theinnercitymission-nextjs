import Image from "next/image";

export interface ImgTxtAlt {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    imageUrl: string;
    bgColour?: string;
    textColour?: string;
}

const featuredCampaign: ImgTxtAlt =
{
    title: "#SP.A.C.E Campaign: Breaking Barriers, Coloring Dreams!",
    description: "SP.A.C.E is an impactful initiative dedicated to transforming the lives of indigent children through the power of education. Every child deserves the opportunity to learn and fulfill their God-given potential. Join us to make a lasting impact on the lives of indigent children by empowering them with education.",
    buttonText: "Donate",
    buttonUrl: "/donate",
    imageUrl: "https://theinnercitymission.ngo/wp-content/themes/praisegeekmpt/assets/images/SP.A.C.E-Card-1.jpg",
    bgColour: "bg-white",
    textColour: "text-black"
};

const callToActionItems: ImgTxtAlt[] = [
    {
        title: "Fundraise With Us",
        description: "By becoming a fundraiser, you have the power to make a direct impact on the lives of indigent children. Your dedicated efforts will pave the way for enhanced access to quality education, enabling indigent children to break free from the vicious cycle of poverty. Remember Every Child is Your Child.",
        buttonText: "Learn More",
        buttonUrl: "/fundraise",
        imageUrl: "https://theinnercitymission.ngo/wp-content/themes/praisegeekmpt/assets/images/FUNDRAISE-ECARD-RESIZED.jpg"
    },
    {
        title: "Volunteer With Us",
        description: "Join the Humanitarian Volunteer Network (HVN) to make a tangible impact on the lives of indigent children and families in need. Through our Sponsor a Child's Education (SP.A.C.E) initiative, you can help provide quality education to indigent children.",
        buttonText: "Learn More",
        buttonUrl: "/volunteer",
        imageUrl: "https://theinnercitymission.ngo/wp-content/themes/praisegeekmpt/assets/images/HVN-WEBSITE-RESIZED.jpg"

    },
    {
        title: "Praying for the Needy",
        description: `When we pray together, we establish God’s plans and purpose in the lives of the vulnerable and downtrodden! Speak up for those who can not speak for themselves...
        Proverbs 31:8-9 [NIV] Every Thursday, 8pm GMT+ 1`,
        buttonText: "Join Now",
        buttonUrl: "/prayer",
        imageUrl: "https://theinnercitymission.ngo/wp-content/themes/praisegeekmpt/assets/images/children-praying.jpg"
    }
];

const CallToAction = () => {

    return (


        <div className="CallToAction container mx-auto px-16">


            <div className="flex flex-col md:flex-row h-max items-center bg-white">
                <div className="p-10 text-black flex-1 md:order-first ">
                    {/* <!-- Add "flex-1" to make it take equal width --> */}
                    <h2 className="text-5xl font-bold  ">Title</h2>
                    <p className="w-full py-5 ">
                        tae sapiente. Suscipit excepturi commodi voluptatibus voluptatum aliquid, saepe labore corrupti, temporib aperiam quisquam et ducimus ullam unde? Molestias commodi veritatis tenetur qui, in rerum vero quisquam magni eveniet ex iure omnis officia perspiciatis perferendis sit. Inventore iste accusamus animi quidem sit, recusandae facere culpa debitis delectus autem odit, deserunt veritatis, minima laboriosam quisquam esse reprehenderit magnam quae.

                    </p>

                    <button className="bg-yellow-500 rounded-full p-2">
                        Take Action
                    </button>

                </div>
                <div className="flex-1">
                    {/* <!-- Add "flex-1" to make it take equal width --> */}
                    <Image
                        src="https://theinnercitymission.ngo/wp-content/themes/praisegeekmpt/assets/images/children-praying.jpg"
                        alt=""
                        width={600}
                        height={600}
                    />
                </div>
            </div>


        </div>

    );
}


export default CallToAction;

