import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    console.log(this.props.pokemon)

    const hp = this.props.pokemon.stats.find(s => s.name === 'hp').value
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.props.pokemon.sprites.front} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
