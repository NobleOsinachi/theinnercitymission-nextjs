import { FunctionComponent } from "react";

const items: StatisticsProps[] = [
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

export interface StatisticsProps {
    amount: string;
    item: string;
    action: string;
    url: string;
}

const Statistics: FunctionComponent = () => {
    return (
        <section className="w-screen container mx-auto md:px-16 ">

            { /* ICM Blue rgb (0,127,222) */}

            <div className="statistics text-white  mx-auto  flex flex-col md:flex-row  h-max align-middle bg-blue-500 justify-between items-center ">

                {items.map(item => (
                    <div
                        key={item.url}
                        className="flex-row m-10 p-4 text-white text-center"
                    >
                        <h2 className="font-montserrat text-6xl text-center">{item.amount} </h2>
                        <h4 className="text-2xl text-center mb-10"
                        >
                            <p dangerouslySetInnerHTML={{ __html: item.item.split(' ').join('<br />').toUpperCase() }} />
                        </h4>
                        <a className="text-center border p-2 mt-10" href={item.url}>{item.action.toUpperCase()}</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Statistics;
