import React, { Component } from 'react';
import { Card } from 'antd';

class UserCard extends Component {
  render() {
    const { user } = this.props;

    return (
      <Card title={`@${user.username}`}>
        <h4>Puntaje:</h4>
        <h2>{user.score}</h2>
        {/* <Button></Button> */}
      </Card>
    );
  }
};

export default UserCard;
