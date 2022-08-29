import { title } from "../Interfaces/interfaces";
export default function SectionTitle({ title, children }: title) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
