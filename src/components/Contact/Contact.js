import React from 'react';
import Title from '../Title';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Container>
      <Title title="contact" subtitle="us" />

      <div className="center">
        <form
          className="form"
          action="https://formspree.io/mabaetbaet@gmail.com"
          method="POST"
        >
          <div>
            <label className="label" htmlFor="name">
              name
            </label>

            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="karl"
            />
          </div>

          <div>
            <label className="label" htmlFor="email">
              email
            </label>

            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className="label" htmlFor="message">
              message
            </label>

            <textarea
              className="form-control"
              name="message"
              id="message"
              rows="10"
              placeholder="Hello there
              The angel from my nightmare
              The shadow in the background of the morgue
              The unsuspecting victim
              Of darkness in the valley
              We can live like Jack and Sally if we want
              Where you can always find me
              And we'll have Halloween on Christmas
              And in the night we'll wish this never ends
              We'll wish this never ends"
            />
          </div>

          <div>
            <input className="form-control" type="submit" value="submit here" />
          </div>
        </form>
      </div>
    </Container>
  );
};

const Container = styled.section`
  padding: 4rem 0;

  .center {
    width: 50vw;
    margin: 0 auto;
  }

  .form-control,
  .submit {
    width: 100%;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0.375rem 0.75rem;
    border: 1px solid var(--darkGrey);
    border-radius: 0.25rem;
  }

  .submit {
    background-color: var(--primaryColor);
    border-color: var(--primaryColor);
    text-transform: uppercase;
    color: var(--mainBlack);
    transition: var(--mainTransition);
    cursor: pointer;
  }

  .submit:hover {
    background: var(--darkGrey);
    color: var(--mainWhite);
    border-color: var(--darkGrey);
  }

  .label {
    text-transform: capitalize;
    display: block;
    margin-bottom: 0.5rem;
  }
`;

export default Contact;
