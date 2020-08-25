import React from "react";
import { Text, Card, Input } from "bluejay-ui";
import styled from "styled-components";

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  div {
    flex-basis: 30%;
  }
`;

const Profile = () => {
  return (
    <>
      <Text as="span" color="default">
        EDITAR {""}
        <Text as="B" style={{ fontSize: 25 }} color="black">
          Perfil
        </Text>
      </Text>
      <Card style={{ marginTop: 30, padding: "50px 100px" }}>
        <Text style={{ fontSize: 18 }} color="black">
          Información personal
        </Text>
        <form>
          <FormRow>
            <Input name="Nombre" label="Nombre"></Input>
            <Input name="Nombre" label="Nombre"></Input>
            <Input name="Nombre" label="Nombre"></Input>
          </FormRow>
        </form>
      </Card>
    </>
  );
};

export default Profile;
