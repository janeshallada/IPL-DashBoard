// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getFormattedMatch = match => ({
    umpires: match.umpires,
    result: match.result,
    manOfTheMatch: match.man_of_the_match,
    id: match.id,
    date: match.date,
    venue: match.venue,
    competingTeam: match.competing_team,
    competingTeamLogo: match.competing_team_logo,
    firstInnings: match.first_innings,
    secondInnings: match.second_innings,
    matchStatus: match.match_status,
  })

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedLatestMatch = this.getFormattedMatch(data.latest_match_details)
    const updatedRecentMatches = data.recent_matches.map(each =>
      this.getFormattedMatch(each),
    )

    this.setState({
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: updatedLatestMatch,
      recentMatches: updatedRecentMatches,
      isLoading: false,
    })
  }

  renderTeamMatches = () => {
    const {teamBannerUrl, latestMatchDetails, recentMatches} = this.state

    return (
      <div className="team-matches-content">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <h1 className="latest-matches-heading">Latest Matches</h1>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="recent-matches-list">
          {recentMatches.map(eachMatch => (
            <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }

  getGradientClass = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    // Different gradient classes for different teams
    switch (id) {
      case 'RCB':
        return 'rcb-bg'
      case 'KKR':
        return 'kkr-bg'
      case 'KXP':
        return 'kxp-bg'
      case 'CSK':
        return 'csk-bg'
      case 'RR':
        return 'rr-bg'
      case 'MI':
        return 'mi-bg'
      case 'SRH':
        return 'srh-bg'
      case 'DC':
        return 'dc-bg'
      default:
        return 'default-team-bg'
    }
  }

  render() {
    const {isLoading} = this.state
    const gradientClass = this.getGradientClass()

    return (
      <div className={`team-matches-bg ${gradientClass}`}>
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
