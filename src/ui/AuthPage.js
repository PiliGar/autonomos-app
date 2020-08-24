import React from "react";
import styled from "styled-components";
import { Sidebar, List, ListItem, Link } from "bluejay-ui";
import { ReactComponent as Customer } from "../images/customer.svg";
import { Link as RouterLink } from "react-router-dom";
const Container = styled.div`
  display: flex;
  background: white;
`;

const MainContainer = styled.div`
  flex-grow: 1;
  margin: 15px;
  height: calc(100vh-30px);
  background: linear-gradient(180deg, #edf0f4 0%, #dadde1 100%);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding-bottom: 60px;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1.5px solid #19c3fc;
`;

const AuthPage = ({ user, children }) => {
  const items = [{ name: "Clientes", icon: Customer }];
  console.log(user);
  return (
    <>
      <Container>
        <Sidebar defaultOpen={false}>
          <List>
            {items.map((item, key) => (
              <Link
                key={key}
                as={RouterLink}
                to="/"
                style={{ textDecoration: "none" }}
              >
                <ListItem icon={item.icon}>{item.name}</ListItem>
              </Link>
            ))}
          </List>
          {user.imageUrl && (
            <ImageContainer>
              <ProfileImage src={user.imageUrl} />
            </ImageContainer>
          )}
        </Sidebar>
      </Container>
      <MainContainer>{children}</MainContainer>
    </>
  );
};

export default AuthPage;
