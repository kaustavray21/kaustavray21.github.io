export function Bar() {
  const scroll = () => document.getElementById('statement')?.scrollIntoView({ behavior: 'smooth' })
  return (
    <div className="bar wide" role="presentation">
      <span>
        EST <span className="text-grey">2021</span>
      </span>
      <button type="button" className="bar-scroll" onClick={scroll}>
        SCROLL DOWN
        <span className="bar-arrow" aria-hidden>
          ↓
        </span>
      </button>
      <span className="text-grey">BASED IN BENGALURU</span>
    </div>
  )
}
