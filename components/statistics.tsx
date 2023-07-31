export interface Stats {
    amount: string;
    item: string;
    action: string;
    url: string;
}


export default function Statistics() {

    const items: Stats[] = [
        {
            amount: "1M+",
            item: "households reached",
            action: "watch our 2022 report",
            url: "/video/impact-report"

        },

        {
            amount: "700M+",
            item: "meals distributed",
            action: "make a difference",
            url: "/donate"

        },
        {
            amount: "100+",
            item: "countries reached",
            action: "see the impact",
            url: "/video/impact-report"

        }


    ];

    return (


        <section className="w-screen">


            { /* ICM Blue rgb (0,127,222) */}


            <div className=" text-white  ml-auto mr-auto statistics flex flex-row h-max align-middle w-4/5 bg-blue-500 justify-between items-center ">


                {items.map(item => (

                    <center>

                        <div
                            className="flex-row m-10 p-2 text-white text-center "
                        >

                            <h2 className="font-montserrat text-6xl text-center">{item.amount} </h2>
                            <h4 className="text-2xl text-center mb-10"

                            >

                                <p dangerouslySetInnerHTML={{ __html: item.item.split(' ').join('<br />').toUpperCase() }} />



                            </h4>
                            {/* <br /> */}
                            <a className="text-center border p-2 mt-10" href={item.url}>{item.action.toUpperCase()}</a>
                        </div>
                    </center>

                ))}





            </div>
        </section>

    );
}
