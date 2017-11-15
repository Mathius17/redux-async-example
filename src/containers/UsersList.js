import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import UserCard from '../components/UserCard';

const UsersContainer = (props) => {
  const users = props.users.map((user, key) =>
    <Col key={key} span={3}>
      <UserCard user={user} />
    </Col>
  );

  return (
    <Row type="flex" gutter={8}>
      {users}
    </Row>
  );
}

const mapStateToProps = state => ({
  users: state.users,
})

export default connect(mapStateToProps)(UsersContainer);
