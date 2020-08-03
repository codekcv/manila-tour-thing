import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import styled from 'styled-components';

const Day = ({ day, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  const toggleInfo = () => {
    setShowInfo(showInfo => !showInfo);
  };

  return (
    <Container onClick={toggleInfo}>
      <h4>
        {day}
        <button className="btn">
          <FaAngleDown />
        </button>
      </h4>

      {showInfo && <p>{info}</p>}
    </Container>
  );
};

const Container = styled.article`
  margin: 2rem 0;
  cursor: pointer;

  h4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 400px;
  }

  p {
    line-height: 2;
    transition: var(--mainTransition);
  }

  .btn {
    background: transparent;
    border: none;
    outline: none;
  }

  .btn svg {
    font-size: 1.5rem;
    color: var(--primaryColor);
  }
`;

export default Day;
