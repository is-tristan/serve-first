// Components
import CxIsBroken from "@/components/cx-is-broken/cx-is-broken";

// SEO
import { cxIsBrokenMetadata, cxIsBrokenViewport } from "@/components/cx-is-broken/seo";

export const metadata = cxIsBrokenMetadata;

export const viewport = cxIsBrokenViewport;

export default function CxIsBrokenPage() {

    return <CxIsBroken />;

}
