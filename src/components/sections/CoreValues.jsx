import SectionTitle from "../ui/SectionTitle";
import ValueCard from "../ui/ValueCard";
import values from "../../data/values";

const CoreValues = () => (
  <section className="bg-white py-24">
    <div className="mx-auto max-w-7xl px-5 lg:px-6">
      <SectionTitle subtitle="Our values" title="How we choose to build and work" description="Technology changes quickly. Our principles are the part of NTS that should remain consistent." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{values.map((value, index) => <ValueCard key={value.title || index} title={value.title} description={value.description} icon={value.icon} />)}</div>
    </div>
  </section>
);
export default CoreValues;
