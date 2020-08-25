import React, { useState } from "react";
import { Text, Card, Input } from "bluejay-ui";
import styled from "styled-components";
import { Button } from "../ui/index";
import { ReactComponent as Save } from "../images/save.svg";
import request from "../utils/request";

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  div {
    flex-basis: 30%;
  }
`;

const Profile = ({ user, updateUser }) => {
  const [nextUser, setNextUser] = useState(user);
  const upadateUserState = ({ target: { name, value } }) =>
    setNextUser({ ...nextUser, [name]: value });
  const onSubmit = (e) => {
    e.preventDefault();
    request(`ApplicationUsers/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify(nextUser),
    }).then((user) => updateUser(user));
  };
  return (
    <>
      <Text as="span" color="default">
        EDITAR {""}
        <Text as="b" style={{ fontSize: 25 }} color="black">
          Perfil
        </Text>
      </Text>
      <Card style={{ marginTop: 30, padding: "50px 100px" }}>
        <form onSubmit={onSubmit}>
          <Text style={{ fontSize: 18 }} color="black">
            Información personal
          </Text>
          <FormRow>
            <Input
              onChange={upadateUserState}
              name="name"
              label="Nombre"
              value={nextUser.name}
              type="text"
            ></Input>
            <Input
              onChange={upadateUserState}
              name="firstName"
              label="PrimerApellido"
              value={nextUser.firstName}
            ></Input>
            <Input
              onChange={upadateUserState}
              name="lastName"
              label="Nombre"
              value={nextUser.lastName}
              type="text"
            ></Input>
          </FormRow>
          <FormRow>
            <Input
              onChange={upadateUserState}
              name="phone"
              label="Teléfono móvil"
              value={nextUser.phone}
              type="telephone"
            ></Input>
            <Input
              onChange={upadateUserState}
              name="dni"
              label="DNI"
              value={nextUser.dni}
              type="text"
            ></Input>
            <Input
              onChange={upadateUserState}
              name="email"
              label="Email"
              value={nextUser.email}
            ></Input>
          </FormRow>
          <Text style={{ fontSize: 18 }} color="black">
            Información de facturación
          </Text>
          <FormRow>
            <Input
              onChange={upadateUserState}
              name="billingCity"
              label="Ciudad"
              value={nextUser.billingCity}
              type="text"
            ></Input>
            <Input
              onChange={upadateUserState}
              name="billingAddress"
              label="Dirección"
              value={nextUser.billingAddress}
              type="text"
            ></Input>
            <Input
              onChange={upadateUserState}
              name="billingPostalCode"
              label="Código Postal"
              value={nextUser.billingPostalCode}
            ></Input>
          </FormRow>
          <FormRow>
            <Input
              onChange={upadateUserState}
              name="irpf"
              label="IRPF %"
              value={nextUser.irpf}
              type="number"
            ></Input>
            <Input
              onChange={upadateUserState}
              name="billingPaymentMethod"
              label="Método de pago"
              value={nextUser.billingPaymentMethod}
              type="text"
            ></Input>
          </FormRow>
          <Button
            icon={Save}
            color="primary"
            style={{ marginTop: 30, fontWeight: 600 }}
          >
            Guardar
          </Button>
        </form>
      </Card>
    </>
  );
};

export default Profile;
