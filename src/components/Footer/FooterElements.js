import styled, { css } from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #0d0909;
`;

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const CopyRight = styled.p`
  color: #fff;
  justify-self: start;
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  transition: color 0.3s;
  ${(props) =>
    props.facebook &&
    css`
      &:hover {
        color: #3b5998;
      }
    `}

  ${(props) =>
    props.instagram &&
    css`
      &:hover {
        color: #8a3ab9;
      }
    `}

  ${(props) =>
    props.youtube &&
    css`
      &:hover {
        color: #c4302b;
      }
    `}

  ${(props) =>
    props.twitter &&
    css`
      &:hover {
        color: #00acee;
      }
    `}
`;
