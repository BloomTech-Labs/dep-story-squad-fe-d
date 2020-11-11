import React, { useEffect, useState } from 'react';
import matchup_bolt from '../../../assets/images/match_up_images/matchup_bolt.svg';

import { SubmissionViewerModal } from '../../common';

const ResultsContent = props => {
  const [content, setContent] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setContent(props.content);
    }, 1000);
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className={
        content && content.Winner === '1'
          ? 'faceoff winner-left'
          : content && content.Winner === '2'
          ? 'faceoff winner-right'
          : 'faceoff'
      }
    >
      {content && (
        <FaceoffSubDisplay
          sub={content.Submission1}
          type={content.Type}
          greyed={content.Winner === '2'}
        />
      )}
      <img src={matchup_bolt} alt="lightning bolt" />
      {content && (
        <FaceoffSubDisplay
          sub={content.Submission2}
          type={content.Type}
          greyed={content.Winner === '1'}
        />
      )}
      {content && content.Winner === '1' && (
        <div className="points-left">{content.Points}</div>
      )}
      {content && content.Winner === '2' && (
        <div className="points-right">{content.Points}</div>
      )}
      {content && content.Winner === '0' && (
        <>
          <div className="points-left">{Math.round(content.Points / 2)}</div>
          <div className="points-right">{Math.round(content.Points / 2)}</div>
        </>
      )}
    </div>
  );
};

const FaceoffSubDisplay = ({ sub, type, ...props }) => {
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = content => {
    setModalContent(content);
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <SubmissionViewerModal
          content={modalContent}
          showModal={showModal}
          closeModal={() => setShowModal(false)}
        />
      )}
      <div className={props.greyed ? 'sub greyed-out' : 'sub'}>
        <div className="child-info">
          <img src={sub.AvatarURL} alt="text" />
          <span className="name">{sub.Name}</span>
        </div>
        <div className="submission-preview">
          <img
            src={type === 'DRAWING' ? sub.ImgURL : sub.Pages[0].PageURL}
            alt="text"
            onClick={() =>
              openModal(
                type === 'DRAWING' ? [{ ImgURL: sub.ImgURL }] : sub.Pages
              )
            }
          />
        </div>
      </div>
    </>
  );
};

export default ResultsContent;
