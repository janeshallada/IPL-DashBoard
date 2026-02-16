// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-card">
      <div className="latest-match-main">
        <div className="latest-match-text">
          <p className="latest-match-competing-team">{competingTeam}</p>
          <p className="latest-match-date">{date}</p>
          <p className="latest-match-venue">{venue}</p>
          <p className="latest-match-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-match-logo"
        />
      </div>

      <hr className="latest-divider" />

      <div className="latest-match-extra">
        <div className="latest-col">
          <p className="latest-label">First Innings</p>
          <p className="latest-value">{firstInnings}</p>
        </div>
        <div className="latest-col">
          <p className="latest-label">Second Innings</p>
          <p className="latest-value">{secondInnings}</p>
        </div>
        <div className="latest-col">
          <p className="latest-label">Man Of The Match</p>
          <p className="latest-value">{manOfTheMatch}</p>
        </div>
        <div className="latest-col">
          <p className="latest-label">Umpires</p>
          <p className="latest-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
