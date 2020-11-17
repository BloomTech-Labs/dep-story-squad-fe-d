import React, { useEffect } from 'react';
import { Header } from '../../common';
import { Col, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import Squadup from '../../../assets/images/Squadup.svg';
import wordbubble from '../../../assets/images/match_up_images/wordbubble.svg';
import wordBubbleright from '../../../assets/images/match_up_images/wordBubbleright.svg';
import { getChildTeam } from '../../../api';
import { connect } from 'react-redux';
import { child } from '../../../state/actions';

const RenderJoinTheSquad = props => {
  const { push } = useHistory();
  const { authState } = useOktaAuth();

  useEffect(() => {
    getChildTeam(authState, props.child.id).then(res => {
      props.setMemberId(res[props.child.id]);
      props.setTeamSubmissions(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState]);

  const teamVote = e => {
    push('/child/point-share');
  };

  return (
    <>
      <Header displayMenu={true} title="JOIN THE SQUAD" />
      <div className="JoinSquadContainer">
        <Col className="joinSquad1" xs={24} sm={12}>
          <div className="imgContain1">
            <p className="text">
              Hi! <br></br>My name is {props.team.child1.ChildName}.
            </p>
            <img className="wordBubble" src={wordbubble} alt="word bubble" />
            <img
              className="star"
              src={Squadup}
              alt="Blast Character Background"
            />
            <img
              className="avatar"
              src={props.team.child1.AvatarURL}
              alt="Child 1's Avatar"
            />
          </div>
        </Col>
        <Col className="joinSquad2" xs={24} sm={12}>
          <div className="imgContain2">
            <p className="text2">
              Hi! <br></br>My name is {props.team.child2.ChildName}.
            </p>
            <img
              className="wordBubble2"
              src={wordBubbleright}
              alt="word bubble"
            />
            <img
              className="star2"
              src={Squadup}
              alt="Blast Character Background"
            />
            <img
              className="avatar2"
              src={props.team.child2.AvatarURL}
              alt="Child 2's Avatar"
            />
          </div>
        </Col>
      </div>
      <footer>
        <p className="instructionsSharePoints">
          Now it's time to distribute points between you and your teammate!
        </p>
        <Button
          selection="#eb7d5b"
          className="sharePoints"
          type="primary"
          size="large"
          onClick={teamVote}
        >
          Share Points
        </Button>
      </footer>
    </>
  );
};

export default connect(
  state => ({
    team: state.team,
    child: state.child,
    avatarURL: state.AvatarURL,
  }),
  {
    setMemberId: child.setMemberId,
  }
)(RenderJoinTheSquad);
