import { education } from '../data/experience'

export function Education() {
  return (
    <section className="edu" aria-labelledby="edu-h">
      <p className="sec-label"><span className="dot" aria-hidden /> (EDUCATION)</p>
      <h2 id="edu-h" className="sr-only">Education</h2>
      <ul>
        {education.map((e) => (
          <li key={e.degree}>
            <span className="edu-period wide">{e.period}</span>
            <span className="edu-degree">{e.degree}</span>
            <span className="edu-school">{e.school}</span>
            <span className="edu-note">{e.note}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
