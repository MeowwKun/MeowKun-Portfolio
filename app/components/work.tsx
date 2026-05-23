import { projectStories } from "../data/projects";
import AccentCard from "./ui/AccentCard";
import SectionHeader from "./ui/SectionHeader";

export default function Work() {
	return (
		<main id="projects">
			<section className="w-full pt-30 pb-20 section-x">
				<SectionHeader title="PROJECTS" subtitle="Stories in progress" layout="split" />
			</section>

			<section className="w-full section-x pb-30">
				<div className="grid grid-cols-12 gap-6" data-stagger>
					{projectStories.map((project) => (
						<AccentCard key={project.id} hover>
							<div className="flex items-start justify-between">
								<p className="text-xs uppercase tracking-[0.35rem] text-white/60">{project.id}</p>
								<p className="text-xs uppercase tracking-[0.35rem] text-white/60">{project.year}</p>
							</div>
							<h3 className="text-2xl font-semibold tracking-[0.2rem] mt-4" data-split-text>
								{project.title}
							</h3>
							<p className="text-xs uppercase tracking-[0.3rem] text-white/60 mt-2">{project.role}</p>
							<p className="text-sm text-white/75 mt-4 leading-relaxed font-medium">{project.concept}</p>
							<p className="text-sm text-white/75 mt-4 leading-relaxed font-medium">{project.why}</p>
							<div className="mt-6 flex flex-wrap gap-2">
								{project.tech.map((tech) => (
									<span
										key={tech}
										className="text-xs tracking-[0.2rem] uppercase px-3 py-1 border border-white/15 rounded-full text-white/70"
									>
										{tech}
									</span>
								))}
							</div>
							<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/75">
								<p className="leading-relaxed font-medium">
									<span className="uppercase text-xs tracking-[0.3rem] text-white/60">Challenge</span>
									<br />
									{project.challenge}
								</p>
								<p className="leading-relaxed font-medium">
									<span className="uppercase text-xs tracking-[0.3rem] text-white/60">Interaction</span>
									<br />
									{project.interaction}
								</p>
							</div>
							<p className="text-xs uppercase tracking-[0.35rem] text-white/50 mt-6">
								{project.atmosphere}
							</p>
						</AccentCard>
					))}
				</div>
			</section>
		</main>
	);
}
