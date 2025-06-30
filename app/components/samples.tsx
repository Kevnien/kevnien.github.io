import CONSTS from "../consts";
import Sample from "./sample";

export default function Samples() {
  return (
    <section id="samples" className="samples flex flex-col gap-4">
      <h2 className="font-extrabold text-6xl text-yellow-200">samples.</h2>
      <p className="text-md">
        Here are some samples of my work. I have experience in full-stack
        development, with a focus on front-end technologies like React and
        Next.js. I enjoy learning new technologies and am always looking for
        ways to improve my skills.
      </p>
      <div className="samples-list flex flex-col sm:flex-row sm:flex-wrap gap-8">
        {CONSTS.samples.map((sample) => (
          <Sample key={sample.title} sample={sample} />
        ))}
      </div>
    </section>
  );
}
