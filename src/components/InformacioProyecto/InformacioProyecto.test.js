import React from 'react';
import { render, screen } from '@testing-library/react';
import {InformacioProyecto} from './InformacioProyecto'

const json={
  "nombre": "WI buckets",
  "imagen": "https://cdn.discordapp.com/attachments/471909299753451523/814307715815309352/unknown.png",
  "emprendedor": "Sergio Alejandro",
  "video": "https://www.youtube.com/watch?v=T2xLJ-rU3wQ",
  "link": "https://en.wikipedia.org/wiki/Bucket",
  "pais": "Colombia",
  "descripcion": "Por una ciudad limpia, ordenada e inteligente"
}
const finanzas = {
    "valor": "$1.000.000",
    "numeroInversionistas": "5",
    "valoracion": "50.000",
    "inversionMinima": "30.000",
    "socios": "465",
    "fechaInicio": "25/01/2017",
    "fechaFin": "24/02/2022"
}
const {nombre, imagen, emprendedor, video, link, pais, descripcion} = json;
const {valor, numeroInversionistas, valoracion, inversionMinima, socios, fechaInicio, fechaFin} = finanzas;

test('renders learn react link', () => {
  render(<InformacioProyecto nombreProyecto = "WI buckets" nombreUsuario = "Sergio Alejandro" fotoPerfil = 'Ruta de la foto de perfil'/>);
  const linkElement = screen.getByText(/WI buckets/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<InformacioProyecto nombreProyecto = "WI buckets" nombreUsuario = "Sergio Alejandro" fotoPerfil = 'Ruta de la foto de perfil' />);
  const linkElement = screen.getByText(/Sergio Alejandro/i);
  expect(linkElement).toBeInTheDocument();
});
