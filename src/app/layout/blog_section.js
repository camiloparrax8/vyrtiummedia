import Card from "../components/card";
import SectionTitle from "../components/section-title";


export default function BlogSection() {

    const blogList = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet.",
            content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
            image: "/images/card1.jpg",
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet.",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
            image: "/images/card2.jpg",
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet.",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
            image: "/images/card3.jpg",
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit amet.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
            image: "/images/card4.jpg",
        },
      ];

      
    return (
        <div className="flex flex-col h-full mt-8 mx-8 md:mx-20">
            <SectionTitle
                icon_url="/icons/profit.png"
                title="Aprender a operar cryptos nunca había sido tan fácil"
                highlight="operar cryptos"
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[90vw] mx-auto bg-red">
                {
                    blogList.map((card) => (
                        <Card key={card.id} title={card.title} content={card.content} image={card.image}></Card>
                    ))   
                }
            </div>
        </div>
    );
} 
