// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails

  const statusClass = matchStatus === 'Won' ? 'status-won' : 'status-lost'

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-logo"
      />
      <p className="match-card-team-name">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={`match-card-status ${statusClass}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
