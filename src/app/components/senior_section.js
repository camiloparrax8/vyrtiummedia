import Card from "./card";
import SectionTitle from "./section-title";

export default function SeniorSection() {

    const blogList = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet.",
            content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
            image: "/images/senior-one.jpeg",
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet.",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
            image: "/images/senior-two.jpeg",
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet.",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
            image: "/images/senior-three.jpeg",
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit amet.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
            image: "/images/senior-four.jpeg",
        },
      ];

      
    return (
        <div className="flex flex-col h-full mt-8 mx-8 md:mx-20">
            <SectionTitle
                icon_url="/icons/daimond.png"
                title="Aprende y operar con nuestros expertos"
                highlight="Aprende y operar"
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
