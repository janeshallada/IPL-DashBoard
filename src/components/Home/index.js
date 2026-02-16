// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const updatedTeams = teams.map(team => ({
      id: team.id,
      name: team.name,
      teamImageUrl: team.team_image_url,
    }))

    this.setState({teamsList: updatedTeams, isLoading: false})
  }

  renderTeams = () => {
    const {teamsList} = this.state

    return (
      <ul className="teams-list">
        {teamsList.map(team => (
          <TeamCard key={team.id} teamDetails={team} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-bg">
        <div className="home-content">
          <div className="home-header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="home-heading">IPL Dashboard</h1>
          </div>

          {isLoading ? (
            // eslint-disable-next-line react/no-unknown-property
            <div testid="loader" className="loader-container">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            this.renderTeams()
          )}
        </div>
      </div>
    )
  }
}

export default Home
