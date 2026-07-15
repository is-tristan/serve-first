// Components
import Banner from "@/components/sections/banner/banner";
import RoleContext from "@/components/sections/role-context/role-context";
import HowItWorks from "@/components/sections/how-it-works/how-it-works";
import ProductHighlight from "@/components/sections/product-highlight/product-highlight";

// Data
import { roleContextData, howItWorksData } from "./data";

export default function CXLeader() {

    return (

        <>

            <Banner
                eyebrow="For customer experience leaders"
                title="Own the customer experience across every site"
                description="Serve First gives CX leaders one live view of customer sentiment across every location, and the tools to turn it into action, so you move from measuring experience to improving it."
                image="/images/solutions/by-role/cx-leaders/cx_leaders_hero_customer_experience_score_overview.png"
                imageSizing="Contain"
            />

            <RoleContext
                eyebrow="Built for CX leaders"
                title="Not measuring experience. Improving it"
                description="If you own customer experience across a multi-site business, you already have scores. What you need is to see what is behind them and put it right, everywhere."
                data={roleContextData}
            />

            <HowItWorks
                eyebrow="How it works"
                title="From customer signal to closed loop"
                description="Three stages run every signal from capture to a fix."
                data={howItWorksData}
            />

        </>

    )

}