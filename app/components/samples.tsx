import CONSTS from "../consts";
import Sample from "./sample";

export default function Samples() {
  return (
    <section id="samples" className="samples flex flex-col gap-8 w-full">
      <h2 className="font-extrabold text-6xl text-yellow-200">samples.</h2>
      <p className="text-md max-w-4xl">
        Here are some samples of my work. I have experience in full-stack
        development where I mainly used Java for backend. While I have 4+ years
        of Angular experience, my sample projects here are in React and Next.js
        with Tailwind CSS. Go ahead and click on one of the below to go to its
        live site.
      </p>
      <div className="samples-list flex flex-col sm:flex-row sm:flex-wrap gap-24 mt-8">
        {CONSTS.samples.map((sample) => (
          <Sample key={sample.title} sample={sample} />
        ))}
      </div>
    </section>
  );
}
