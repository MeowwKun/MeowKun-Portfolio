import CaseStudiesIndexClient from "../components/case-studies/CaseStudiesIndexClient";
import { caseStudies } from "../data/case-studies";

export const metadata = {
	title: "Case Studies | MeowKun",
	description: "Premium UX/UI case studies for STUDIO_STRUCT, Voyager, and Canvasly.",
};

export default function CaseStudiesPage() {
	return <CaseStudiesIndexClient caseStudies={caseStudies} />;
}
