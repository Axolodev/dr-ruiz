import React from 'react';
import { Box, Flex } from '@rebass/grid';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Input from '../../components/Input';

const CenterBox = styled(Box)`
  text-align: center;
`;

const PatientView = props => {
  const { patientList, deletePatient, search } = props;

  const confirmDeletePatient = patient => {
    const confirmation = confirm(
      `¿Seguro que deseas borrar al paciente ${patient.name}?`
    );

    if (!confirmation) return;

    deletePatient(patient.id);
  };

  return (
    <Layout>
      <Box width={1}>
        <Input placeholder="Buscar" onChange={search} />
      </Box>
      <Flex mt={3}>
        <Box>
          <Link to="/nuevo">Crear nuevo paciente</Link>
        </Box>
      </Flex>
      {patientList.map(patient => (
        <Flex pt={3} mt={2} key={patient.id}>
          <Box width={3 / 4}>{patient.name}</Box>
          <CenterBox width={1 / 8}>
            <Link to={`/detalle/${patient.id}`}>Ver</Link>
          </CenterBox>
          <CenterBox width={1 / 8}>
            <a href="#" onClick={() => confirmDeletePatient(patient)}>
              Borrar
            </a>
          </CenterBox>
        </Flex>
      ))}
    </Layout>
  );
};

export default PatientView;