import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.background};
  position: relative;
  width: 100vw;
  height: 100vh;

  .home {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &_content {
      &_title {
        font-size: 28px;
        color: ${props => props.theme.primary};
      }

      &_subtitle {
        font-size: 20px;
        max-width: 530px;
        color: ${props => props.theme.primaryLight};
      }

      &_link {
        font-size: 16px;
        color: ${props => props.theme.primary};
      }
    }

    &_image {
      display: none;
    }

    @media (min-width: 768px) {
      &_content {
        &_title {
          font-size: 40px;
          color: ${props => props.theme.primary};
        }

        &_subtitle {
          font-size: 24px;
          color: ${props => props.theme.primaryLight};
        }

        &_link {
          font-size: 16px;
          color: ${props => props.theme.primary};
        }
      }

      .home_image {
        display: flex;
      }
    }
  }
`;
