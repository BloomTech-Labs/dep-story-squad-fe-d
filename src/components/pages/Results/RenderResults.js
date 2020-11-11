import React, { useState, useEffect } from 'react';
import { Header } from '../../common';
import { Row, Col, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import ResultsContent from './ResultsContent';
const RenderResults = props => {
  const [faceoffs, setFaceoffs] = useState([]);
  const { push } = useHistory();

  useEffect(() => {
    setFaceoffs(props.squad);
    console.log(props.squad);
  }, [props]);

  const handleVote = e => {
    e.preventDefault();
    push('/child/squad-vote');
  };

  const backButton = e => {
    e.preventDefault();
    push('/child/dashboard');
  };

  return (
    <>
      <Header displayMenu={true} title="The Results" />
      <div className="matchup-container">
        <Row className="toprow">
          <Col className="green-box" xs={24} sm={13}>
            {faceoffs[0] && <ResultsContent content={faceoffs[0]} />}
          </Col>
          <Col className="red-box" xs={24} sm={11}>
            {faceoffs[1] && <ResultsContent content={faceoffs[1]} />}
          </Col>
        </Row>
        <Row className="bottomrow">
          <Col className="yellow-box" xs={24} sm={11}>
            {faceoffs[2] && <ResultsContent content={faceoffs[2]} />}
          </Col>
          <Col className="blue-box" xs={24} sm={13}>
            {faceoffs[3] && <ResultsContent content={faceoffs[3]} />}
          </Col>
        </Row>
        <Button className="back-button" onClick={backButton}>
          Back
        </Button>
        <Button className="vote-button" onClick={handleVote}>
          Vote!
        </Button>
      </div>
    </>
  );
};
export default RenderResults;
