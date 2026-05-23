import { notFound } from "next/navigation";
import CaseStudyDetailClient from "../../components/case-studies/CaseStudyDetailClient";
import { caseStudies, getCaseStudyBySlug } from "../../data/case-studies";

type CaseStudyPageProps = {
	params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
	return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
	const { slug } = await params;
	const caseStudy = getCaseStudyBySlug(slug);

	if (!caseStudy) {
		return {};
	}

	return {
		title: `${caseStudy.title} | Case Studies`,
		description: caseStudy.summary,
	};
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
	const { slug } = await params;
	const caseStudy = getCaseStudyBySlug(slug);

	if (!caseStudy) {
		notFound();
	}

	return <CaseStudyDetailClient caseStudy={caseStudy} />;
}
